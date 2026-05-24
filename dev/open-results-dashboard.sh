#!/usr/bin/env bash
set -euo pipefail

PORT="${PORT:-8090}"
HOST="127.0.0.1"
URL="http://${HOST}:${PORT}/dev/results-dashboard.html"

cd "$(dirname "${BASH_SOURCE[0]}")/.."

if command -v xdg-open >/dev/null 2>&1; then
  OPENER=(xdg-open "$URL")
elif command -v gio >/dev/null 2>&1; then
  OPENER=(gio open "$URL")
elif command -v open >/dev/null 2>&1; then
  OPENER=(open "$URL")
else
  OPENER=()
fi

if command -v python3 >/dev/null 2>&1; then
  PYTHON=(python3)
elif command -v python >/dev/null 2>&1; then
  PYTHON=(python)
else
  echo "Error: python3 or python is required to start the local server." >&2
  exit 1
fi

if command -v ss >/dev/null 2>&1 && ss -ltn "sport = :${PORT}" | grep -q ":${PORT}"; then
  echo "Port ${PORT} is already in use. Opening dashboard only: ${URL}"
  if ((${#OPENER[@]})); then
    "${OPENER[@]}" >/dev/null 2>&1 &
  else
    echo "Open this URL manually: ${URL}"
  fi
  exit 0
fi

echo "Starting local server on http://${HOST}:${PORT}"
echo "Opening ${URL}"
echo "Press Ctrl+C to stop the server."

if ((${#OPENER[@]})); then
  "${OPENER[@]}" >/dev/null 2>&1 &
else
  echo "No browser opener found. Open this URL manually: ${URL}"
fi

"${PYTHON[@]}" -m http.server "${PORT}" --bind "${HOST}"
