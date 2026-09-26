'use strict';

/**
 * One-off: add the portfolio projects that exist on the live site but were missing from the
 * original scrape (scripts/data/portfolio-missing.json, same shape as portfolio-data.json).
 * Field mapping and image handling mirror scripts/seed-portfolio.js. Existing entries are never
 * touched or wiped. Idempotent: skips slugs that already exist.
 *
 *   DRY_RUN=1 node scripts/add-missing-portfolio.js   # preview only
 *   node scripts/add-missing-portfolio.js
 */

const path = require('path');
const os = require('os');
const fs = require('fs/promises');
const { createStrapi } = require('@strapi/strapi');

const UID = 'api::portfolio-project.portfolio-project';
const DRY_RUN = process.env.DRY_RUN === '1';
const ROWS = require('./data/portfolio-missing.json');

function makeDescription({ details, suburb, state, postcode, title }) {
  const parts = [];
  if (details.Task) parts.push(details.Task);
  else if (details['System size'] || details['System Size']) parts.push(`${details['System size'] || details['System Size']} solar system`);
  else if (details['Battery size'] || details['Battery Size']) parts.push(`${details['Battery size'] || details['Battery Size']} battery storage`);
  if (details.Brand) parts.push(`by ${details.Brand}`);
  const address = [suburb, state, postcode].filter(Boolean).join(' ');
  return [parts.join(' '), address].filter(Boolean).join(' — ') || title || '';
}

function buildContent(details) {
  const skip = new Set(['Location', 'Battery Size', 'System Size']);
  return Object.entries(details || {})
    .filter(([k, v]) => !skip.has(k) && v)
    .map(([k, v]) => `**${k}:** ${String(v).replace(/\s+/g, ' ').trim()}`)
    .join('\n\n');
}

async function fetchImageFile(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  const filename = decodeURIComponent(url.split('/').pop().split('?')[0]);
  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'portfolio-add-'));
  const filepath = path.join(tmpDir, filename);
  await fs.writeFile(filepath, buffer);
  return { filepath, filename, mimetype: res.headers.get('content-type') || 'image/png', size: buffer.length, tmpDir };
}

async function main() {
  const appDir = process.cwd();
  const app = await createStrapi({ appDir, distDir: path.join(appDir, 'dist') }).load();
  app.log.level = 'error';
  try {
    const folder = await app.db.query('plugin::upload.folder').findOne({ where: { name: 'Portfolio', parent: null } });
    let created = 0, skipped = 0, failed = 0;
    for (const row of ROWS) {
      const exists = await app.db.query(UID).findOne({ where: { slug: row.slug } });
      if (exists) { console.log(`  - skip (exists): ${row.title}`); skipped++; continue; }
      console.log(`  ${DRY_RUN ? '[DRY] would create' : '+'} ${row.title} ${JSON.stringify(row.filters)}`);
      if (DRY_RUN) continue;

      const details = row.details[0] || {};
      const address = [row.suburb, row.state, row.postcode].filter(Boolean).join(', ');
      let imageId = null;
      let file;
      try {
        file = await fetchImageFile(row.image);
        const [up] = await app.plugin('upload').service('upload').upload({
          data: { fileInfo: { name: row.title, folder: folder ? folder.id : null } },
          files: { filepath: file.filepath, originalFilename: file.filename, mimetype: file.mimetype, size: file.size },
        });
        imageId = up?.id ?? null;
      } catch (e) {
        console.warn(`    ! image failed (${row.image}): ${e.message}`);
      } finally {
        if (file) await fs.rm(file.tmpDir, { recursive: true, force: true }).catch(() => {});
      }

      const data = {
        title: row.title,
        slug: row.slug,
        description: makeDescription({ details, suburb: row.suburb, state: row.state, postcode: row.postcode, title: row.title }),
        content: buildContent(details),
        suburb: row.suburb || null,
        state: row.state || null,
        postcode: row.postcode || null,
        filters: row.filters || [],
        location: address || details.Location || null,
        brand: details.Brand || null,
        model: details.Model || null,
        batterySize: details['Battery size'] || details['Battery Size'] || null,
        featured: false,
      };
      if (imageId) data.image = imageId;
      try {
        await app.documents(UID).create({ data, status: 'published' });
        created++;
      } catch (e) {
        failed++;
        console.warn(`    ! create failed: ${e.message}`);
      }
    }
    console.log(`Done: ${created} created, ${skipped} skipped, ${failed} failed of ${ROWS.length}`);
  } finally {
    await app.destroy().catch(e => console.warn(`teardown warning (safe): ${e.message}`));
  }
}

main().catch(e => { console.error(e); process.exit(1); });
