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
  } finally {
    await app.destroy().catch(() => {});
  }

  console.log('\nDone.');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
