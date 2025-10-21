#!/usr/bin/env sh
set -eu
npm ci --omit=dev || npm install --omit=dev
[ -f package.json ] && npm run build || true
npm run start
