import type { UID } from "@strapi/types";

interface Section {
  __component: string;
  [key: string]: unknown;
}

export const promotionSections: Section[] = [
  // ─── 1. Hero ─────────────────────────────────────────────────────────
  {
    __component: "promotion.hero",
    title: "Double Rebates, Double Savings: WA & Federal Incentives Slash Battery Costs",
    subtitle: "Lock in Pricing Now!",
    backgroundImage: null,
    batteryImage: null,
    packages: [
      {
        capacity: "8.3kWh Battery",
        originalPrice: 14404,
        finalPrice: 10990,
        stateRebate: 1209,
        federalRebate: 2205,
        isFullyInstalled: true,
        priceNote: "Price is after the battery rebate",
      },
      {
        capacity: "16.6kWh Battery",
        originalPrice: 18245,
        finalPrice: 12990,
        stateRebate: 1300,
        federalRebate: 3955,
        isFullyInstalled: true,
        priceNote: "Price is after the battery rebate",
      },
    ],
    sidebar: {
      title: "Battery \nRebate \nAvailable!",
      subtitle: "WA & Federal Battery \nRebates Now Live – Save Up to $5,255!",
      paragraphs: ["Upgrade your home with a 20kWh battery with State + Federal incentives worth up to $5,255 OFF when you're ready.", "Lock in today's pricing, secure your rebate spot, and be first in line for approval and installation."],
      ctaText: "Secure My Rebate",
      ctaLink: "#quote-form-section",
    },
    highlightPrefix: "Upto",
    highlightValue: "$5400",
    description: "Back In Rebate",
    ctaLabel: "See What's Included & Get A Quote",
    ctaLink: "#why-regen-power-mobile",
  },

  // ─── 2. Limited Spots ────────────────────────────────────────────────
  {
    __component: "promotion.limited-spots",
    title: "Limited Spots Available Serve Yours Now!",
    cards: [
      {
        type: "nested",
        value: "23",
        title: "Years \nEstablished 2003",
        bgImage: null,
        icon: null,
        showBadge: false,
        nestedCard: { type: "logo", logo: null, image: null, showBadge: false },
      },
      {
        type: "image",
        value: "YES",
        title: "We are Local WA Born\nand Bred Company",
        bgImage: null,
        icon: null,
        showBadge: false,
      },
      {
        type: "black",
        value: "45K+",
        title: "Solar Installations\nNationwide",
        bgImage: null,
        icon: null,
        showBadge: true,
      },
      {
        type: "nested",
        value: "3k+",
        title: "Number of battery\ninstallations in WA",
        bgImage: null,
        icon: null,
        showBadge: false,
        nestedCard: { type: "image", logo: null, image: null, showBadge: true },
      },
    ],
  },

  // ─── 3. Trust Regen ──────────────────────────────────────────────────
  {
    __component: "promotion.trust-regen",
    title: "Trust Regen Power",
    subtitle: "Why Homeowners",
    features: [
      {
        title: "Excellent \nCustomer Satisfaction",
        description: "We have achieved near five stars overall \nrating for our courteous and efficient\n service.",
        icon: null,
      },
      {
        title: "Best Value Solar \nPackages in Perth",
        description: "We sell a wide range of brands. We install \nTop Quality Solar Panels In Perth. Choose\n best solar system for your budget.",
        icon: null,
      },
      {
        title: "WA Born and Bred \nCompany",
        description: "We are truly a WA company. Installing\n over 45,000 residential and commercial \nsolar system installations.",
        icon: null,
      },
    ],
  },

  // ─── 4. Free Quotation ───────────────────────────────────────────────
  {
    __component: "promotion.free-quotation",
    title: "Get an Obligation Free Quotation",
    noticeText:
      "Due To The Current High Demand For Batteries, We Are Unable To Accept Bookings \nFor Solar-Only Installations At This Time. Bookings Will Only Be Accepted For Solar + Battery or Battery-Only Installations.",
    videoThumbnail: null,
    videoUrl: "https://player.vimeo.com/video/810074456?h=62919e7375",
    buttonText: "Get Your Free Quote",
  },

  // ─── 5. Battery Rebates ──────────────────────────────────────────────
  {
    __component: "promotion.battery-rebates",
    title: "Key Points You Should \nKnow",
    subtitle: "Battery Rebate",
    bgImage: null,
    panels: [
      {
        rows: [
          { title: "State Rebate", description: "Up to $1,300 off the cost of your battery system (WA Government)." },
          { title: "Federal Rebate", description: "Up to $2,205–$3,955, depending on battery size (Cheaper Home Batteries Program)." },
          { title: "Interest-Free Loan", description: "Up to $10,000 repayable over 10 years – 0% interest (WA scheme only)." },
          { title: "Eligibility", description: "Must be an owner-occupier, Synergy customer, with household income under $210K/year." },
          { title: "VPP Participation Required", description: "You must join an approved Virtual Power Plant to qualify for state rebate." },
          { title: "Limited Slots", description: "Rebates are first-come, first-served – early application increases your chances." },
        ],
      },
      {
        rows: [
          { title: "WA-Based & Trusted", description: "Locally operated with 23+ years of experience." },
          { title: "Full-Service Retailer", description: "We supply, install, and support – end-to-end battery solutions." },
          { title: "Approved Products & Installers", description: "All our systems are rebate-eligible and VPP-compliant." },
          { title: "Top Battery Brands", description: "Alpha ESS, Anker, SigEnergy, Tesla Powerwall, Goodwe, BYD, Sungrow, & more." },
          { title: "Rebate & Loan Support", description: "We help you navigate and apply for both rebates and interest-free loans." },
          { title: "Thousands of Installs", description: "Trusted by over 45,000+ households in WA." },
          { title: "Warranties & After-Sales Care", description: "Up to 10-year warranties on batteries and hybrid inverters." },
        ],
      },
    ],
  },

  // ─── 6. Trusted Brands ───────────────────────────────────────────────
  {
    __component: "promotion.trusted-brands",
    title: "We Trust & Install",
    subtitle: "The Brands",
    description:
      "We carry a wide range of brands from entry-level to premium, ensuring you can customize the solar panel system to your budget.",
    titleGreen: "We Trust & Install",
    brands: [
      { name: "alphaess", logo: null },
      { name: "byd", logo: null },
      { name: "GOODWE", logo: null },
      { name: "ISTORE", logo: null },
      { name: "SIGENERGY", logo: null },
      { name: "TESLA", logo: null },
    ],
    batteries: [
      { name: "iStore", image: null, logo: null },
      { name: "Tesla Powerwall", image: null, logo: null },
      { name: "Sigenergy", image: null, logo: null },
      { name: "Goodwe", image: null, logo: null },
      { name: "AlphaESS", image: null, logo: null },
      { name: "BYD", image: null, logo: null },
    ],
  },

  // ─── 7. High Energy ──────────────────────────────────────────────────
  {
    __component: "promotion.high-energy",
    title: "High Energy Bills? Here's Why It's Time To Add A Battery With Us:",
    bullets: [
      "WA-based team – local experts you can trust",
      "Over 23 years of renewable energy experience",
      "Installed 45,000+ solar systems across Perth homes",
      "Battery-ready and retrofit options available",
      "Exclusive access to state and federal battery rebates",
      "Partnered with top battery brands – Tesla Powerwall, IStore, Goodwe, Sigenergy",
      "Expert guidance on interest-free loans up to $10K under WA scheme",
      "10-Year warranty on batteries and hybrid inverters",
      "Friendly, knowledgeable support from quote to installation and beyond",
      "Tailored energy solutions for maximum savings and energy independence",
    ],
    badges: [
      { name: "fas100 Certified", logo: null },
      { name: "Tesla Certified", logo: null },
      { name: "best rated batch", logo: null },
      { name: "financialtimes logo", logo: null },
    ],
  },

  // ─── 8. Battery Package ──────────────────────────────────────────────
  {
    __component: "promotion.battery-package",
    title: "Battery Packages",
    centerImage: null,
    centerImageAlt: "Battery storage system",
    packages: [
      {
        name: "8.3kWh Battery",
        capacity: "8.3kWh Battery",
        originalPrice: 14404,
        rebates: [
          { label: "State Rebate", amount: 1209 },
          { label: "Federal Rebate", amount: 2205 },
        ],
        finalPrice: 10990,
        installationText: "Fully Installed",
        pricingNote: "Price is after the battery rebate",
        priceNote: "Price is after the battery rebate",
        stateRebate: 1209,
        federalRebate: 2205,
        isFullyInstalled: true,
        image: null,
      },
      {
        name: "16.6kWh Battery",
        capacity: "16.6kWh Battery",
        originalPrice: 18245,
        rebates: [
          { label: "State Rebate", amount: 1300 },
          { label: "Federal Rebate", amount: 3955 },
        ],
        finalPrice: 12990,
        installationText: "Fully Installed",
        pricingNote: "Price is after the battery rebate",
        priceNote: "Price is after the battery rebate",
        stateRebate: 1300,
        federalRebate: 3955,
        isFullyInstalled: true,
        image: null,
      },
    ],
  },

  // ─── 9. Ready To Begin ───────────────────────────────────────────────
  {
    __component: "promotion.ready-to-begin",
    title: "Ready to Begin? Get A Free Quote.",
    noticeText:
      "Due To The Current High Demand For Batteries, We Are Unable To Accept Bookings \nFor Solar-Only Installations At This Time. Bookings Will Only Be Accepted For Solar + Battery or Battery-Only Installations.",
    contactDetails: {
      title: "Contact Us",
      description:
        "Give Us A Call Today And One Of Our Friendly And Knowledgeable Energy Consultants Will Be Able To Assist You With Your Enquiry.",
      data: [
        { title: "Address", value: "4/90 Catalano Circuit, Canning Vale, WA 6155" },
        { title: "E-Mail", value: "sales@regenpower.com" },
        { title: "Telephone", value: "08-9456-3491" },
      ],
      socials: [
        { name: "instagram", link: "https://www.instagram.com/regenpowerperth/" },
        { name: "linkedin", link: "https://www.linkedin.com/company/regen-power" },
        { name: "facebook", link: "https://www.facebook.com/regenpowerperth" },
        { name: "twitter", link: "https://twitter.com/RegenPower2003" },
      ],
    },
    buttonText: "Get Your Free Quote",
  },

  // ─── 10. Solar Financing ─────────────────────────────────────────────
  {
    __component: "promotion.solar-financing",
    title: "Solar Financing Solution",
    subtitle: "Up To $10K Loan For 10 Years With No Interest Through \nWA Rebate Scheme",
    leftBoxTitle: "Interest-Free Loan",
    leftBoxText:
      "Up to $10,000 interest-free loan available, repayable over 10 years to help cover the cost of a solar battery system.",
    leftBoxIcon: "CircleDollarSign",
    bgImage: null,
    gridItems: [
      {
        title: "10 Years Repayment",
        description: "Up to $10,000 interest-free loan available, repayable over 10 years to help cover the cost of a solar battery system.",
        icon: null,
      },
      {
        title: "10 Years Repayment",
        description: "Offered in addition to the WA battery rebate of up to $1,300 – making solar battery storage more affordable than ever.",
        icon: null,
      },
      {
        title: "0% Interest Scheme",
        description: "Eligibility criteria: Must be an owner-occupier, a Synergy residential customer, and install an eligible battery system.",
        icon: null,
      },
      {
        title: "Owner-Occupiers Eligible",
        description: "Applicants must participate in a Virtual Power Plant (VPP) program approved under the scheme.",
        icon: null,
      },
      {
        title: "Lower Energy Bills",
        description: "Total household income must be under $210,000 per year and standard credit checks will apply.",
        icon: null,
      },
      {
        title: "Premium Quality Hardware",
        description: "No early repayment penalties – enjoy flexibility while contributing to WA’s clean energy future.",
        icon: null,
      },
    ],
  },

  // ─── 11. About Regen ─────────────────────────────────────────────────
  {
    __component: "promotion.about-regen",
    title: "Regen Power",
    subtitle: "About",
    paragraphs:
      "Born and bred in Perth, WA, in 2003 when the market was still learning about rooftop solar PV systems, Regen Power is the pioneer in residential and commercial solar power system and solar panel solutions. We have installed over 45,000 residential rooftop solar systems Australia-wide and led the charge into other countries to start projects with both economic and educational implication in sustainability living.",
    image: null,
    videoUrl: "https://player.vimeo.com/video/960269967?h=385e5e0fef",
  },

  // ─── 12. Find Out Why ────────────────────────────────────────────────
  {
    __component: "promotion.find-out-why",
    title: "Find Out Why",
    subtitle: "Our Customers Love Us",
    description: "Regen Power Is Rated 4.9 Stars By The ProductReview.Com.Au Community, Australia's Leading Consumer Review Platform.",
    awards: [
      { image: null, description: "6-Time ProductReview Award Winner (2021, 2022, 2023, 2024, 2025 & 2026)" },
      { image: null, description: "⭐ 5.0 Stars • 2,684 Reviews" },
    ],
    reviews: [
      {
        author: "Emma · Rockingham",
        review: "“From Quote To Activation, The Experience Felt Effortless. The App Monitoring And Battery Backup Have Been Amazing For Our Family.”",
        rating: 5,
      },
      {
        author: "Liam · Fremantle",
        review: "“The customer service was exceptional from start to finish. The battery install was fast and very clean.”",
        rating: 5,
      },
      {
        author: "Olivia · Joondalup",
        review: "“Very happy with the overall system output and savings. Our electricity bill has practically disappeared since the install.”",
        rating: 5,
      },
    ],
  },

  // ─── 13. Achievements ────────────────────────────────────────────────
  {
    __component: "promotion.achievements",
    title: "We Are Humbled By",
    subtitle: "Our Achievements",
    description:
      "Surely Awards Are Not Everything, But It Is Testimony To What We Have Achieved And Assures You Will Be Working With Trusted Solar Company.",
    awards: [
      { name: "ATC Finalist 2014 & 2019", image: null },
      { name: "Rising Stars Winner 2019", image: null },
      { name: "FT High-Growth Company 2020-2023", image: null },
      { name: "Financial Review Fast 100 2020", image: null },
      { name: "SEA Ambassador Award", image: null },
      { name: "Belmont Small Business Award Winner", image: null },
    ],
    recognitions: [
      {
        title: "SunWiz Industry Recognition",
        awards: [
          { name: "best-rated", image: null },
          { name: "best-rated#2", image: null },
        ],
      },
      {
        title: "Awarded by SolarQuotes",
        awards: [{ name: "top-rated-installer", image: null }],
      },
      {
        title: "Top Rated on Google",
        awards: [{ name: "google-rating", image: null }],
      },
    ],
  },

  // ─── 14. FAQ ─────────────────────────────────────────────────────────
  {
    __component: "promotion.faq-section",
    title: "Battery Rebate & Solar Installation",
    subtitle: "Frequently Asked Questions ",
    description: "Here Are Your Answers To Some Of The Most Frequently Asked Questions About Battery Rebates And Solar Installations.",
    highlightCard: {
      title: "Contact us now to reserve your place!",
      bgImage: null,
      items: [
        {
          question: "What is the battery rebate scheme?",
          answer: "The battery rebate scheme offers financial incentives from both state and federal governments to reduce the upfront cost of installing battery storage systems in homes and businesses, enhancing energy independence and reducing electricity bills.",
        },
        {
          question: "How much rebate can I receive?",
          answer: "somthing typed by the client",
          bulletPoints: [
            "State Rebate: Up to $1,300 for a battery system of at least 10 kWh.",
            "Federal Rebate: $2,205 for a 10 kWh system, and $3,955 for a 20 kWh system.",
          ],
        },
      ],
    },
    faqItems: [
      {
        question: "Q1. Why don't you show prices on your deals page?",
        answer: "Because solar and battery installation prices depend greatly on your specific home layouts, roof angles, grid connection specifications, and energy needs. We prefer to customize every quote for transparency rather than show generic numbers.",
      },
      {
        question: "Q2. Do your deals include the federal and WA rebates?",
        answer: "Yes. Every quote we produce applies all eligible rebates as upfront discounts on your system price. Federal STCs (solar), federal Cheaper Home Batteries (battery), and the WA Residential Battery Scheme are all deducted from your quoted total before you pay.",
      },
      {
        question: "Q3. Can I use a Plenti no-interest loan on my install?",
        answer: "Yes, we partner with Plenti to offer green energy loans that allow you to pay off your solar battery system with 0% interest terms up to 10 years, subject to qualification.",
      },
      {
        question: "Q4. Will prices go up after 1 May 2026?",
        answer: "Rebate schemes have set allocations and deadlines. If government funds run dry or components increase in pricing, prices may rise. Securing your quote now locks in today's rates.",
      },
      {
        question: "Q5. Do you price-match other quotes?",
        answer: "We offer a best-price guarantee for comparable high-quality components and accredited local installation service. Show us an identical written quote, and we will happily match it.",
      },
      {
        question: "Q6. What happens after I request a quote?",
        answer: "Our local Perth-based energy consultants will review your electricity consumption profile and property. We will call you within 24 hours to discuss options and prepare a tailored, itemized proposal.",
      },
    ],
  },
];
