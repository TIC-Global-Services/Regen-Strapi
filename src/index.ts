import type { Core } from '@strapi/strapi';
import { runSeed } from './seed';

export default {
  register({ strapi }: { strapi: Core.Strapi }) {},
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // TEMP: force-overwrite seed run for battery pages — re-comment after it runs
    await runSeed(strapi, {
      force: true,
      only: [
        "api::press-media-page.press-media-page",
      ],
    });
  },
};
