export const batteryStorageSections = [
  {
    __component: "battery-storage.hero" as const,
    subtitle: "Home Battery Storage",
    title: "Engineered For Perth Homes",
    description: "Store your solar energy, backup your home, and take control of your power bills with premium battery storage systems from the world's leading brands.",
    buttonText: "Get Your Free Quote",
    buttonLink: "/contact",
    backgroundImage: null,
  },
  {
    __component: "battery-storage.marquee" as const,
    items: [
      { text: "45,000+ Solar Installations" },
      { text: "3000+ Battery Storage Installs" },
      { text: "23 Years In Perth" },
      { text: "4.9★ Rating (Google + ProductReview)" },
    ],
  },
  {
    __component: "battery-storage.debs-rebate" as const,
    subtitle: "The Best Rebate Window WA Homeowners Have Ever Seen",
    title: "And It Closes On 1 May 2026",
    description: "If you've watched your Synergy bill rise, 2026 is one of the best times to invest in a home battery. Eligible households can access up to $1,300 (Synergy) or $3,800 (Horizon Power) through the WA Residential Battery Scheme, plus around $3,720 from the federal Cheaper Home Batteries Program for a 10kWh system. Interest-free loans of up to $10,000 over 3–10 years are also available through Plenti. With DEBS export rates as low as 2.25c/kWh off-peak, storing your solar can be worth around 30c per kWh instead of exporting it. Install before 1 May 2026 to maximise rebates before federal incentives reduce and new SWIS connection rules take effect.",
    image: null,
    ctaText: "See If I'm Eligible For The Full Rebate",
    ctaLink: "/contact",
  },
  {
    __component: "battery-storage.jargon" as const,
    topSubtitle: "What a battery actually",
    title: "Does to your bill",
    bottomSubtitle: "Across our 45,000+ installations, Perth households combining solar with battery storage typically see bill reductions of 70–90% — transforming electricity from a major expense into a near-negligible one.",
    cards: [
      {
        title: "Maximize Your Solar",
        description: "Store excess daytime solar power for use at night, drastically reducing your reliance on the grid.",
        image: null,
      },
      {
        title: "Power Outage Protection",
        description: "Keep the lights on and the fridge running even when the grid goes down.",
        image: null,
      },
      {
        title: "Future-Proof Your Home",
        description: "Prepare for rising energy costs and the transition to electric vehicles with home battery storage.",
        image: null,
      },
    ],
  },
  {
    __component: "battery-storage.bill-impact" as const,
    topSubtitle: "How your battery works",
    title: "(Without jargon)",
    description: "A home battery stores the solar your panels produce during the day so you can use it after sundown, when grid electricity is most expensive.",
    cards: [
      {
        title: "Shift Your Usage",
        description: "Use stored solar energy during peak evening hours when electricity is most expensive.",
        image: null,
      },
      {
        title: "Achieve True Independence",
        description: "Many of our customers with appropriately sized solar and battery systems receive bills close to $0.",
        image: null,
      },
      {
        title: "Seamless Backup Power",
        description: "Keep your most important appliances running effortlessly, even when the grid fails during a storm.",
        image: null,
      },
      {
        title: "Beat Rising Tariffs",
        description: "Lock in your energy costs today and protect your household from future electricity price hikes.",
        image: null,
      },
      {
        title: "Maximize Your Investment",
        description: "Store every drop of excess solar your panels generate, rather than sending it back for pennies.",
        image: null,
      },
    ],
  },
  {
    __component: "battery-storage.range-grid" as const,
    topSubtitle: "Five Ways Into",
    title: "Our Battery Range",
    description: "Explore our premium battery storage options, each engineered for different needs and budgets.",
    batteries: [
      {
        title: "Turn Your Home Into A Smart Energy Hub",
        description: "App control, VPP integration, automated load shifting and EV-ready. The next generation of what a home battery can do.",
        image: null,
        ctaText: "Explore smart home batteries",
        ctaLink: "/smart-home-battery-system",
      },
      {
        title: "Our Full Battery Range",
        description: "Tesla Powerwall 3, BYD, Alpha ESS, Sigenergy, iStore and more. Right-sized for your home, your usage and your solar system.",
        image: null,
        ctaText: "see all products",
        ctaLink: "/battery-product",
      },
      {
        title: "Claim Up To $7,900 Off In 2026",
        description: "Step-by-step guide to the WA Residential Battery Scheme, federal Cheaper Home Batteries Program, and the $10,000 interest-free loan.",
        image: null,
        ctaText: "rebate guide",
        ctaLink: "/government-rebates",
      },
      {
        title: "Only Proven, Perth-Tested Brands",
        description: "Every brand we install is CEC-approved, on Synergy's Supported Solutions List, and field-tested in WA conditions.",
        image: null,
        ctaText: "compare brands",
        ctaLink: "/brands-we-carry",
      },
      {
        title: "Your Questions, Answered Instantly",
        description: "40+ questions from Perth homeowners — sizing, VPP, blackouts, warranties, real-world performance.",
        image: null,
        ctaText: "read the FAQ",
        ctaLink: "#faq",
      },
    ],
  },
  {
    __component: "battery-storage.capacity-blocks" as const,
    topSubtitle: "Three Rebates Stacked",
    title: "On A 10kWh Battery",
    description: "For most Perth homeowners, three incentives combine to take thousands off the price of a battery.",
    cards: [
      {
        title: "WA Residential Battery Scheme",
        description: "Up To $1,300 (Synergy) Or $3,800 (Horizon)",
        isPrimary: false,
      },
      {
        title: "Federal Cheaper Home Batteries Program",
        description: "Approximately $3,720 On A 10kWh Battery",
        isPrimary: true,
      },
      {
        title: "Interest-Free Loan",
        description: "Up To $10,000 Over 3–10 Years (Via Plenti, Income Under $210k)",
        isPrimary: false,
      },
    ],
    footerText: "Combined Value: Up To $5,000 (Synergy) Or $7,500 (Horizon) Off A 10kWh Battery. Plus The Option To Finance The Rest At 0% Interest.",
    ctaText: "Full Rebate Guide",
    ctaLink: "/government-rebates",
  },
  {
    __component: "battery-storage.great-fit" as const,
    topSubtitle: "A Battery",
    title: "Is A Great Fit If",
    description: "Here's what makes a battery a good investment for your home.",
    goodFitTitle: "Good Fit",
    goodFitItems: [
      "You already have solar, or you're adding solar and a battery together",
      "Your Synergy bill regularly exceeds $400/quarter",
      "You use a meaningful amount of power after 3pm (families, home-based workers, EV owners)",
      "You own your home (the rebate requires owner-occupier or landlord consent)",
      "You're on Synergy (SWIS) or Horizon Power",
    ],
    conversationTitle: "Worth A Conversation First",
    conversationItems: [
      "You're away during the day AND evenings — you may not cycle the battery hard enough",
      "Your roof is heavily shaded or poorly oriented — solar sizing matters for battery value",
      "You're planning an EV purchase in 12 months — battery sizing should account for it",
      "You're a renter or strata property — rebates and technical approvals need upfront planning",
    ],
  },
  {
    __component: "battery-storage.solar-meaning" as const,
    topSubtitle: "What Solar + Battery",
    title: "Actually Means For You",
    description: "It's not just about the hardware; it's about the lifestyle change.",
    cards: [
      {
        title: "Peace of Mind",
        description: "Never worry about the next electricity bill or sudden rate hikes.",
        isPrimary: false,
      },
      {
        title: "Backup When You Need It",
        description: "Keep essential appliances running during grid outages.",
        isPrimary: false,
      },
      {
        title: "Clean Energy Maximised",
        description: "Maximize your use of clean, renewable energy every day.",
        isPrimary: false,
      },
      {
        title: "Home Value Boost",
        description: "Increase the resale value and appeal of your property.",
        isPrimary: false,
      },
    ],
  },
  {
    __component: "battery-storage.installation-timeline" as const,
    topSubtitle: "From Quote To Switched On",
    title: "In About 4–6 Weeks",
    steps: [
      {
        title: "Free Home Assessment",
        description: "Our team visits your property or runs a remote assessment. We review your energy bills, roof orientation, main switchboard capacity, and any existing solar.",
        image: null,
      },
      {
        title: "Custom System Design",
        description: "Our engineers design a tailored system based on your usage patterns, roof layout, and future plans like EV charging.",
        image: null,
      },
      {
        title: "Western Power Approval",
        description: "We handle the full application to Western Power and Synergy. You don't need to lift a finger.",
        image: null,
      },
      {
        title: "Installation Day",
        description: "Our in-house CEC-accredited electricians install your system in 1–2 days. No subcontractors.",
        image: null,
      },
    ],
  },
  {
    __component: "battery-storage.team" as const,
    topSubtitle: "23 Years. 45,000+ Installations.",
    title: "One Local Team.",
    cards: [
      {
        title: "Tesla Certified Installer",
        description: "One of the few Perth installers with direct Tesla Powerwall certification. We're trained and authorised by Tesla, not just retailing the product.",
        image: null,
      },
      {
        title: "NETCC Approved Retailer",
        description: "NETCC is the highest accreditation. Our compliance, installation standards and consumer protections are independently verified.",
        image: null,
      },
      {
        title: "ProductReview Award, 6 Years Running",
        description: "Winner 2021, 2022, 2023, 2024, 2025, 2026. Verified customer reviews, not marketing stats.",
        image: null,
      },
      {
        title: "45,000+ Solar | 3000+ Storage Installations",
        description: "From a single roof in Canning Vale to industrial-scale off-grid systems. Scale matters when warranty time comes around.",
        image: null,
      },
      {
        title: "Local, Since 2003",
        description: "Perth-based head office in Canning Vale. Same team that sells is the team that installs and services — 23 years later.",
        image: null,
      },
    ],
    ctaText: "See Our Customer Reviews",
    ctaLink: "/reviews",
  },
  {
    __component: "battery-storage.customer-stories" as const,
    topSubtitle: "Customers",
    title: "That Made The Switch",
    stories: [
      {
        quote: "Our bills went from $600 to essentially zero. The battery was the best investment we made.",
        author: "Sarah M.",
        location: "Joondalup, WA",
        image: null,
      },
      {
        quote: "The team at Regen Power were professional from start to finish. Highly recommend.",
        author: "David & Lisa T.",
        location: "Mandurah, WA",
        image: null,
      },
      {
        quote: "We love having backup power. When the grid went down last month, we didn't even notice.",
        author: "Mark W.",
        location: "Fremantle, WA",
        image: null,
      },
    ],
  },
  {
    __component: "shared.faq" as const,
    title: "Ask Us Most",
    sectionTitle: "Your Battery & Installation Questions Answered",
    listTitle: "Frequently Asked Questions",
    image: null,
    items: [
      {
        question: "How long do solar batteries last?",
        answer: "Most quality solar batteries come with a 10-year warranty and are expected to last 10-15 years depending on usage cycles.",
      },
      {
        question: "Can I add a battery to my existing solar system?",
        answer: "Yes, in most cases we can retrofit a battery. We call this AC coupling, and it works with almost any existing solar inverter.",
      },
      {
        question: "Do I still need to be connected to the grid?",
        answer: "While you can go completely off-grid, it's usually more cost-effective to remain grid-connected for backup during long periods of bad weather.",
      },
    ],
  },
  {
    __component: "shared.cta-banner" as const,
    subtitle: "Don't Miss Out Before",
    mainTitle: "1 May 2026",
    description: "The DEBS rebate won't last forever. Get your custom quote today.",
    buttonText: "Get A Quote",
    buttonHref: "/contact",
    backgroundImage: null,
  },
];
