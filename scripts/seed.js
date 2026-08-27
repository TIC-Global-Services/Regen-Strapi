'use strict';

/**
 * Runs the page seeder (src/seed) against a running Strapi instance.
 *
 * Usage:
 *   npm run seed              # safe: fills only EMPTY/MISSING (no force)
 *   FORCE=1 npm run seed      # force: overwrites all 22 pages (for casing sync)
 */

const path = require('path');
const { createStrapi } = require('@strapi/strapi');
const { runSeed } = require('../dist/src/seed');

async function main() {
  const appDir = process.cwd();
  const distDir = path.join(appDir, 'dist');
  const app = await createStrapi({ appDir, distDir }).load();

  const force = process.env.FORCE === '1';
  if (force) console.log('FORCE=1 — will overwrite all pages');

  try {
    await runSeed(app, force ? { force: true } : {});
  } catch (err) {
    if (err.details) console.error(JSON.stringify(err.details, null, 2));
    throw err;
  } finally {
    await new Promise((r) => setTimeout(r, 500));
    try { await app.destroy(); } catch {}
  }

  console.log('\nDone.');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
