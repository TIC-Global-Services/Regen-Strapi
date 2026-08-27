import type { UID } from "@strapi/types";

interface Section {
  __component: string;
  [key: string]: unknown;
}

export const evChargingSections: Section[] = [
  // ─── 1. Hero ─────────────────────────────────────────────────────────
  {
    __component: "ev-charging.hero",
    subtitle: "Smart EV Charging",
    title: "Installing The Future Of Home Charging",
    description:
      "Charge your electric vehicle at home with clean solar energy. Regen Power designs and installs premium EV charging systems integrated with your solar and battery setup — powering your drive with sunshine.",
    buttonText: "Get A Free EV Charging Quote",
    buttonLink: "/contact",
    showOverlay: true,
  },

  // ─── 2. Wall Connector ──────────────────────────────────────────────
  {
    __component: "ev-charging.wall-connector",
    title: "Tesla Wall Connector",
    subtitle: "Gen 3",
    description:
      "We're a Tesla certified partner. So when we install Tesla, you're buying it from the source. The Tesla Wall Connector Gen 3 is the most popular home EV charger in Australia — and for good reason. It charges at up to 22kW on three-phase power, comes with a 7.3-metre tethered Type 2 cable that fits every modern EV in Australia, and pairs to the Tesla app for live monitoring and over-the-air firmware updates.",
    specs: [
      { label: "Up To 22kW (Three-Phase)" },
      { label: "7.3m Tethered Type 2 Cable" },
      { label: "IP55 — Indoor Or Outdoor" },
      { label: "4-Year Warranty" },
    ],
  },

  // ─── 3. Charger Products ────────────────────────────────────────────
  {
    __component: "ev-charging.charger-products",
    subtitle: "Single-Phase Or Three-Phase?",
    title: "Here's What's Actually Different",
    products: [
      {
        name: "Single-Phase 7 KW",
        description:
          "Adds about 45 km of range per hour — enough to fully replenish the average daily commute in two to three hours, every night. Works in nearly every Perth home and with every EV sold in Australia.",
      },
      {
        name: "Three-Phase 22 KW",
        description:
          "Adds about 130 km of range per hour — ideal for fast charging, large properties, or households with multiple EVs. Requires a three-phase electrical connection.",
      },
    ],
  },

  // ─── 4. Installer Brands ─────────────────────────────────────────────
  {
    __component: "ev-charging.installer-brands",
    subtitle: "More Than Tesla — Five Charger Brands",
    title: "One Trusted Installer",
    description:
      "Different homes, different EVs, different energy setups. We carry the brands we trust to deliver.",
    brands: [
      {
        name: "Sigenergy",
        cardTitle: "Sigenergy, For The Buyer Thinking 10 Years Ahead",
        description:
          "SigenStor is an all-in-one solar, battery, and EV charging system with bidirectional charging and advanced energy management.",
      },
      {
        name: "Fronius",
        cardTitle: "Fronius Wattpilot — Solar-Smart, Beautifully Built",
        description:
          "Solar-integrated EV charging, built by Fronius. Up to 22 kW | Smart energy management",
      },
      {
        name: "Goodwe",
        cardTitle: "Goodwe HCA G2 — The Smart-Value All-Rounder",
        description: "Smart EV charging built for Goodwe solar systems. Up to 22 kW | 5-year warranty",
      },
      {
        name: "AlphaESS",
        cardTitle: "Alpha ESS, For Alpha Battery Owners",
        description:
          "Designed for Alpha ESS battery homes. Intelligent charging modes optimise solar usage, off-peak tariffs, and charging performance.",
      },
    ],
  },

  // ─── 5. Why Charge At Home ──────────────────────────────────────────
  {
    __component: "ev-charging.benefit-cards",
    title: "Why Charge At Home",
    benefits: [
      {
        title: "Cheaper Per Km Than Petrol",
        description:
          "Charging at home is dramatically cheaper than petrol — even more so when you're charging from your own solar. Daytime solar charging effectively brings your fuel cost to zero.",
      },
      {
        title: "Always A Full Charge In The Morning",
        description:
          "Plug in when you get home, wake up to a full battery. A 7kW home charger adds about 45 km of range per hour.",
      },
      {
        title: "You're In Control",
        description:
          "Schedule charging for off-peak periods, prioritise solar surplus, set kilowatt limits, monitor every session from your phone.",
      },
    ],
  },

  // ─── 6. Home Battery (V2H) ─────────────────────────────────────────
  {
    __component: "ev-charging.home-battery",
    subtitle: "Your EV Becomes",
    title: "A Home Battery",
    paragraphs: [
      {
        text: "Vehicle-to-home (V2H) lets your car push energy back into your home — or even back to the grid. With a 75-100 kWh battery on wheels, your EV can power the house for days during an outage.",
      },
      {
        text: "Sigenergy's SigenStor with the EV DC charging module is the only system in our range that supports true bidirectional 25kW DC charging today.",
      },
    ],
    bulletPoints: [
      { text: "25 kW bidirectional power" },
      { text: "Up to 100+ kWh of vehicle storage as backup" },
      { text: "V2H + V2G ready" },
    ],
    ctaText: "Talk To Us About Sigenergy",
    ctaLink: "#contact",
  },

  // ─── 7. Under One Roof (Feature Cards) ──────────────────────────────
  {
    __component: "ev-charging.feature-cards",
    subtitle: "Solar, Battery, EV Charger",
    title: "Under One Roof",
    description:
      "Most installers will sell you an EV charger. We'll connect it to the solar we put on your roof, the battery in your garage, and the app you already use.",
    cards: [
      {
        title: "Solar Surplus Diversion",
        description:
          "Spare solar generation flows straight to your EV instead of being exported at low feed-in tariffs.",
      },
      {
        title: "Battery Boost",
        description:
          "When the sun goes down, your battery keeps charging the car. When the grid goes down, your car keeps your home running.",
      },
      {
        title: "One App",
        description:
          "Live monitoring of generation, storage, and EV charging in a single dashboard.",
      },
    ],
  },

  // ─── 8. Installation Steps ──────────────────────────────────────────
  {
    __component: "ev-charging.installation-steps",
    subtitle: "How EV Charger Installation Works At",
    title: "Regen Power",
    steps: [
      {
        number: "01",
        title: "Online Site Survey",
        description: "Tell us about your home and EV. We'll assess the job and provide a quote, no obligation.",
      },
      {
        number: "02",
        title: "Switchboard & Site Audit",
        description: "We review your electrical switchboard capacity, cable pathing, and safety standards.",
      },
      {
        number: "03",
        title: "Professional Installation",
        description: "Our CEC-accredited electricians mount the unit, run dedicated cabling, and complete the physical install.",
      },
      {
        number: "04",
        title: "App Integration & Testing",
        description: "We configure your charger to connect with your home Wi-Fi and solar/battery app.",
      },
    ],
  },

  // ─── 9. Why Choose Us — simple cards: title, description, image; only first has counter ─
  {
    __component: "ev-charging.stats",
    headerSubtitle: "23 Years Powering Australian",
    headerTitle: "Homes And Counting",
    cards: [
      {
        counterValue: 500,
        counterSuffix: "+",
        title: "EV Chargers",
        description: "Installed across homes and businesses.",
        image: null,
      },
      {
        title: "45,000+ solar systems and 3,000+ battery systems successfully installed.",
        
        image: null,
      },
      {
        title: "23 years in business, operating from our Canning Vale office.",
        image: null,
      },
    ],
  },

  // ─── 10. FAQ ─────────────────────────────────────────────────────────
  {
    __component: "shared.faq",
    title: "FAQ",
    sectionTitle: "EV Charging",
    listTitle: "Frequently Asked Questions",
    items: [
      {
        question: "Q1. How long does it take to install an EV charger?",
        answer:
          "Most residential EV charger installations are completed in half a day. A single-phase 7kW charger typically takes 3–4 hours. Three-phase 22kW installations may take slightly longer depending on your switchboard configuration.",
      },
      {
        question: "Q2. Can I charge my EV with solar power?",
        answer:
          "Absolutely. Our chargers are designed to prioritise solar energy first. When paired with a battery, you can store excess daytime solar and charge your car overnight — completely off-grid.",
      },
      {
        question: "Q3. What type of charger do I need?",
        answer:
          "For most Australian homes, a single-phase 7kW Type 2 charger is ideal — it fully charges most EVs overnight. If you have three-phase power and need faster charging, a 22kW charger can do it in under 2 hours.",
      },
      {
        question: "Q4. Do I need to upgrade my switchboard?",
        answer:
          "In some cases, yes. Older switchboards may need a safety upgrade to support a dedicated EV circuit. We assess this during our free site inspection and include any required upgrades in your quote upfront.",
      },
      {
        question: "Q5. Is an EV charger worth it if I don't have solar?",
        answer:
          "Yes — even without solar, a dedicated home charger is significantly cheaper and more convenient than public charging. You can schedule charging for off-peak hours to reduce costs.",
      },
    ],
  },

  // ─── 11. CTA Banner ─────────────────────────────────────────────────
  {
    __component: "shared.cta-banner",
    subtitle: "Get An EV Charger Designed",
    mainTitle: "For Your Home",
    description:
      "Tell us about your car, your power setup, and your driving habits. We'll design a charging solution that fits your home, your budget, and your energy goals — free, no-obligation, and no high-pressure sales.",
    buttonText: "Get My Free EV Quote",
    buttonLink: "/contact",
  },
];
