#!/usr/bin/env bash
#
# Deploy the 8848 UI docs site to PersonalVPS.
#
#   ./scripts/deploy-docs.sh        # or: pnpm deploy:docs
#
# Flow: stop local dev (it shares apps/docs/.next with the build) ->
# build static export -> rsync out/ to the VPS webroot ->
# verify live URLs -> restart local dev if it was running.
#
# Requires: pnpm, rsync, ssh host "PersonalVPS" (see ~/.ssh/config).
# First-time server setup (vhost + TLS) is manual; see nginx
# /etc/nginx/sites-enabled/8848.aayurtshrestha.com.np on the VPS.
set -euo pipefail

DOMAIN="8848.aayurtshrestha.com.np"
SSH_HOST="PersonalVPS"
WEBROOT="/var/www/8848.aayurtshrestha.com.np"
DEV_PORT="3001"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

log() { printf '\n==> %s\n' "$*"; }
fail() { echo "ERROR: $*" >&2; exit 1; }

restart_dev() {
  log "Restarting local dev on :$DEV_PORT"
  # shellcheck disable=SC2094
  (nohup pnpm --filter @aayurt/8848-ui-docs dev > /tmp/docs-dev.log 2>&1 &)
  sleep 8
  curl -s -o /dev/null "http://localhost:$DEV_PORT/" \
    && echo "dev back on :$DEV_PORT (log: /tmp/docs-dev.log)" \
    || fail "dev server did not come back on :$DEV_PORT (see /tmp/docs-dev.log)"
}

DEV_WAS_RUNNING=0
# Never leave local dev stopped: restart it even if the deploy fails halfway.
on_error() {
  if [ "$DEV_WAS_RUNNING" = "1" ]; then
    if ! lsof -i :"$DEV_PORT" -sTCP:LISTEN -t >/dev/null 2>&1; then
      restart_dev || true
    fi
  fi
}
trap on_error ERR

# 0. Preflight
command -v pnpm >/dev/null || fail "pnpm not found"
command -v rsync >/dev/null || fail "rsync not found"
ssh -o ConnectTimeout=10 -o BatchMode=yes "$SSH_HOST" "echo ok" >/dev/null \
  || fail "SSH to $SSH_HOST failed"

# 1. Stop local dev — next build shares apps/docs/.next with next dev
#    and a concurrent build leaves dev serving stale/broken assets.
DEV_WAS_RUNNING=0
if lsof -i :"$DEV_PORT" -sTCP:LISTEN -t >/dev/null 2>&1; then
  log "Stopping local dev on :$DEV_PORT (shares .next with the build)"
  pkill -f "next dev -p $DEV_PORT" || true
  sleep 3
  DEV_WAS_RUNNING=1
fi

# 2. Build static export (apps/docs/out)
log "Building docs (static export)"
pnpm --filter @aayurt/8848-ui-docs build
test -f apps/docs/out/index.html || fail "build output missing: apps/docs/out/index.html"

# 3. Sync to VPS
log "Syncing out/ to $SSH_HOST:$WEBROOT"
ssh "$SSH_HOST" "mkdir -p $WEBROOT"
rsync -az --delete -e ssh apps/docs/out/ "$SSH_HOST:$WEBROOT/"
ssh "$SSH_HOST" "chown -R www-data:www-data $WEBROOT"

# 4. Verify live site
log "Verifying https://$DOMAIN"
for path in "/" "/components?component=button" "/docs" "/icon.svg"; do
  code="$(curl -s -o /dev/null -w "%{http_code}" "https://$DOMAIN$path")"
  echo "  $code  $path"
  [ "$code" = "200" ] || fail "verify failed for $path (HTTP $code)"
done

# 5. Restart local dev if it was running before the build
if [ "$DEV_WAS_RUNNING" = "1" ]; then
  restart_dev
fi

log "Deployed https://$DOMAIN"
