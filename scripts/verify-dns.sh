#!/usr/bin/env bash
# Launch verification for getgroundedhealth.com (specs: F2, F5).
# Run after the GoDaddy records are set and the Pages custom domain is saved.
set -euo pipefail

DOMAIN="getgroundedhealth.com"
EXPECTED_A="185.199.108.153 185.199.109.153 185.199.110.153 185.199.111.153"
FAIL=0

echo "== Apex A records =="
ACTUAL_A=$(dig +short A "$DOMAIN" | sort | tr '\n' ' ' | sed 's/ $//')
EXPECTED_SORTED=$(echo "$EXPECTED_A" | tr ' ' '\n' | sort | tr '\n' ' ' | sed 's/ $//')
if [ "$ACTUAL_A" != "$EXPECTED_SORTED" ]; then
  echo "FAIL: apex A records are '$ACTUAL_A', expected '$EXPECTED_SORTED'" >&2
  FAIL=1
else
  echo "OK: $ACTUAL_A"
fi

echo "== www CNAME =="
WWW=$(dig +short CNAME "www.$DOMAIN")
case "$WWW" in
  coach-koala.github.io.|coach-koala.github.io) echo "OK: $WWW" ;;
  *) echo "FAIL: www CNAME is '$WWW', expected 'coach-koala.github.io'" >&2; FAIL=1 ;;
esac

echo "== HTTPS =="
for host in "$DOMAIN" "www.$DOMAIN"; do
  CODE=$(curl -s -o /dev/null -w '%{http_code}' --max-time 15 "https://$host/" || echo "ERR")
  if [ "$CODE" = "200" ] || [ "$CODE" = "301" ]; then
    echo "OK: https://$host/ -> $CODE"
  else
    echo "FAIL: https://$host/ -> $CODE" >&2
    FAIL=1
  fi
done

if [ "$FAIL" -ne 0 ]; then
  echo "DNS verification FAILED" >&2
  exit 1
fi
echo "DNS verification passed."
