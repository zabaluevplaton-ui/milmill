#!/usr/bin/env bash
set -euo pipefail

echo "[EPICUREAN] Installing dependencies..."
npm install

echo "[EPICUREAN] Starting Expo web preview..."
npm run web
