/**
 * Seed data for the "Testimonials List" collection (api::testimonial.testimonial).
 *
 * Sourced from `reviews-seed.json` in the frontend repo (Regan-Power-Next):
 *  - 10 reviews from ProductReview.com.au (listing: 5.0 overall · 2,702 reviews · 100% positive).
 *    Individual star ratings are not shown per-review on that platform, so `rating`
 *    is left unset for these — set them in admin if desired.
 *  - 6 Google reviews transcribed from screenshots. The listing averages exactly 5.0
 *    across 6 reviews, so rating 5 is certain for each.
 *
 * Seeding the DB is intentionally manual. To apply (e.g. in a script or bootstrap):
 *
 *   import { testimonialSeedData } from "./data/testimonials";
 *
 *   for (const data of testimonialSeedData) {
 *     await strapi.documents("api::testimonial.testimonial").create({ data });
 *   }
 *
 * Entries are created as drafts (draft & publish is enabled) — publish after review.
 */

export interface TestimonialSeed {
  name: string;
  location?: string;
  quote: string;
  rating?: number;
  source: "website" | "google" | "productreview";
  /** Free-text — relative dates captured at scrape time (2026-08-21) */
  reviewDate?: string;
}

export const testimonialSeedData: TestimonialSeed[] = [
  /* ── ProductReview.com.au ── */
  {
    name: "Jamie M.",
    quote:
      "We engaged Regen Power to install our solar panels and battery system recently. I was impressed from start to finish. Pricing was competitive and the installers were great, all done on one day. Communication was good also; I would recommend to anyone in the WA market looking for a solar solution for their home.",
    source: "productreview",
  },
  {
    name: "Subin",
    quote:
      "The product has performed very well so far, and its performance has been outstanding. There was one issue raised during the period, but it was promptly resolved. Since then, no further issues have been reported or observed.",
    source: "productreview",
  },
  {
    name: "Fabrizio",
    quote:
      "Highly recommend RegenPower for solar battery installation. I'm a returning customer after having solar panels installed with them previously, and this experience confirmed why I chose them again. Their onboarding process was clear and easy to follow from the very first consultation, with no confusion about what to expect or when. The support team was responsive and happy to answer questions throughout, and the installation itself was handled professionally and efficiently by a team that clearly knew what they were doing. It's rare to find a company that's this consistent across multiple projects, and it's given me real confidence in their work. Would gladly recommend them to anyone considering solar.",
    source: "productreview",
  },
  {
    name: "Connie L.",
    quote:
      "Very happy with the whole process. Staff and installers are respectful and tidy. Very happy with the setup.",
    source: "productreview",
  },
  {
    name: "Donny",
    location: "WA",
    quote:
      "Regen power sales team are friendly, professional, and ready to answer any questions. From initial sales quotation to the final installation, they are the best! Highly recommended!!!",
    source: "productreview",
  },
  {
    name: "Lawrence",
    reviewDate: "2w",
    quote:
      "I had a fantastic experience with Regen Power from start to finish. The whole process of having our solar panels and battery installed was smooth and stress-free. Everyone I dealt with was incredibly helpful, friendly, and professional. The communication was great, and the team was always happy to answer my questions and keep me informed throughout the process. The installation team did a great job, and the finished battery installation looks neat and professional. There was a small issue during the installation where a few holes were drilled in the floor in the wrong position while installing the battery, but it wasn't a major concern for me, and overall, the team did a great job. A big thank you to the entire Regen Power team for making the experience so easy and enjoyable. It's great to deal with a company that genuinely cares about its customers and provides excellent service. I highly recommend Regen Power to anyone considering solar and battery installation. Fantastic company and an amazing team!",
    source: "productreview",
  },
  {
    name: "sree",
    reviewDate: "3w",
    quote:
      "From enquiry to installation and follow-up everything was smooth. No over pushy sales, gave the solar product details based on our requirements and answered any questions we had. Exceptional service. Would definitely recommend.",
    source: "productreview",
  },
  {
    name: "Stomi",
    reviewDate: "4w",
    quote:
      "Communication and feedback were fast and smooth right up through completion, and the installation itself was flawless. I'll definitely be recommending them to my friends.",
    source: "productreview",
  },
  {
    name: "Jenny E.",
    quote:
      "From our very first contact with Richard to Taz and his team of installers the service has been excellent! We were kept informed through the entire process either by phone or email. We would highly recommend Regen to anyone looking for solar panels and a battery.",
    source: "productreview",
  },
  {
    name: "Phil J",
    reviewDate: "1mo",
    quote:
      "We are extremely happy with our solar system that was supplied and installed by Regen. The direction and help we were given leading up to our purchase was exceptional. The team that did the installation were prompt, professional and extremely helpful. We can't recommend Regen high enough to any prospective customer.",
    source: "productreview",
  },

  /* ── Google ── */
  {
    name: "Sara",
    rating: 5,
    quote:
      "After looking at multiple solar companies Regen was our pick based on price and quality of products and local office. Could not fault from start to finish. Installation was fast and professional. We will be recommending Regen.",
    source: "google",
  },
  {
    name: "Simon L",
    rating: 5,
    quote:
      "From start to finish I was very impressed with the communication, professionalism and service provided by Regen Power. The sales consultant was in no way pushy and advised realistic expectations of the product.",
    source: "google",
  },
  {
    name: "Rosie Rinaldi",
    rating: 5,
    quote:
      "Great service from start to finish of job. Yet to receive our first account from Synergy but having downloaded the app we are please our 6kw system is going well. Regen did a great job from the start of the process to the fellows who installed the system, they were very professional.",
    source: "google",
  },
  {
    name: "John Kusinski",
    rating: 5,
    quote:
      "The installation was amazingly quick and smooth from start to finish. The quality panels and inverter were well-priced and have performed very well since installation. The follow-up service has been excellent. I would highly recommend the team at Regen Power.",
    source: "google",
  },
  {
    name: "Mick K",
    rating: 5,
    quote:
      "Full marks to Regen Power and especially Lydia, for facilitating the replacement of a faulty panel. I wouldn't hesitate to get a quotation from them again in the future should we ever need a solar system installed in the future. Great service and follow up with the replacement.",
    source: "google",
  },
  {
    name: "Peter McKenzie",
    rating: 5,
    quote:
      "I engaged Regen Power after an unpleasant experience with another solar company. I am very happy with their office and installer communications, essentially they did exactly what they said they would and the price was very competitive, would highly recommend.",
    source: "google",
  },
  {
  name: "Usamah Alkatiri",
  rating: 5,
  quote:
  "The installation process went well and the installer was very polite, tidy and punctual when interacting. The installer also assisted me in grid connection and showed me on how to use the charger. They also call me every fortnightly to check on how the grid is going whether it is working or whether I have a problem with it. Overall this company had done a very adequate job with installing and ensuring the system and quality of the grid is functioning properly. Its recommended. Thank you",
  source: "google",
  },
  {
  name: "Ian Binnie",
  rating: 5,
  quote:
  "I recently (March 26) had Regen Power install batteries (30kWh) to the 6.6kW solar panel system they installed for me in 2021. I was very happy to deal with them a second time. As previously the whole process from quotation to install was professionally managed. All my questions were responded to quickly, I was kept well informed. The installers were excellent completing the install in approx two hours. They took the time to explain the features of the system and what the online Apps provided. Very happy with the price paid and very pleased that I am now minimising my bills.",
  source: "google",
  },
  {
  name: "Binoy Thomas",
  rating: 5,
  quote:
  "Choosing Regen Power for my home solar battery installation was an excellent decision. The technicians arrived exactly on time and worked diligently to get everything up and running flawlessly. They took the time to explain the entire system and helped me set up the monitoring app on my phone. The hardware looks neat and tidy on the wall, with no messy wiring. I love being able to store our excess daytime solar power to run the house completely grid-free at night. My electricity bills have already plummeted, and the customer support has been outstanding. Five stars",
  source: "google",
  },
  {
  name: "Donny Iwan",
  rating: 5,
  quote:
  "I just recently installed a new solar panels, a battery and an EV charger through Regen Power. Their services from the sales to installation process is excellent. Very happy with their after sales service. I would use them again in the future. Highly recommend their services.",
  source: "google",
  },

  
];
