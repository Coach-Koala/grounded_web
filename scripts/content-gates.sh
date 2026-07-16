#!/usr/bin/env bash
# Content gates over the built site (specs: F3, F10, T1, T4).
# Run after `next build`; fails loud on any violation.
set -euo pipefail

OUT_DIR="${1:-out}"
FAIL=0

if [ ! -d "$OUT_DIR" ]; then
  echo "FAIL: build output directory '$OUT_DIR' does not exist — run next build first" >&2
  exit 1
fi

echo "== Gate F3: no placeholder pricing numerals =="
if grep -rEl '\$1[05],?000|\$30,?000|\$15[Kk]|\$30[Kk]' "$OUT_DIR" --include='*.html' --include='*.txt' --include='*.js'; then
  echo "FAIL: placeholder pricing found in built output (pricing is not final — task t_18b035a6)" >&2
  FAIL=1
fi

echo "== Gate F10: no banned naming =="
if grep -rEil 'HippoHealth|Hippo Health|Hip Health' "$OUT_DIR" --include='*.html' --include='*.txt'; then
  echo "FAIL: banned brand naming found — the name is 'Grounded Health' (brand guide §1)" >&2
  FAIL=1
fi

echo "== Gate T1: CNAME matches expected domain =="
if [ "$(cat public/CNAME)" != "getgroundedhealth.com" ]; then
  echo "FAIL: public/CNAME does not read 'getgroundedhealth.com'" >&2
  FAIL=1
fi

echo "== Gate T4: no source maps in published output =="
if find "$OUT_DIR" -name '*.map' | grep -q .; then
  echo "FAIL: source maps found in build output" >&2
  FAIL=1
fi

echo "== Gate F7: no raw hex colors outside tokens.css =="
if grep -rEln '#[0-9a-fA-F]{6}\b' src --include='*.tsx' --include='*.ts'; then
  echo "FAIL: hex color literal outside src/styles/tokens.css" >&2
  FAIL=1
fi

if [ "$FAIL" -ne 0 ]; then
  echo "Content gates FAILED" >&2
  exit 1
fi
echo "All content gates passed."
