export const batteryBrandsSections = [
  {
    __component: "battery-brands.hero" as const,
    subtitle: "Solar Battery",
    title: "Brands We Carry In Perth",
    description: "The brands we trust, from premium to accessible. Tesla Powerwall 3, BYD Battery-Box, Alpha ESS, iStore, Sigenergy SigenStor, Anker Solix, Goodwe Lynx Home. Every one has been through our technical review and field-tested across our 45,000+ installations.",
    ctaText: "Get Your Free Quote",
    ctaLink: "#quote",
    showOverlay: true,
    backgroundImage: null,
  },
  {
    __component: "battery-brands.brand-long-term-bet" as const,
    subtitle: "A Battery Lives With You For 10–15 Years.",
    title: "Brand Is A Long-Term Bet.",
    cards: [
      {
        title: "Cheap Brands Disappear",
        description: "35+ solar companies in WA have closed in the last 3 years alone. When the installer went, so did their warranties. We only install brands with genuine global scale and Australian distribution partners.",
        image: null,
      },
      {
        title: "The Chemistry You Want Is LFP",
        description: "Lithium iron phosphate runs cooler, tolerates Perth's heat better than older NMC chemistry, and has a fundamentally lower thermal runaway risk. Every brand we install uses LFP exclusively.",
        image: null,
      },
      {
        title: "Ecosystem Lock-In Is Real",
        description: "For better or worse, some brands work with everything (BYD). Others build an ecosystem around themselves (Tesla, Sigenergy) with benefits if you buy in fully, less benefit if you mix. Know what you're choosing.",
        image: null,
      },
    ],
  },
  {
    __component: "battery-brands.what-it-takes" as const,
    subtitle: "What it takes to be on this page",
    title: "We don't install every battery on the market. The brands below cleared a specific bar:",
    description: "Brands we have specifically chosen not to install (for reference): older NMC chemistry products, single-source imports without Australian distribution, brands without genuine VPP compatibility, batteries under 5 kWh (too small to clear WA rebate minimum).",
    items: [
      { text: "CEC approved battery list — included and current" },
      { text: "Synergy or Horizon Power supported solutions list — qualified for WA residential battery scheme" },
      { text: "LFP chemistry — safer, longer-lasting, better in WA heat" },
      { text: "Australian distribution presence — warranty support that survives the retailer" },
      { text: "Verifiable field performance — either through our own install base or through independent industry review" },
    ],
    image: null,
    imageAlt: "Solar panels on a roof at sunset",
  },
  {
    __component: "battery-brands.seven-brand" as const,
    title: "Seven Brand Cards",
    brands: [
      {
        title: "Tesla Powerwall 3",
        description: "The category benchmark. Seamless, premium, integrated.",
        specification: [
          {
            title: "Key Specs:",
            specdetails: [
              { title: "Usable Capacity", description: "13.5 kWh" },
              { title: "Continuous Power", description: "Up to 11.04 kW" },
              { title: "Chemistry", description: "Lithium iron phosphate (LFP)" },
              { title: "Warranty", description: "10 Years" },
              { title: "Temperature Range", description: "-20°C to 50°C" },
              { title: "Integrated Solar Inverter", description: "Yes (up to 20 kW DC solar input)" },
              { title: "Dimensions", description: "Approximately 1100 × 610 × 190 mm" },
            ],
          },
          {
            title: "",
            specdetails: [
              { title: "Smart Home:", description: "Native Tesla app. Home Assistant via community plugins. Limited Google/Apple home support." },
              { title: "Certifications:", description: "CEC approved battery · Tesla certified installer (we hold this)" },
            ],
          },
          {
            title: "Why We Carry It:",
            specdetails: [
              { title: "", description: "Tesla Powerwall is the single most installed home battery in Australia and its app remains the category benchmark for user experience. Powerwall 3's integrated solar inverter reduces installation complexity and cost — you don't need a separate hybrid inverter. For Tesla EV owners, native integration across Powerwall, wall connector and vehicle is uniquely seamless." },
            ],
          },
          {
            title: "Feature Bullets:",
            specdetails: [
              { title: "", description: "Integrated solar inverter — one unit, one install" },
              { title: "", description: "Tesla app — industry-leading monitoring and control" },
              { title: "", description: "10 kW continuous backup — runs most of a home, not just 'essential circuits'" },
              { title: "", description: "Stackable via additional full units as needs grow" },
              { title: "", description: "Over-the-air firmware updates for 10-year warranty" },
              { title: "", description: "Indoor or outdoor installation (IP rated)" },
            ],
          },
          {
            title: "",
            specdetails: [
              { title: "Best For:", description: "Households valuing premium app UX, Tesla EV owners, homes prioritising whole-home backup with zero transition time." },
              { title: "VPP Compatibility:", description: "On Synergy supported solutions list. Battery rewards eligible." },
            ],
          },
        ],
      },
      {
        title: "BYD Battery-Box Premium HVS/HVM",
        description: "The scalable modular LFP. Inverter-agnostic. Field-proven.",
        specification: [
          {
            title: "Key Specs:",
            specdetails: [
              { title: "Usable Capacity", description: "5.1–12.8 kWh per tower (HVS) / larger range on HVM" },
              { title: "Max Scale", description: "Up to 38.4 kWh via 3 parallel HVS towers" },
              { title: "Chemistry", description: "LFP (lithium iron phosphate)" },
              { title: "Warranty", description: "10 years product + 10 years performance" },
              { title: "Protection Rating", description: "IP55 (indoor or outdoor)" },
              { title: "Inverter Compatibility", description: "1-phase, 3-phase high-voltage battery" },
            ],
          },
          {
            title: "",
            specdetails: [
              { title: "VPP Compatibility:", description: "On Synergy supported solutions list. Battery rewards eligible. Smart home: Home Assistant via community integrations. BYD BYOS app. API via inverter." },
              { title: "Certifications:", description: "CEC approved battery · BYD authorised installer" },
            ],
          },
          {
            title: "Why We Carry It:",
            specdetails: [
              { title: "", description: "BYD is the world's largest producer of rechargeable batteries. The Battery-Box's modular plug design requires no internal wiring and scales in 2.56 kWh increments, making it the most flexible system on the market for households that want to start smaller and grow. Compatible with major hybrid inverters including Sungrow, Fronius and SolaX — you're not locked into one inverter ecosystem." },
            ],
          },
          {
            title: "Feature Bullets:",
            specdetails: [
              { title: "", description: "Modular towers — add capacity without replacing the system" },
              { title: "", description: "Inverter-agnostic — choose from Sungrow, Fronius, SolaX" },
              { title: "", description: "IP55 outdoor-rated — no enclosure required" },
              { title: "", description: "High peak output per kWh — runs pumps, ACs and motor loads well" },
              { title: "", description: "Performance warranty with minimum capacity retention" },
            ],
          },
          {
            title: "",
            specdetails: [
              { title: "Best For:", description: "Households wanting modular scalability without ecosystem lock-in; homes planning to expand capacity as EV ownership or usage grows." },
            ],
          },
        ],
      },
      {
        title: "Alpha ESS SMILE5",
        description: "The flexible hybrid for smaller homes and modular growth.",
        specification: [
          {
            title: "Key Specs:",
            specdetails: [
              { title: "Usable Capacity", description: "2.9–80 kWh (Modular)" },
              { title: "Inverter", description: "5 kW single-phase hybrid built-in" },
              { title: "Chemistry", description: "LFP" },
              { title: "Warranty", description: "10 Years" },
              { title: "Backup", description: "Yes" },
            ],
          },
          {
            title: "",
            specdetails: [
              { title: "Smart Home:", description: "Home Assistant native integration. AlphaCloud app. Vendor API available." },
              { title: "Certifications:", description: "CEC approved battery" },
            ],
          },
          {
            title: "Why We Carry It:",
            specdetails: [
              { title: "", description: "Alpha ESS offers one of the widest capacity ranges of any brand — from a small 2.9 kWh starter through to commercial-scale 80 kWh. The SMILE5's built-in 5 kW hybrid inverter simplifies installations for homes without existing battery-ready inverters. Strong value-tier option for budget-conscious households who want quality LFP chemistry without premium-brand pricing." },
            ],
          },
          {
            title: "Feature Bullets:",
            specdetails: [
              { title: "", description: "Built-in 5 kW hybrid inverter — no separate inverter needed" },
              { title: "", description: "Capacity range from 2.9 kWh to 80 kWh" },
              { title: "", description: "Strong value-tier option for budget-minded buyers" },
              { title: "", description: "Grid-interactive with VPP compatibility" },
              { title: "", description: "10-Year Warranty" },
            ],
          },
          {
            title: "",
            specdetails: [
              { title: "Best For:", description: "Smaller Perth homes, apartments with limited installation space, households wanting flexibility to start small and expand." },
              { title: "VPP Compatibility:", description: "On Synergy supported solutions list." },
            ],
          },
        ],
      },
      {
        title: "iStore Battery",
        description: "Slim, modular, Australian-supported.",
        specification: [
          {
            title: "Key Specs:",
            specdetails: [
              { title: "Module Capacity", description: "5 kWh per module" },
              { title: "Max Capacity", description: "Up to 30 kWh (3 modules × 2 parallel sets)" },
              { title: "Module Weight", description: "50 kg" },
              { title: "Depth Of Discharge", description: "100%" },
              { title: "Dimensions", description: "670 mm width × 150 mm depth (slim profile)" },
              { title: "Warranty", description: "10 Years" },
            ],
          },
          {
            title: "",
            specdetails: [
              { title: "Smart Home:", description: "iStore app. Google Home via iStore Hub." },
              { title: "Certifications:", description: "CEC approved battery · iStore authorised installer" },
            ],
          },
          {
            title: "Why We Carry It:",
            specdetails: [
              { title: "", description: "iStore is an Australian brand with local support infrastructure — warranty response times are typically faster than international brands. The 150mm slim depth makes it one of the lowest-profile wall-mount batteries on the market, useful in tight installations. 100% depth of discharge means every kWh you buy is usable." },
            ],
          },
          {
            title: "Feature Bullets:",
            specdetails: [
              { title: "", description: "100% depth of discharge — no reserved capacity" },
              { title: "", description: "150mm slim depth — wall-mount in tight spaces" },
              { title: "", description: "Modular 5 kWh units — start small, scale up" },
              { title: "", description: "Optional backup box for emergency power" },
              { title: "", description: "Fire extinguishers and energy optimisers built-in" },
              { title: "", description: "Works with iStore air-to-energy and pool heater for full ecosystem" },
            ],
          },
          {
            title: "",
            specdetails: [
              { title: "Best For:", description: "Homes with constrained installation space; buyers who value local support over global brand prestige; iStore ecosystem users (hot water, pool heating)." },
              { title: "VPP Compatibility:", description: "On Synergy supported solutions list." },
            ],
          },
        ],
      },
      {
        title: "Anker Solix",
        description: "Consumer-tech pedigree. Australian launch. Strong app UX.",
        specification: [
          {
            title: "Key Specs:",
            specdetails: [
              { title: "Usable Capacity", description: "Modular (Scalable)" },
              { title: "Chemistry", description: "LFP" },
              { title: "Warranty", description: "10 Years" },
              { title: "Backup", description: "Yes" },
            ],
          },
          {
            title: "",
            specdetails: [
              { title: "Smart Home:", description: "Anker Cloud app. Home Assistant via community plugins." },
              { title: "Certifications:", description: "CEC Approved Battery" },
            ],
          },
          {
            title: "Why We Carry It:",
            specdetails: [
              { title: "", description: "Anker brings consumer-electronics reliability (the brand most Australians know from phone chargers and portable power) into the residential battery category. The app UX is a notable strength — cleaner and more approachable than many industry-default interfaces. LFP chemistry and modular scalability match our selection criteria." },
            ],
          },
          {
            title: "Feature Bullets:",
            specdetails: [
              { title: "", description: "Modular, scalable design" },
              { title: "", description: "LFP chemistry — safer, longer-lasting" },
              { title: "", description: "Polished app UX — intuitive for non-technical users" },
              { title: "", description: "VPP Compatibility" },
              { title: "", description: "10-year warranty backed by a global consumer brand" },
            ],
          },
          {
            title: "",
            specdetails: [
              { title: "Best For:", description: "Households who value consumer-brand familiarity, first-time battery buyers, buyers who prioritise app usability." },
              { title: "VPP Compatibility:", description: "On Synergy supported solutions list (verify specific model at quote stage)" },
            ],
          },
        ],
      },
      {
        title: "Sigenergy SigenStor",
        description: "The ultimate 5-in-1 smart battery. High-power DC charging & V2H ready.",
        specification: [
          {
            title: "Key Specs:",
            specdetails: [
              { title: "Usable Capacity", description: "5.0 - 48.0 kWh (Modular)" },
              { title: "Continuous Power", description: "Up to 25 kW (Bidirectional DC)" },
              { title: "Chemistry", description: "LFP (lithium iron phosphate)" },
              { title: "Warranty", description: "10 years battery & inverter, 5 years gateway" },
              { title: "Protection Rating", description: "IP66 (highest industry rating)" },
              { title: "Dimensions", description: "Stackable modules, space-saving footprint" },
            ],
          },
          {
            title: "",
            specdetails: [
              { title: "Smart Home:", description: "Native Home Assistant integration. GPT-4 powered MySigen assistant. Advanced energy management." },
              { title: "Certifications:", description: "CEC approved battery · Sigenergy pro partner (we hold this)" },
            ],
          },
          {
            title: "Why We Carry It:",
            specdetails: [
              { title: "", description: "SigenStor is the industry's first 5-in-1 energy storage system, combining the hybrid inverter, battery storage, DC EV charger, EMS, and gateway into one sleek stack. It allows DC charging of EVs directly from solar at up to 25 kW and is fully hardware-ready for Vehicle-to-Home (V2H) and Vehicle-to-Grid (V2G) power backup." },
            ],
          },
          {
            title: "Feature Bullets:",
            specdetails: [
              { title: "", description: "5-in-1 integrated design — sleek, space-saving stack" },
              { title: "", description: "DC fast EV charging — up to 25 kW bidirectional power" },
              { title: "", description: "V2H/V2G bidirectional ready — use your EV to power your home" },
              { title: "", description: "GPT-4 powered MySigen AI assistant for smart optimization" },
              { title: "", description: "Modular capacity (5 to 48 kWh per stack)" },
              { title: "", description: "IP66 rating for demanding outdoor environments" },
            ],
          },
          {
            title: "",
            specdetails: [
              { title: "Best For:", description: "Tech-forward homes, EV owners wanting DC fast charging, and Home Assistant enthusiasts." },
              { title: "VPP Compatibility:", description: "On Synergy supported solutions list. battery rewards eligible." },
            ],
          },
        ],
      },
      {
        title: "Sungrow SBH Series",
        description: "High-voltage, high-power backup for Sungrow inverters.",
        specification: [
          {
            title: "Key Specs:",
            specdetails: [
              { title: "Usable Capacity", description: "10 - 40 kWh (Modular)" },
              { title: "Continuous Power", description: "Up to 20 kW high-voltage output" },
              { title: "Chemistry", description: "LFP (lithium iron phosphate)" },
              { title: "Warranty", description: "10 Years" },
              { title: "Dimensions", description: "Modular snap-fit stack" },
            ],
          },
          {
            title: "",
            specdetails: [
              { title: "Smart Home:", description: "iSolarCloud app. Integrated smart meter monitoring." },
              { title: "Certifications:", description: "CEC approved battery · Sungrow authorised installer" },
            ],
          },
          {
            title: "Why We Carry It:",
            specdetails: [
              { title: "", description: "The Sungrow SBH series is designed to pair natively with Sungrow's market-leading high-voltage hybrid inverters. Featuring a robust modular design with tool-free snap fit connectors, it is capable of providing up to 20 kW of continuous backup power, making it one of the most powerful and reliable native storage upgrades available." },
            ],
          },
          {
            title: "Feature Bullets:",
            specdetails: [
              { title: "", description: "Tool-free plug-and-play snap-fit modular connection" },
              { title: "", description: "High output power — up to 20 kW continuous backup" },
              { title: "", description: "Natively integrates with Sungrow high-voltage hybrid inverters" },
              { title: "", description: "High reliability LFP technology" },
              { title: "", description: "100% usable capacity (100% DoD)" },
              { title: "", description: "Direct remote monitoring via iSolarCloud app" },
            ],
          },
          {
            title: "",
            specdetails: [
              { title: "Best For:", description: "Homes with existing Sungrow inverters looking for seamless integration and high backup power capacity." },
              { title: "VPP Compatibility:", description: "On Synergy supported solutions list. battery rewards eligible." },
            ],
          },
        ],
      },
    ],
  },
  {
    __component: "battery-product.comparison-table" as const,
    subtitle: "Side-By-Side",
    title: "At A Glance",
    description: "",
    labelColumnTitle: "Brand & Series",
    columns: [
      { title: "Jinko Tiger Neo" },
      { title: "LONGi Hi-MO X10" },
      { title: "Canadian Solar TOPHiku6" },
      { title: "JA Solar DeepBlue 4.0 Pro" },
      { title: "Risen Titan" },
    ],
    rows: [
      {
        label: "Efficiency",
        values: [
          { text: "22.3%" },
          { text: "22.8%" },
          { text: "22.5%" },
          { text: "22.4%" },
          { text: "22.0%" },
        ],
      },
      {
        label: "Temp Coeff",
        values: [
          { text: "-0.29%/°C" },
          { text: "-0.26%/°C" },
          { text: "-0.28%/°C" },
          { text: "-0.30%/°C" },
          { text: "-0.30%/°C" },
        ],
      },
      {
        label: "Degradation",
        values: [
          { text: "0.40%/yr" },
          { text: "0.35%/yr" },
          { text: "0.40%/yr" },
          { text: "0.40%/yr" },
          { text: "0.40%/yr" },
        ],
      },
      {
        label: "Warranty",
        values: [
          { text: "25 yr product · 30 yr performance" },
          { text: "25 yr product · 30 yr performance" },
          { text: "25 yr product · 30 yr performance" },
          { text: "25 yr product · 30 yr performance" },
          { text: "25 yr product · 30 yr performance" },
        ],
      },
    ],
  },
  {
    __component: "battery-brands.quick-way" as const,
    title: "A Quick Way To Narrow The Field",
    subtitle: "Use This As A Starting Point — Not A Final Answer. Our Team Refines The Recommendation With Your Site-Specific Details At The Quote Stage.",
    sectionHeader: "If You... → We'd Likely Recommend...",
    recommendations: [
      { condition: "You Own Or Plan To Buy A Tesla EV", recommendation: "Tesla Powerwall 3 (Native Ecosystem)" },
      { condition: "You Own Or Plan To Buy A Non-Tesla EV", recommendation: "Sigenergy SigenStor (DC EV Charger, V2H Ready)" },
      { condition: "You Want Whole-Home Backup With Zero Transition Time", recommendation: "Tesla Powerwall 3 Or Sigenergy" },
      { condition: "You Want To Start Small And Scale", recommendation: "BYD, Alpha ESS, iStore, Or Anker" },
      { condition: "You Already Run Home Assistant", recommendation: "Sigenergy (Native) Or Alpha ESS (Native)" },
      { condition: "You Have A Goodwe Inverter Already", recommendation: "Goodwe Lynx Home" },
      { condition: "You Have A Sungrow Inverter Already", recommendation: "BYD Battery-Box" },
      { condition: "Installation Space Is Tight", recommendation: "iStore (Slim) | BYD (Min Profile)" },
      { condition: "You Want Brand Familiarity And Consumer UX", recommendation: "Anker Solix" },
      { condition: "You Want Maximum Inverter Flexibility", recommendation: "BYD (Inverter-Agnostic)" },
    ],
    image: null,
    imageAlt: "Solar panels on a roof at sunset",
  },
  {
    __component: "battery-brands.cec-approved" as const,
    title: 'What "CEC Approved" And "Supported Solutions List" Actually Mean',
    description: "Two different lists — both matter for different reasons. Short version:",
    cards: [
      {
        title: "What This Means For You",
        description: "When we quote a battery, it will be on both lists. If you're researching a brand not on our page, check both lists before committing. Scheme eligibility hinges on it.",
      },
      {
        title: "CEC Approved Battery List",
        description: "Maintained by the Clean Energy Council. A battery must be CEC-approved to be installed by a CEC-accredited installer, which is a prerequisite for the Federal Cheaper Home Batteries Program rebate. All 7 brands on this page are CEC-approved.",
      },
      {
        title: "Synergy / Horizon Power Supported Solutions List",
        description: "Maintained by the WA electricity retailers. A battery must appear on the SSL (for your retailer) to qualify for the WA residential battery scheme rebate. All 7 brands on this page are on the relevant SSL — but specific models vary, so we confirm the exact product eligibility at quote stage.",
      },
      {
        title: "Why The Two Lists Aren't Identical",
        description: "CEC approval is a safety and performance standard. SSL inclusion adds WA-specific requirements around VPP compatibility, data protocol and network integration. A battery can be CEC-approved but not on a WA SSL — common for newer brands still working through state qualification.",
      },
    ],
  },
  {
    __component: "battery-brands.why-our-installer" as const,
    title: "Why Our Installer \nCertifications Matter",
    subtitle: "Installing These Brands Well Isn't Plug-And-Play. Several Of Them Require Installer Certifications Beyond General CEC Accreditation. Here's What We Hold:",
    certifications: [
      { title: "Tesla Certified Installer — Direct Tesla Training And Authorisation For Powerwall Installations" },
      { title: "Sigenergy Pro Partner — Authorised Sigenergy Installer And Field Support" },
      { title: "BYD Authorised — Recognised BYD Battery Installer" },
      { title: "IStore Authorised Installer — Warranty-Backed IStore Installations" },
      { title: "CEC Approved Retailer — Clean Energy Council's Highest Retailer Accreditation" },
      { title: "SAA-Accredited (Solar Accreditation Australia) — Required For WA Residential Battery Scheme" },
    ],
    whyMattersTitle: "Why This Matters:",
    whyMattersDescription: "When a brand audits an installer's work, uncertified installs can void the manufacturer warranty. Every install we do is performed by an installer holding the relevant brand certifications — protecting your warranty on day one and every day after.",
    image: null,
    imageAlt: "Solar panels installed on a roof facing the sun",
  },
  {
    __component: "shared.faq" as const,
    title: "FAQ",
    sectionTitle: "Entries",
    listTitle: "Frequently Asked Questions",
    image: null,
    items: [
      {
        question: "How long do home solar batteries last?",
        answer: "Most modern home batteries are designed to last between 10 and 15 years. They typically come with a 10-year manufacturer warranty guaranteeing about 70-80% of their initial capacity after a decade of daily usage.",
      },
      {
        question: "What is Depth of Discharge (DoD)?",
        answer: "Depth of discharge refers to the percentage of the battery's capacity that can be safely used without damaging the cells. High-quality LFP batteries like Tesla and iStore support 100% DoD, meaning you can use their full capacity.",
      },
      {
        question: "Which battery brand is best for going off-grid?",
        answer: "For off-grid applications, modular batteries with high-peak output capabilities like BYD Premium, or heavy-duty systems like Sigenergy SigenStor, are highly recommended because they allow you to customize capacity and handle large surge currents.",
      },
      {
        question: "Are there government rebates available for battery installation in Perth?",
        answer: "Yes. Western Australian residents can stack federal incentives (Cheaper Home Batteries Program) with state-level rebates (WA Residential Battery Scheme) for a combined saving of up to $7,500 on a 10 kWh battery.",
      },
      {
        question: "How do I choose the right battery capacity for my home?",
        answer: "The right size depends on your household energy consumption overnight and your solar generation. A standard 4-person household in Perth usually finds a capacity of 10 kWh to 13.5 kWh provides the best balance of cost and utility.",
      },
    ],
  },
  {
    __component: "shared.cta-banner" as const,
    subtitle: "Pick your brand, get a quote,",
    mainTitle: "claim your rebate",
    description: "Tell us which brand you're leaning towards (or we'll help you choose) and we'll put together a personalised quote with your rebate already applied.",
    buttonText: "get my free quote",
    buttonLink: "#",
    backgroundImage: null,
  },
];
