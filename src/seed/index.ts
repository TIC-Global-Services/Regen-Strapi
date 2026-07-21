import type { Core } from "@strapi/strapi";

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
    title: "Solar",
    slug: "solar",
    category: "solar",
    sections: solarSections,
  },
  {
    title: "Brands",
    slug: "brands",
    category: "solar",
    sections: brandsSections,
  },
  {
    title: "Deals",
    slug: "deals",
    category: "solar",
    sections: dealsSections,
  },
  {
    title: "Rebates",
    slug: "rebates",
    category: "solar",
    sections: rebatesSections,
  },
  {
    title: "FAQ",
    slug: "faq",
    category: "solar",
    sections: faqSections,
  },
  {
    title: "Commercial Systems",
    slug: "commercial-systems",
    category: "commercial",
    sections: commercialSystemsSections,
  },
  {
    title: "Commercial Off Grid",
    slug: "commercial-off-grid",
    category: "commercial",
    sections: commercialOffGridSections,
  },
  {
    title: "Off Grid Solutions",
    slug: "off-grid-solutions",
    category: "commercial",
    sections: offGridSolutionsSections,
  },
  {
    title: "Research & Development",
    slug: "research-development",
    category: "commercial",
    sections: researchDevelopmentSections,
  },
  {
    title: "Portfolio",
    slug: "portfolio",
    category: "commercial",
    sections: portfolioSections,
  },
  {
    title: "Blog",
    slug: "blog",
    category: "general",
    sections: blogSections,
  },
  {
    title: "Press & Media",
    slug: "press-media",
    category: "general",
    sections: pressMediaSections,
  },
  {
    title: "Reviews",
    slug: "reviews",
    category: "general",
    sections: reviewsSections,
  },
  {
    title: "Contact",
    slug: "contact",
    category: "general",
    sections: contactSections,
  },
] as const;

async function seedPage(strapi: Core.Strapi, page: (typeof pages)[number]) {
  const existing = await strapi.documents("api::page.page").findFirst({
    filters: {
      slug: page.slug,
    },
  });

  if (existing) {
    strapi.log.info(`[seed] ${page.title} already exists`);
    return;
  }

  await strapi.documents("api::page.page").create({
    data: {
      title: page.title,
      slug: page.slug,
      category: page.category,
      sections: page.sections,
    } as any,
    status: "published",
  });

  strapi.log.info(`[seed] ${page.title} created`);
}

export async function runSeed(strapi: Core.Strapi) {
  strapi.log.info("🌱 Starting Page Seeder...");

  for (const page of pages) {
    await seedPage(strapi, page);
  }

  strapi.log.info(`✅ ${pages.length} pages seeded successfully.`);
}
