#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/app}"
VENV_DIR="${VENV_DIR:-/opt/venv}"
REQ_FILE="${REQ_FILE:-${APP_DIR}/requirements.txt}"

if [[ ! -f "${REQ_FILE}" ]]; then
  echo "[entrypoint] requirements.txt not found at ${REQ_FILE}"
  exit 1
fi

mkdir -p "${VENV_DIR}"

REQ_HASH_FILE="${VENV_DIR}/.requirements.sha256"
REQ_HASH="$(sha256sum "${REQ_FILE}" | awk '{print $1}')"
PREV_HASH=""
if [[ -f "${REQ_HASH_FILE}" ]]; then
  PREV_HASH="$(cat "${REQ_HASH_FILE}" || true)"
fi

if [[ ! -x "${VENV_DIR}/bin/python" ]] || [[ "${REQ_HASH}" != "${PREV_HASH}" ]]; then
  echo "[entrypoint] Creating/updating venv at ${VENV_DIR}"
  python -m venv "${VENV_DIR}"
  "${VENV_DIR}/bin/python" -m pip install --no-cache-dir --disable-pip-version-check --upgrade pip setuptools wheel
  echo "[entrypoint] Installing requirements from ${REQ_FILE}"
  "${VENV_DIR}/bin/pip" install --no-cache-dir --disable-pip-version-check -r "${REQ_FILE}"
  echo "${REQ_HASH}" > "${REQ_HASH_FILE}"
else
  echo "[entrypoint] Reusing existing venv at ${VENV_DIR}"
fi

exec "${VENV_DIR}/bin/python" "${APP_DIR}/start_prod.py"

