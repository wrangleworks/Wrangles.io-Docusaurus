const fs = require('fs');
const http = require('http');
const path = require('path');
const {spawn} = require('child_process');

const host = process.env.RECIPE_RUNNER_HOST || '127.0.0.1';
const port = Number(process.env.RECIPE_RUNNER_PORT || 3001);
const siteDir = path.resolve(__dirname, '..');
const runnerPath = path.join(siteDir, 'run_recipe.py');

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return {};
  }

  const env = {};
  for (const rawLine of fs.readFileSync(filePath, 'utf8').split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) {
      continue;
    }

    const separatorIndex = line.indexOf('=');
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');
    env[key] = value;
  }

  return env;
}

const fileEnv = {
  ...loadEnvFile(path.join(siteDir, '.env')),
  ...loadEnvFile(path.join(siteDir, '..', '.env')),
};

const runnerEnv = {
  ...fileEnv,
  ...process.env,
};

function writeJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json; charset=utf-8',
  });
  response.end(JSON.stringify(payload));
}

function logRunnerFailure({payload, stdout, stderr, message}) {
  console.error('[recipe-runner] Request failed');
  console.error('[recipe-runner] Recipe preview:');
  console.error((payload.recipe || '').split('\n').slice(0, 12).join('\n'));
  if (stderr.trim()) {
    console.error('[recipe-runner] Python stderr:');
    console.error(stderr.trim());
  }
  if (stdout.trim()) {
    console.error('[recipe-runner] Python stdout:');
    console.error(stdout.trim());
  }
  console.error(`[recipe-runner] Response message: ${message}`);
}

function runRecipe(payload) {
  return new Promise((resolve, reject) => {
    const child = spawn('python3', [runnerPath], {
      cwd: siteDir,
      env: runnerEnv,
      stdio: ['pipe', 'pipe', 'pipe'],
    });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString();
    });

    child.on('error', (error) => {
      reject(new Error(`Failed to start python runner: ${error.message}`));
    });

    child.on('close', (code) => {
      if (code === 0) {
        try {
          resolve(JSON.parse(stdout));
        } catch (error) {
          const message = `Recipe runner returned invalid JSON: ${stdout || error.message}`;
          logRunnerFailure({payload, stdout, stderr, message});
          reject(new Error(message));
        }
        return;
      }

      let message = stderr.trim() || stdout.trim() || `Recipe runner exited with code ${code}`;
      try {
        const parsed = JSON.parse(stderr || stdout);
        message = parsed.error || message;
      } catch (_error) {
        // Keep the raw stderr/stdout message.
      }

      logRunnerFailure({payload, stdout, stderr, message});
      reject(new Error(message));
    });

    child.stdin.write(JSON.stringify(payload));
    child.stdin.end();
  });
}

const server = http.createServer((request, response) => {
  if (request.method === 'OPTIONS') {
    writeJson(response, 204, {});
    return;
  }

  if (request.method !== 'POST' || request.url !== '/run-recipe') {
    writeJson(response, 404, {error: 'Not found'});
    return;
  }

  let body = '';
  request.on('data', (chunk) => {
    body += chunk.toString();
  });

  request.on('end', async () => {
    try {
      const payload = JSON.parse(body || '{}');
      const result = await runRecipe(payload);
      writeJson(response, 200, result);
    } catch (error) {
      console.error('[recipe-runner] HTTP request failed:', error.message);
      writeJson(response, 500, {error: error.message});
    }
  });
});

server.listen(port, host, () => {
  console.log(`Recipe runner listening on http://${host}:${port}`);
});
