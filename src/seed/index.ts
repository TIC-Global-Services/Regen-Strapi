import type { Core } from "@strapi/strapi";
import type { UID } from "@strapi/types";

import { solarSections } from "./data/solar-page";
import { brandsSections } from "./data/brands-page";
import { dealsSections } from "./data/deals-page";
import { rebatesSections } from "./data/rebates-page";
import { faqSections } from "./data/faq-page";
import { commercialOffGridSections } from "./data/commercial-off-grid-page";
import { commercialSystemsSections } from "./data/commercial-systems-page";
import { offGridSolutionsSections } from "./data/off-grid-solutions-page";
import { researchDevelopmentSections } from "./data/research-development-page";
import { portfolioSections } from "./data/portfolio-page";
import { blogSections } from "./data/blog-page";
import { pressMediaSections } from "./data/press-media-page";
import { reviewsSections } from "./data/reviews-page";
import { contactSections } from "./data/contact-page";

const pages = [
  {
    uid: "api::solar-page.solar-page" as UID.ContentType,
    title: "Solar - Solar System",
    sections: solarSections,
  },
  {
    uid: "api::brands-page.brands-page" as UID.ContentType,
    title: "Solar - Brands We Carry",
    sections: brandsSections,
  },
  {
    uid: "api::deals-page.deals-page" as UID.ContentType,
    title: "Solar - Deals",
    sections: dealsSections,
  },
  {
    uid: "api::rebates-page.rebates-page" as UID.ContentType,
    title: "Solar - Govt Rebates",
    sections: rebatesSections,
  },
  {
    uid: "api::faq-page.faq-page" as UID.ContentType,
    title: "Solar - FAQ",
    sections: faqSections,
  },
  {
    uid: "api::commercial-systems-page.commercial-systems-page" as UID.ContentType,
    title: "Commercial - Commercial Systems & Case Studies",
    sections: commercialSystemsSections,
  },
  {
    uid: "api::commercial-off-grid-page.commercial-off-grid-page" as UID.ContentType,
    title: "Commercial - Commercial Off Grid",
    sections: commercialOffGridSections,
  },
  {
    uid: "api::off-grid-solutions-page.off-grid-solutions-page" as UID.ContentType,
    title: "Commercial - Off Grid Solutions",
    sections: offGridSolutionsSections,
  },
  {
    uid: "api::research-development-page.research-development-page" as UID.ContentType,
    title: "Commercial - Research & Development",
    sections: researchDevelopmentSections,
  },
  {
    uid: "api::portfolio-page.portfolio-page" as UID.ContentType,
    title: "Commercial - Portfolio",
    sections: portfolioSections,
  },
  {
    uid: "api::blog-page.blog-page" as UID.ContentType,
    title: "Blog",
    sections: blogSections,
  },
  {
    uid: "api::press-media-page.press-media-page" as UID.ContentType,
    title: "Press & Media",
    sections: pressMediaSections,
  },
  {
    uid: "api::reviews-page.reviews-page" as UID.ContentType,
    title: "Reviews",
    sections: reviewsSections,
  },
  {
    uid: "api::contact-page.contact-page" as UID.ContentType,
    title: "Contact",
    sections: contactSections,
  },
];

async function seedSingleType(strapi: Core.Strapi, page: (typeof pages)[number]) {
  const existing = await strapi.documents(page.uid).findFirst({
    status: "published",
  });

  if (existing) {
    strapi.log.info(`[seed] ${page.title} already exists`);
    return;
  }

  await strapi.documents(page.uid).create({
    data: {
      sections: page.sections,
    } as any,
    status: "published",
  });

  strapi.log.info(`[seed] ${page.title} created`);
}

export async function runSeed(strapi: Core.Strapi) {
  strapi.log.info("🌱 Starting Page Seeder...");

  for (const page of pages) {
    await seedSingleType(strapi, page);
  }

  strapi.log.info(`✅ ${pages.length} pages seeded successfully.`);
}
