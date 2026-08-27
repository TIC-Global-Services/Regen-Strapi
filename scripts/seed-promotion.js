'use strict';

/**
 * Seed only api::promotion-page.promotion-page (force overwrite).
 *
 * Usage:
 *   npm run build          # must build first so dist/src/seed is fresh
 *   npm run seed:promotion
 */

const path = require('path');
const { createStrapi } = require('@strapi/strapi');
const { runSeed } = require('../dist/src/seed');

async function main() {
  const appDir = process.cwd();
  const distDir = path.join(appDir, 'dist');
  const app = await createStrapi({ appDir, distDir }).load();

  try {
    await runSeed(app, {
      force: true,
      only: ['api::promotion-page.promotion-page'],
    });
  } catch (err) {
    // Surface Yup validation details (otherwise you just see [Object])
    if (err.details) {
      console.error('\nValidation details:');
      console.error(JSON.stringify(err.details, null, 2));
    }
    // Also log each error message/path if present
    if (err.details && err.details.errors) {
      for (const e of err.details.errors) {
        console.error(` - path: ${e.path || '(root)'} | message: ${e.message}`);
      }
    }
    throw err;
  } finally {
    // Let pg/tarn pool drain before destroy — prevents "aborted" race
    await new Promise((r) => setTimeout(r, 500));
    try {
      await app.destroy();
    } catch {}
  }

  console.log('\nDone.');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
