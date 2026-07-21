import type { Core } from '@strapi/strapi';
import { runSeed } from './seed';

export default {
  register({ strapi }: { strapi: Core.Strapi }) {},
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await runSeed(strapi);
  },
};
