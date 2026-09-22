#!/bin/sh
# Daily DB backup -> Cloudflare R2 (regen-backups bucket).
# Installed on the production VPS at /root/backup-db-to-r2.sh, run by cron.
# Requires: docker (postgres container running), rclone configured with an
# R2 remote named "r2" (see /root/.config/rclone/rclone.conf on the server).
set -eu

POSTGRES_CONTAINER=regen-strapi-postgres-1
DB_USER=regen_admin
DB_NAME=regen
BACKUP_DIR=/root/backups
RETAIN_DAYS=30
LOG=/var/log/regen-db-backup.log

{
  echo "[$(date -u +%FT%TZ)] starting backup"
  DATE=$(date -u +%F)
  FILE="$BACKUP_DIR/regen-db-$DATE.dump"

  docker exec "$POSTGRES_CONTAINER" pg_dump -U "$DB_USER" -Fc "$DB_NAME" > "$FILE"

  # sanity check before uploading: the dump must list correctly
  docker cp "$FILE" "$POSTGRES_CONTAINER":/tmp/backup-verify.dump
  docker exec "$POSTGRES_CONTAINER" pg_restore -l /tmp/backup-verify.dump > /tmp/backup-verify.list
  docker exec "$POSTGRES_CONTAINER" rm -f /tmp/backup-verify.dump
  ENTRIES=$(grep -vc '^;' /tmp/backup-verify.list || true)
  rm -f /tmp/backup-verify.list
  if [ "${ENTRIES:-0}" -lt 100 ]; then
    echo "[$(date -u +%FT%TZ)] ABORT: dump looks too small ($ENTRIES TOC entries), not uploading"
    exit 1
  fi
  echo "[$(date -u +%FT%TZ)] dump verified ($ENTRIES TOC entries)"

  rclone copy "$FILE" r2:regen-backups/db/
  echo "[$(date -u +%FT%TZ)] uploaded $FILE to r2:regen-backups/db/"

  # prune local + remote copies older than RETAIN_DAYS
  find "$BACKUP_DIR" -maxdepth 1 -name 'regen-db-*.dump' -mtime +"$RETAIN_DAYS" -delete
  rclone delete r2:regen-backups/db/ --min-age "${RETAIN_DAYS}d"
  echo "[$(date -u +%FT%TZ)] done"
} >> "$LOG" 2>&1
