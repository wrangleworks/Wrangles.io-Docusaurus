import os
import sys
import time
import json
import logging
import pathlib
import re
import requests

# ---------- logging ----------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

# ---------- config ----------
API_TOKEN = os.getenv("API_TOKEN")
WIKI_BASE_URL = "https://dev.wrangles.io" 
WIKI_GRAPHQL_URL = f"{WIKI_BASE_URL}/graphql"

CURRENT_DIR = pathlib.Path(os.getcwd())
OUT_DIR = CURRENT_DIR / "docs"
STATIC_DIR = CURRENT_DIR / "static" 

RATE_LIMIT_DELAY = 0.2
HEAD = {"Authorization": f"Bearer {API_TOKEN}"}

# ---------- GraphQL queries ----------
SINGLE_BY_PATH_Q = """
query($path: String!, $locale: String!) {
  pages {
    singleByPath(path: $path, locale: $locale) {
      id
      path
      locale
      content
    }
  }
}
"""

PAGES_LIST_WITH_LOCALE_Q = """
query GetPagePathsAndLocales {
  pages {
    list {
      path
      locale
    }
  }
}
"""

# ---------- SANITIZERS & HELPERS ----------

def download_image(image_path):
    """
    Downloads images and returns the path relative to the static folder.
    """
    clean_image_path = image_path.split('?')[0]
    
    if image_path.startswith("http"):
        remote_url = image_path
    else:
        remote_url = f"{WIKI_BASE_URL}/{image_path.lstrip('/')}"

    local_rel_path = clean_image_path.lstrip('/')
    local_dest = STATIC_DIR / local_rel_path

    if local_dest.exists():
        return f"/{local_rel_path}" # Return absolute path for Docusaurus

    try:
        local_dest.parent.mkdir(parents=True, exist_ok=True)
        # logger.info(f"   ⬇ Downloading image: {local_rel_path}")
        r = requests.get(remote_url, timeout=10)
        if r.status_code == 200:
            local_dest.write_bytes(r.content)
            return f"/{local_rel_path}"
        return image_path
    except Exception as e:
        logger.warning(f"   ⚠️ Image fail: {e}")
        return image_path

def sanitize_text_segment(text):
    """
    Aggressively cleans text segments (OUTSIDE of code blocks).
    """
    # 1. Escape curly braces (The #1 cause of 'acorn' errors)
    text = text.replace("{", "\\{").replace("}", "\\}")
    
    # 2. Escape HTML tags that aren't breaks
    # We replace < with &lt;, but restore <br /> later
    text = text.replace("<", "&lt;")
    
    # 3. Restore standard breaks (Docusaurus likes <br />)
    text = re.sub(r'&lt;br\s*/?>', '<br />', text, flags=re.IGNORECASE)

    # 4. Fix Lazy Lists (The #1 cause of 'lazy line' errors)
    # If a line has text, and the next line starts with * or -, MDX crashes.
    # We force a double newline.
    text = re.sub(r'([^\n])\n(\s*[-*]\s)', r'\1\n\n\2', text)

    # 5. Fix Lazy Blockquotes
    text = re.sub(r'([^\n])\n(\s*>\s)', r'\1\n\n\2', text)

    # 6. Handle Images (Download and reformat)
    # Regex for ![alt](url)
    def img_replacer(match):
        alt = match.group(1)
        url = match.group(2)
        new_url = download_image(url)
        return f"![{alt}]({new_url})"
    
    text = re.sub(r'!\[(.*?)\]\((.*?)\)', img_replacer, text)

    return text

def clean_mdx_content(raw_content, page_path):
    if not raw_content: return ""

    # --- 1. EXTRACT FRONT MATTER ---
    lines = raw_content.splitlines()
    metadata = {}
    content_start_index = 0
    meta_pattern = re.compile(r"^([a-zA-Z0-9_]+):\s*(.+)$")
    
    for i, line in enumerate(lines):
        line = line.strip()
        if not line:
            content_start_index = i + 1
            break
        match = meta_pattern.match(line)
        if match:
            metadata[match.group(1)] = match.group(2).strip()
        else:
            if line == "---":
                if i == 0: continue
                content_start_index = i + 1
                break
            content_start_index = i
            break
    
    body_content = "\n".join(lines[content_start_index:]).strip()

    # --- 2. SPLIT BY CODE BLOCKS ---
    # We MUST NOT touch content inside ``` code blocks or ` inline code.
    # Pattern captures: Triple backticks OR Single backticks
    # Group 1 is the separator (the code block itself)
    parts = re.split(r'(```[\s\S]*?```|`[^`]*`)', body_content)
    
    cleaned_parts = []
    for part in parts:
        # If it starts with a backtick, it's code. Leave it alone.
        if part.startswith('`'):
            cleaned_parts.append(part)
        else:
            # It's text. Scrub it.
            cleaned_parts.append(sanitize_text_segment(part))
            
    final_body = "".join(cleaned_parts)

    # --- 3. REBUILD FRONT MATTER ---
    title = metadata.get("title")
    if not title:
        title = page_path.split('/')[-1].replace('-', ' ').title()
    description = metadata.get("description", "").replace('"', '\\"')
    
    clean_path = page_path.lstrip('/')
    
    front_matter = "---\n"
    front_matter += f'title: "{title}"\n'
    if description:
        front_matter += f'description: "{description}"\n'
    front_matter += f'slug: /{clean_path}\n'
    front_matter += "---\n\n"
    
    return front_matter + final_body

# ---------- CORE FUNCTIONS ----------

def get_full_page_urls():
    headers = {"Content-Type": "application/json", "Authorization": f"Bearer {API_TOKEN}"}
    try:
        response = requests.post(WIKI_GRAPHQL_URL, headers=headers, json={"query": PAGES_LIST_WITH_LOCALE_Q})
        data = response.json()
        if 'data' in data and 'pages' in data['data']:
            return data['data']['pages']['list']
        return []
    except Exception as e:
        logger.error(f"List fetch failed: {e}")
        return []

def fetch_by_path(pth: str, loc: str):
    vars_ = {"path": pth, "locale": loc}
    try:
        time.sleep(RATE_LIMIT_DELAY)
        r = requests.post(WIKI_GRAPHQL_URL, json={"query": SINGLE_BY_PATH_Q, "variables": vars_}, headers=HEAD)
        return r.json().get("data", {}).get("pages", {}).get("singleByPath")
    except:
        return None

def save(page: dict):
    clean_path = page['path'].lstrip('/')
    dest = OUT_DIR / f"{clean_path}.md"
    dest.parent.mkdir(parents=True, exist_ok=True)
    
    raw_content = page.get("content") or ""
    final_content = clean_mdx_content(raw_content, page['path'])
    
    dest.write_text(final_content, encoding="utf-8")
    logger.info(f"✔ Processed: {clean_path}")

def main():
    if not API_TOKEN:
        logger.error("No API_TOKEN found.")
        return

    logger.info("--- STARTING NUCLEAR MIGRATION ---")
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    STATIC_DIR.mkdir(parents=True, exist_ok=True)

    pages = get_full_page_urls()
    logger.info(f"Found {len(pages)} pages to process.")

    for p in pages:
        full_page = fetch_by_path(p['path'], p['locale'])
        if full_page:
            save(full_page)
        else:
            logger.error(f"Failed to fetch {p['path']}")

if __name__ == "__main__":
    main()