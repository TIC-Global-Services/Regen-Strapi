'use strict';

/**
 * Resets an admin user's password against a running Strapi instance.
 * Workaround for `strapi admin:reset-user-password`, which fails in the
 * production image (compiles TS on the fly, but only dist/ is shipped).
 *
 * Usage:
 *   node scripts/reset-admin-password.js <email> <password>
 */

const path = require('path');
const { createStrapi } = require('@strapi/strapi');

async function main() {
  const [email, password] = process.argv.slice(2);
  if (!email || !password) {
    console.error('Usage: node scripts/reset-admin-password.js <email> <password>');
    process.exit(1);
  }

  const appDir = process.cwd();
  const distDir = path.join(appDir, 'dist');
  const app = await createStrapi({ appDir, distDir }).load();

  try {
    await app.admin.services.user.resetPasswordByEmail(email, password);
    console.log(`Successfully reset password for ${email}`);
  } finally {
    await app.destroy().catch(() => {});
  }

  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
