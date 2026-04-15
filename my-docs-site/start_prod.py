import json
import mimetypes
import os
import subprocess
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

SITE_DIR = Path(__file__).resolve().parent
BUILD_DIR = SITE_DIR / 'build'
PORT = int(os.environ.get('PORT', '3000'))
RUN_RECIPE = SITE_DIR / 'run_recipe.py'


class AppHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BUILD_DIR), **kwargs)

    def do_OPTIONS(self):
        if self.path == '/run-recipe':
            self.send_response(204)
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
            self.send_header('Access-Control-Allow-Headers', 'Content-Type')
            self.end_headers()
            return

        self.send_response(204)
        self.end_headers()

    def do_GET(self):
        pathname = urlparse(self.path).path
        if pathname == '/healthz':
            self._send_json(200, {'ok': True})
            return
        self._serve_static(pathname, head_only=False)

    def do_HEAD(self):
        pathname = urlparse(self.path).path
        if pathname == '/healthz':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            return
        self._serve_static(pathname, head_only=True)

    def do_POST(self):
        pathname = urlparse(self.path).path
        if pathname != '/run-recipe':
            self._send_json(404, {'error': 'Not found'})
            return

        content_length = int(self.headers.get('Content-Length', '0'))
        payload = self.rfile.read(content_length)

        process = subprocess.run(
            [sys.executable, str(RUN_RECIPE)],
            input=payload,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            cwd=str(SITE_DIR),
        )

        if process.returncode == 0:
            raw = process.stdout or b'{}'
            try:
                response = json.loads(raw.decode('utf-8'))
            except json.JSONDecodeError:
                self._send_json(500, {'error': raw.decode('utf-8', errors='replace')})
                return
            self._send_json(200, response)
            return

        message = process.stderr.decode('utf-8', errors='replace').strip() or process.stdout.decode('utf-8', errors='replace').strip() or 'Recipe runner failed.'
        try:
            parsed = json.loads(message)
            if isinstance(parsed, dict) and parsed.get('error'):
                message = parsed['error']
        except json.JSONDecodeError:
            pass

        self._send_json(500, {'error': message})

    def translate_path(self, path):
        pathname = urlparse(path).path
        cleaned = pathname.lstrip('/') or 'index.html'
        return str(BUILD_DIR / cleaned)

    def log_message(self, format, *args):
        sys.stderr.write('%s - - [%s] %s\n' % (self.address_string(), self.log_date_time_string(), format % args))

    def _serve_static(self, pathname, *, head_only):
        relative = pathname.lstrip('/') or 'index.html'
        candidate = BUILD_DIR / relative
        if candidate.is_dir():
            candidate = candidate / 'index.html'
        if not candidate.exists() or not candidate.is_file():
            candidate = BUILD_DIR / 'index.html'

        if not candidate.exists():
            self._send_json(500, {'error': 'Static build not found'})
            return

        content_type = mimetypes.guess_type(str(candidate))[0] or 'application/octet-stream'
        data = candidate.read_bytes()

        self.send_response(200)
        self.send_header('Content-Type', f'{content_type}; charset=utf-8' if content_type.startswith('text/') or content_type in {'application/javascript', 'application/json'} else content_type)
        self.send_header('Content-Length', str(len(data)))
        self.end_headers()

        if not head_only:
            self.wfile.write(data)

    def _send_json(self, status_code, payload):
        data = json.dumps(payload).encode('utf-8')
        self.send_response(status_code)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(data)))
        self.end_headers()
        self.wfile.write(data)


if __name__ == '__main__':
    server = ThreadingHTTPServer(('0.0.0.0', PORT), AppHandler)
    print(f'[prod-server] Listening on http://0.0.0.0:{PORT}')
    print(f'[prod-server] Static build -> {BUILD_DIR}')
    print(f'[prod-server] Recipe runner -> {RUN_RECIPE}')
    server.serve_forever()
