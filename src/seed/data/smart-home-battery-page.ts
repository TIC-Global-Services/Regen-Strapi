export const smartHomeBatterySections = [
  {
    __component: "smart-home-battery.hero" as const,
    subtitle: "The Next Generation Of Storage",
    title: "Smart Battery Storage In Perth",
    description: "Don't just store energy. Automate it, trade it, and use it intelligently.",
    buttonText: "Get Your Free Quote",
    buttonLink: "/contact",
    backgroundImage: null,
  },
  {
    __component: "battery-storage.marquee" as const,
    items: [
      { text: "45,000+ Solar" },
      { text: "3000+ Storage Installations" },
      { text: "23 Years In Perth" },
      { text: "4.9★ Rating (Google + ProductReview)" },
    ],
  },
  {
    __component: "smart-home-battery.great-fit" as const,
    topSubtitle: "Not Every 'Smart' Battery",
    title: "Is Actually Smart",
    description: "Marketing has diluted the term. A truly smart home battery does more than show you an app with a state-of-charge graph. Here's what the category actually means in 2026.",
    goodFitTitle: "What It Has",
    goodFitItems: [
      "Grid-aware: can participate in Virtual Power Plants and respond to grid dispatch events automatically",
      "Learning: uses historical usage patterns to pre-charge, load-shift and reserve capacity for forecast outages",
      "Orchestrating: coordinates with EV chargers, hot water, pool pumps and other controllable loads — not just batteries in isolation",
      "Open: integrates with Home Assistant, Google Home, Apple Home, or exposes a documented API",
    ],
    conversationTitle: "What It Doesn't",
    conversationItems: [
      "An app that just shows you your battery level",
      "Remote on/off for a single battery unit",
      '"Smart" as a marketing label without grid or ecosystem integration',
    ],
  },
  {
    __component: "smart-home-battery.split-section" as const,
    topSubtitle: "Your Battery",
    title: "Paid To Help Power Perth",
    slides: [
      {
        mainDescription:
          "The WA State Government operates a Virtual Power Plant (VPP) program... earn up to $1.00c per kWh during peak events.",
        blocks: [
          {
            title: "How Synergy's Battery Partners Works",
            description:
              "During a few extreme heat days in summer, the grid struggles. Synergy pays you to use your battery's stored power instead.",
          },
          {
            title: "How Much Do You Earn?",
            description:
              "Participants are earning hundreds of dollars a year in credits, simply for letting the system run in the background.",
          },
          {
            title: "What You Actually Commit",
            description:
              "You always keep a reserve for your own use. The VPP only accesses surplus energy you wouldn't have used anyway.",
          },
        ],
        ctaText: "Free Battery Assessment",
        ctaLink: "/contact",
        image: null,
      },
      {
        mainDescription:
          "Join thousands of WA homeowners who are already benefiting from the Synergy Virtual Power Plant program. Your battery works for you while supporting the grid.",
        blocks: [
          {
            title: "Zero Effort Required",
            description:
              "Once enrolled, the system works completely automatically. You don't have to lift a finger when grid demand spikes.",
          },
          {
            title: "Preserving Your Lifestyle",
            description:
              "The smart system always prioritizes your home's needs. It only exports power when you have plenty to spare.",
          },
          {
            title: "A Sustainable Choice",
            description:
              "By participating, you're actively reducing Perth's reliance on fossil-fuel peaker plants during extreme heatwaves.",
          },
        ],
        ctaText: "Check Eligibility",
        ctaLink: "/contact",
        image: null,
      },
    ],
  },
  {
    __component: "smart-home-battery.timeline" as const,
    topSubtitle: "A Tuesday in Summer",
    title: "What Your Battery Does Automatically",
    events: [
      {
        time: "6:00 AM",
        title: "Battery At 15%, Receiving Morning Peak",
        description:
          "The sun is up, but the house is busy. The battery has just enough charge left from yesterday to get you through breakfast.",
      },
      {
        time: "12:00 PM",
        title: "Solar At Peak, Battery Recharging",
        description:
          "Your panels are generating maximum power. The battery is soaking up the excess so you can use it later.",
      },
      {
        time: "6:00 PM",
        title: "Grid Price Spikes, Battery Discharging",
        description:
          "Everyone gets home and turns on the AC. The grid price spikes, but you are running purely on stored solar.",
      },
      {
        time: "9:00 PM",
        title: "Powering The Evening",
        description:
          "Watching TV, running the dishwasher. The battery handles all the evening loads.",
      },
      {
        time: "12:00 AM",
        title: "Overnight Standby",
        description:
          "The house is quiet. The battery is preserving its remaining charge for the morning routine.",
      },
    ],
  },
  {
    __component: "smart-home-battery.brands-grid" as const,
    topSubtitle: "The Best Smart Home Batteries For",
    title: "Perth In 2026",
    subtitle: "Every System We Install Is Approved For The WA Rebate And VPP Capable.",
    brands: [
      {
        title: "Sigenergy SigenStor (Our Smart Home Pick)",
        specification: [
          {
            title: "Best For:",
            description:
              "Tech-Forward Homes, EV Owners, Home Assistant Users",
          },
          {
            title: "Why:",
            description:
              "Five-In-One Design (Hybrid Inverter + Battery + EV DC Charger + EMS + Gateway). Stacks From 5 KWh To 48 KWh. 25kW Bidirectional DC EV Charger Enables V2H/V2G. GPT-4 Powered MySigen Assistant. Native Home Assistant Integration.",
          },
          {
            title: "Warranty:",
            description: "10 Years On Battery And Inverter, 5 Years On Gateway",
          },
        ],
        showbutton: true,
        buttonText: "Explore Smart Home Batteries",
        buttonLink: "/brands-we-carry",
      },
      {
        title: "Tesla Powerwall 3 (The Benchmark)",
        specification: [
          {
            title: "Best For:",
            description:
              "Tesla EV Owners, Homes Valuing Industry-Leading App UX",
          },
          {
            title: "Why:",
            description:
              "13.5 KWh Usable. Integrated Solar Inverter (No Separate Hybrid Inverter Needed). Up To 10kW Continuous Backup. Tesla App Is Still The Category Benchmark. Native Integration With Tesla Wall Connector And Vehicles.",
          },
          {
            title: "Warranty:",
            description: "10 Years Product",
          },
        ],
        showbutton: true,
        buttonText: "Explore Smart Home Batteries",
        buttonLink: "/brands-we-carry",
      },
      {
        title: "BYD Battery-Box Premium (The Modular Choice)",
        specification: [
          {
            title: "Best For:",
            description:
              "Homes Wanting Modular Scalability Without Ecosystem Lock-In",
          },
          {
            title: "Why:",
            description:
              "5.1 KWh Modules Stack To 22.1 KWh Per Tower; Up To 3 Towers In Parallel. LFP Chemistry. IP55 Rated For Outdoor Install. Compatible With Most Major Hybrid Inverters (Sungrow, Fronius, SolaX) — Gives You Inverter Flexibility.",
          },
          {
            title: "Warranty:",
            description: "10 Years Product, 10 Years Performance",
          },
        ],
        showbutton: true,
        buttonText: "Explore Smart Home Batteries",
        buttonLink: "/brands-we-carry",
      },
    ],
  },
  {
    __component: "smart-home-battery.four-pillars" as const,
    subtitle: "The Four",
    title: "Pillars",
    description: "A smart home battery earns its name by doing four things exceptionally well.",
    cards: [
      {
        title: "VPP Integration",
        description: "Your battery joins Synergy's Virtual Power Plant. The grid pays you when it needs your stored energy.",
        image: null,
      },
      {
        title: "Load Shifting",
        description: "Stored solar runs your home during peak tariff hours (3–9pm), saving you ~30c per kWh vs grid electricity.",
        image: null,
      },
      {
        title: "App & Automation Control",
        description: "Real-time monitoring, rule-based automation, remote control. The phone in your pocket becomes the control panel.",
        image: null,
      },
      {
        title: "Smart Home Ecosystem",
        description: "Home Assistant, Google Home, Apple HomeKit, Tesla App, MySigen — your battery plays well with what you already use.",
        image: null,
      },
    ],
  },
  {
    __component: "smart-home-battery.install-bento" as const,
    title: "The Smart System Install — Done Properly",
    description:
      "A smart battery is a sophisticated electrical asset. It requires networking, firmware configuration, and careful load planning. We don't just bolt it to the wall.",
    blocks: [
      {
        title: "In-House Electricians, No Subcontractors",
        description:
          "We train and employ our own CEC-accredited installers. We control the quality from start to finish.",
        theme: "white",
      },
      {
        title: "Advanced Blackout Testing",
        description:
          "Every backup circuit is physically tested before we leave site. You'll know exactly what runs when the grid drops.",
        theme: "white",
      },
      {
        title: "App Setup & Handover",
        description:
          "We don't leave until the app is on your phone, connected to your Wi-Fi, and you know how to read the data.",
        theme: "white",
      },
      {
        title: "Home Automation Integration",
        description:
          "Our technical team configures the battery's API to talk to your smart EV charger or heat pump.",
        theme: "dark",
      },
      {
        title: "VPP Onboarding",
        description:
          "We handle the paperwork and configuration to get your battery enrolled in the Synergy VPP program.",
        theme: "light",
      },
    ],
  },
  {
    __component: "shared.cta-banner" as const,
    subtitle: "Ready to take control of",
    mainTitle: "Your Home's Energy?",
    description:
      "Book a free, no-obligation assessment and experience the true smart battery difference.",
    buttonText: "Get Your Free Quote",
    buttonHref: "/contact",
    backgroundImage: null,
  },
];
