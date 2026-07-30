export const evChargingSections = [
  {
    __component: "ev-charging.hero" as const,
    subtitle: "Smart EV Charging",
    title: "Installing The Future Of Home Charging",
    description:
      "Charge your electric vehicle at home with clean solar energy. Regen Power designs and installs premium EV charging systems integrated with your solar and battery setup — powering your drive with sunshine.",
    buttonText: "Get A Free EV Charging Quote",
    buttonLink: "/contact",
    showOverlay: true,
  },

  {
    __component: "ev-charging.wall-connector" as const,
    title: "Tesla Wall Connector",
    subtitle: "Gen 3",
    description:
      "We're A Tesla Certified Partner. So When We Install Tesla, You're Buying It From The Source. The Tesla Wall Connector Gen 3 Is The Most Popular Home EV Charger In Australia — And For Good Reason. It Charges At Up To 22kW On Three-Phase Power, Comes With A 7.3-Metre Tethered Type 2 Cable That Fits Every Modern EV In Australia, And Pairs To The Tesla App For Live Monitoring And Over-The-Air Firmware Updates.",
    specs: [
      { label: "Up To 22kW (Three-Phase)" },
      { label: "7.3m Tethered Type 2 Cable" },
      { label: "IP55 — Indoor Or Outdoor" },
      { label: "4-Year Warranty" },
    ],
  },

  {
    __component: "ev-charging.charger-products" as const,
    subtitle: "Single-Phase Or Three-Phase?",
    title: "Here's What's Actually Different",
    products: [
      {
        name: "Single-Phase 7 KW",
        description:
          "Adds About 45 Km Of Range Per Hour — Enough To Fully Replenish The Average Daily Commute In Two To Three Hours, Every Night. Works In Nearly Every Perth Home And With Every EV Sold In Australia.",
      },
      {
        name: "Three-Phase 22 KW",
        description:
          "Adds About 130 Km Of Range Per Hour — Ideal for fast charging, large properties, or households with multiple EVs. Requires a three-phase electrical connection.",
      },
    ],
    brands: [
      { name: "Sigenergy" },
      { name: "Fronius" },
      { name: "Goodwe" },
      { name: "AlphaESS" },
    ],
  },

  {
    __component: "ev-charging.installer-brands" as const,
    subtitle: "More Than Tesla — Five Charger Brands",
    title: "One Trusted Installer",
    description:
      "Different Homes, Different EVs, Different Energy Setups. We Carry The Brands We Trust To Deliver.",
    brands: [
      {
        name: "Sigenergy",
        cardTitle: "Sigenergy, For The Buyer Thinking 10 Years Ahead",
        description:
          "SigenStor Is An All-In-One Solar, Battery, And EV Charging System With Bidirectional Charging And Advanced Energy Management.",
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
        description: "Smart EV Charging Built For Goodwe Solar Systems. Up To 22 KW | 5-Year Warranty",
      },
      {
        name: "AlphaESS",
        cardTitle: "Alpha ESS, For Alpha Battery Owners",
        description:
          "Designed For Alpha ESS Battery Homes. Intelligent Charging Modes Optimise Solar Usage, Off-Peak Tariffs, And Charging Performance.",
      },
    ],
  },

  {
    __component: "ev-charging.benefit-cards" as const,
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

  {
    __component: "ev-charging.home-battery" as const,
    subtitle: "Your EV Becomes",
    title: "A Home Battery",
    paragraphs: [
      {
        text: "Vehicle-To-Home (V2H) Lets Your Car Push Energy Back Into Your Home — Or Even Back To The Grid. With A 75-100 KWh Battery On Wheels, Your EV Can Power The House For Days During An Outage.",
      },
      {
        text: "Sigenergy's SigenStor With The EV DC Charging Module Is The Only System In Our Range That Supports True Bidirectional 25kW DC Charging Today.",
      },
    ],
    bulletPoints: [
      { text: "25 KW Bidirectional Power" },
      { text: "Up To 100+ KWh Of Vehicle Storage As Backup" },
      { text: "V2H + V2G Ready" },
    ],
    ctaText: "Talk To Us About Sigenergy",
    ctaLink: "#contact",
  },

  {
    __component: "ev-charging.feature-cards" as const,
    subtitle: "Solar, Battery, EV Charger",
    title: "Under One <br /> Roof",
    description:
      "Most Installers Will Sell You An EV Charger. We'll Connect It To The Solar We Put On Your Roof, The Battery In Your Garage, And The App You Already Use.",
    cards: [
      {
        title: "Solar Surplus Diversion",
        description:
          "Spare Solar Generation Flows Straight To Your EV Instead Of Being Exported At Low Feed-In Tariffs.",
      },
      {
        title: "Battery Boost",
        description:
          "When The Sun Goes Down, Your Battery Keeps Charging The Car. When The Grid Goes Down, Your Car Keeps Your Home Running.",
      },
      {
        title: "One App",
        description:
          "Live Monitoring Of Generation, Storage, And EV Charging In A Single Dashboard.",
      },
    ],
  },

  {
    __component: "ev-charging.installation-steps" as const,
    subtitle: "How EV charger installation works at",
    title: "Regen Power",
    steps: [
      {
        number: "01",
        title: "Online Site Survey",
        description: "Tell Us About Your Home And EV. We'll Assess The Job And Provide A Quote, No Obligation.",
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

  {
    __component: "ev-charging.stats" as const,
    subtitle: "Why Choose",
    title: "Regen Power",
    awardWinnerCount: 6,
    awardWinnerTitle: "Product Review Award\nWinner",
    batteryInstallationsCount: 3000,
    batteryInstallationsLabel: "Battery Installations",
    solarInstallationsCount: 45000,
    solarInstallationsLabel: "Solar Installations",
    yearsInBusinessCount: 23,
    yearsInBusinessDescription: "In Business, Operating From \n Canning Vale Office",
  },

  {
    __component: "shared.faq" as const,
    title: "FAQ",
    sectionTitle: "EV Charging",
    listTitle: "Frequently Asked Questions",
    items: [
      {
        question: "Q1. How Long Does It Take To Install An EV Charger?",
        answer:
          "Most residential EV charger installations are completed in half a day. A single-phase 7kW charger typically takes 3–4 hours. Three-phase 22kW installations may take slightly longer depending on your switchboard configuration.",
      },
      {
        question: "Q2. Can I Charge My EV With Solar Power?",
        answer:
          "Absolutely. Our chargers are designed to prioritise solar energy first. When paired with a battery, you can store excess daytime solar and charge your car overnight — completely off-grid.",
      },
      {
        question: "Q3. What Type Of Charger Do I Need?",
        answer:
          "For most Australian homes, a single-phase 7kW Type 2 charger is ideal — it fully charges most EVs overnight. If you have three-phase power and need faster charging, a 22kW charger can do it in under 2 hours.",
      },
      {
        question: "Q4. Do I Need To Upgrade My Switchboard?",
        answer:
          "In some cases, yes. Older switchboards may need a safety upgrade to support a dedicated EV circuit. We assess this during our free site inspection and include any required upgrades in your quote upfront.",
      },
      {
        question: "Q5. Is An EV Charger Worth It If I Don't Have Solar?",
        answer:
          "Yes — even without solar, a dedicated home charger is significantly cheaper and more convenient than public charging. You can schedule charging for off-peak hours to reduce costs.",
      },
    ],
  },

  {
    __component: "shared.cta-banner" as const,
    subtitle: "Get An EV Charger Designed",
    mainTitle: "For Your Home",
    description:
      "Tell us about your car, your power setup, and your driving habits. We'll design a charging solution that fits your home, your budget, and your energy goals — free, no-obligation, and no high-pressure sales.",
    buttonText: "Get My Free EV Quote",
    buttonHref: "/contact",
  },
];
