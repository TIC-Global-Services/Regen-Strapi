'use strict';

/**
 * Upload promotion-page media from scripts/data/promotion-assets to
 * Media Library/promotion-page (keeps original filenames).
 *
 * Source: scripts/data/promotion-assets/**  (51 files bundled — 38 unique)
 * Target: Media Library/promotion-page (+ subfolders logos/ awards/ solar-financing/ preserved if present)
 *
 * Reuses seed-portfolio.js pattern: getOrCreateFolder + strapi.plugin('upload').service('upload').upload
 * Idempotent: skips files already present by name (hash check).
 *
 * Usage:
 *   node scripts/upload-promotion-media.js              # upload missing
 *   DRY_RUN=1 node scripts/upload-promotion-media.js    # preview only
 *   FOLDER="promotion-page" node scripts/upload-promotion-media.js
 *
 * After upload, run assign:
 *   node scripts/assign-promotion-media.js
 */

const path = require('path');
const fs = require('fs');
const fsp = require('fs/promises');
const os = require('os');
const { createStrapi } = require('@strapi/strapi');

const DRY_RUN = process.env.DRY_RUN === '1';
const FOLDER_PATH = (process.env.FOLDER || 'promotion-page').replace(/^\/+|\/+$/g, '');
const ASSETS_DIR = path.join(__dirname, 'data', 'promotion-assets');

const MIME_BY_EXT = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
};

async function resolveFolderId(strapi, folderPath) {
  const parts = folderPath.split('/').filter(Boolean);
  let parent = null;
  let folder = null;
  for (const name of parts) {
    folder = await strapi.db.query('plugin::upload.folder').findOne({ where: { name, parent } });
    if (!folder) {
      if (DRY_RUN) {
        console.log(`  [DRY] would create folder "${name}" under parent ${parent ?? 'root'}`);
        return null;
      }
      folder = await strapi.plugin('upload').service('folder').create({ name, parent });
      console.log(`  created folder "${name}" id=${folder.id} parent=${parent ?? 'root'}`);
    }
    parent = folder.id;
  }
  return folder.id;
}

async function collectFiles(dir, base = '') {
  const entries = await fsp.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    const rel = path.join(base, e.name);
    if (e.isDirectory()) files.push(...(await collectFiles(full, rel)));
    else files.push({ full, rel, name: e.name });
  }
  return files;
}

async function main() {
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error(`Missing ${ASSETS_DIR}. Copy Regan-Power-Next/public/promotion-page -> scripts/data/promotion-assets`);
    process.exit(1);
  }
  const all = await collectFiles(ASSETS_DIR);
  console.log(`Source: ${ASSETS_DIR} — ${all.length} files`);
  console.log(`Target folder: ${FOLDER_PATH}${DRY_RUN ? ' (DRY_RUN)' : ''}`);

  const appDir = process.cwd();
  const distDir = path.join(appDir, 'dist');
  const app = await createStrapi({ appDir, distDir }).load();
  app.log.level = 'error';

  try {
    // Create folder tree preserving subfolders (logos/, awards/, solar-financing/)
    const subfolders = [...new Set(all.map(f => path.dirname(f.rel)).filter(d => d !== '.'))].sort();
    const folderIdMap = new Map();
    const topId = await resolveFolderId(app, FOLDER_PATH);
    folderIdMap.set('.', topId);

    for (const sub of subfolders) {
      const fullPath = `${FOLDER_PATH}/${sub}`;
      const id = await resolveFolderId(app, fullPath);
      folderIdMap.set(sub, id);
    }
    console.log(`Folder "${FOLDER_PATH}" id=${topId}${subfolders.length ? ` + ${subfolders.length} subfolders` : ''}`);

    // Existing files dedupe by name (case-insensitive) across subtree
    const descendantIds = [...folderIdMap.values()].filter(Boolean);
    let existing = [];
    if (descendantIds.length) {
      // findMany with folder in descendantIds
      existing = await app.db.query('plugin::upload.file').findMany({
        where: { folder: { $in: descendantIds } },
      });
    }
    const byName = new Map(existing.map(f => [f.name.toLowerCase(), f]));
    console.log(`Existing files in subtree: ${existing.length}`);

    let uploaded = 0, skipped = 0, failed = 0;
    for (const f of all) {
      const lower = f.name.toLowerCase();
      if (byName.has(lower)) {
        console.log(`  - skip ${f.rel} (already "${f.name}" id=${byName.get(lower).id})`);
        skipped++;
        continue;
      }
      if (DRY_RUN) {
        const sub = path.dirname(f.rel) === '.' ? '.' : path.dirname(f.rel);
        console.log(`  [DRY] would upload ${f.rel} -> ${FOLDER_PATH}/${sub} folder=${folderIdMap.get(sub) ?? topId}`);
        continue;
      }
      const ext = path.extname(f.name).toLowerCase();
      const mime = MIME_BY_EXT[ext] || 'application/octet-stream';
      const stat = await fsp.stat(f.full);
      const sub = path.dirname(f.rel) === '.' ? '.' : path.dirname(f.rel);
      const folderId = folderIdMap.get(sub) ?? topId;
      try {
        const [uploadedFile] = await app.plugin('upload').service('upload').upload({
          data: { fileInfo: { name: f.name, folder: folderId } },
          files: {
            filepath: f.full,
            originalFilename: f.name,
            mimetype: mime,
            size: stat.size,
          },
        });
        console.log(`  ✓ ${f.rel} -> id=${uploadedFile.id} (${(stat.size/1024).toFixed(1)}KB)`);
        uploaded++;
        byName.set(lower, uploadedFile);
      } catch (e) {
        console.warn(`  ! failed ${f.rel}: ${e.message}`);
        failed++;
      }
    }
    console.log(`\nDone: ${uploaded} uploaded, ${skipped} skipped, ${failed} failed — Media Library/${FOLDER_PATH}`);
    if (!DRY_RUN && uploaded === 0 && skipped > 0) console.log('All files already present — run assign next.');
  } finally {
    await app.destroy().catch(e => console.warn(`teardown warning (safe): ${e.message}`));
  }
}

main().catch(e => { console.error(e); process.exit(1); });
