import type { Core } from '@strapi/strapi';

export default {
  register(_: { strapi: Core.Strapi }) {},
  async bootstrap(_: { strapi: Core.Strapi }) {
    // Seed is manual-only — run via npm scripts:
    //   npm run seed                          # safe: fills EMPTY/MISSING
    //   FORCE=1 npm run seed                  # force: overwrite all
    //   PAGES=promotion,solar npm run seed    # selective (comma-separated)
    //   PAGES=promotion FORCE=1 npm run seed # selective + force
    // Do not auto-run here — overwrites manual Admin edits on every restart.
  },
};
