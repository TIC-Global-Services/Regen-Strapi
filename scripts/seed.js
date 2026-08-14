'use strict';

/**
 * Runs the page seeder (src/seed) against a running Strapi instance.
 *
 * Usage:
 *   node scripts/seed.js
 */

const { compileStrapi, createStrapi } = require('@strapi/strapi');
const { runSeed } = require('../dist/src/seed');

async function main() {
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  try {
    await runSeed(app);
  } finally {
    await app.destroy();
  }

  console.log('\nDone.');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
