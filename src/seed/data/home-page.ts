export const homeSections = [
  {
    __component: "home.hero" as const,
    subtitle: "Step Into the",
    title: "Future of Energy",
    description:
      "WA's #1 rated solar installer with 45,000+ installations since 2003.\nCEC-approved. ProductReview Award Winner 2021–2026.",
    buttonText: "Get Started",
    buttonLink: "/contact",
    mediaType: "image",
    showOverlay: true,
  },

  {
    __component: "home.awards" as const,
    title: "Awards & Recognition",
    logos: [
      { title: "Australian Technologies", image: [] },
      { title: "Fast 100 2020", image: [] },
      { title: "EUPD Research", image: [] },
      { title: "Financial Times", image: [] },
      { title: "Belmont Awards", image: [] },
    ],
  },

  {
    __component: "home.whychooseus" as const,
    subtitle: "Why Choose",
    title: "Regen Power",
    awardWinnerCount: 6,
    awardWinnerTitle: "Product Review Award\nWinner",
    batteryInstallationsCount: 3000,
    batteryInstallationsLabel: "Battery Installations",
    solarInstallationsCount: 45000,
    solarInstallationsLabel: "Solar Installations",
    yearsInBusinessCount: 23,
    yearsInBusinessDescription:
      "In Business, Operating From \n Canning Vale Office",
    ratingScore: 5,
    ratingPlatformLabel: "Ratings On\nProductReview",
  },

  {
    __component: "home.expertise" as const,
    subtitle: "Our Energy",
    accentTitle: "Expertise",
    items: [
      {
        title: "Residential Solar\n& Storage",
        textColor: "text-black",
      },
      {
        title: "Battery Storage\n& Smart Home",
        textColor: "text-black",
      },
      {
        title: "Commercial\n& Off-Grid",
        textColor: "text-black",
      },
      {
        title: "Electric Vehicle\nCharging",
        textColor: "text-black",
      },
    ],
  },

  {
    __component: "home.solarandstorage" as const,
    titleNormal: "The Science Of",
    titleAccent: "Solar & Storage",
    features: [
      {
        number: "01",
        title: "Capture Energy From The Sun",
        description:
          "High-Efficiency Solar Panels Installed On Your Roof Absorb Sunlight Throughout The Day And Convert It Into Direct Current (DC) Electricity, Creating Clean And Renewable Energy For Your Home.",
      },
      {
        number: "02",
        title: "Store Excess Power for Night",
        description:
          "Premium battery storage systems capture surplus solar generation during the day, giving you reliable power after sunset and complete blackout protection.",
      },
      {
        number: "03",
        title: "Smart Home Integration",
        description:
          "Monitor and manage your household energy consumption in real-time, directing power to smart appliances and living areas for maximum efficiency.",
      },
      {
        number: "04",
        title: "Fast EV Charging",
        description:
          "Charge your electric vehicle directly from your solar panels or stored battery power, driving on pure sunshine with zero emissions.",
      },
      {
        number: "05",
        title: "Intelligent Power Grid Connection",
        description:
          "Feed excess energy back to the Perth grid to earn feed-in tariffs, or draw from the grid seamlessly when solar and battery storage are depleted.",
      },
    ],
  },

  {
    __component: "home.patnersandmembership" as const,
    subtitle: "Trusted Relationships",
    title: "Partners & Memberships",
    partnersTitle: "Partners",
    partners: [
      { name: "Tesla Energy Certified Installer" },
      { name: "iStore Premium Partner" },
    ],
    membershipsTitle: "Memberships",
    memberships: [
      { name: "Smart Energy Council" },
      { name: "Clean Energy Council Member" },
      { name: "Approved Seller" },
    ],
  },

  {
    __component: "home.threewaystopay" as const,
    subtitle: "Smart Solar Savings &",
    title: "Zero-Interest Financing",
    description: "",
    cards: [
      {
        title: "Federal STC Rebate",
        description:
          "Receive Thousands Off Your Solar System Through The Federal Government's Small-Scale Technology Certificate (STC) Scheme. Applied As An Upfront Discount At Point Of Sale.",
      },
      {
        title: "WA Battery Rebate",
        description:
          "Up To $1,300 Rebate For Eligible WA Households Installing A Battery System Under The Distributed Energy Buyback Scheme (DEBS) Battery Program.",
      },
      {
        title: "Interest-Free Loan Up To $10,000",
        description:
          "Through The WA Battery Rebate, Eligible Synergy Customers Can Access An Interest-Free Loan Of Up To $10,000 Repayable Over 10 Years.",
        ctaText: "Check Your Eligibility",
      },
    ],
  },

  {
    __component: "home.craftmanship" as const,
    subtitle: "Industry-Leading Brands &",
    title: "Craftsmanship",
    defaultTabId: "panels",
    categories: [
      {
        label: "Inverters",
        logos: [
          { name: "AIKO" },
          { name: "Canadian Solar" },
          { name: "JA Solar" },
          { name: "Jinko Solar" },
          { name: "LONGi" },
        ],
      },
      {
        label: "Panels",
        logos: [
          { name: "AIKO" },
          { name: "Canadian Solar" },
          { name: "JA Solar" },
          { name: "Jinko Solar" },
          { name: "LONGi" },
          { name: "Trina Solar" },
          { name: "Risen" },
        ],
      },
      {
        label: "Battery Storage",
        logos: [
          { name: "Canadian Solar" },
          { name: "JA Solar" },
          { name: "LONGi" },
          { name: "Trina Solar" },
        ],
      },
      {
        label: "EV Charger",
        logos: [
          { name: "Jinko Solar" },
          { name: "Risen" },
          { name: "LONGi" },
        ],
      },
    ],
  },

  {
    __component: "home.real-stories" as const,
    subtitle: "Real Stories.",
    title: "Real Results.",
    badges: [
      {
        alt: "Google Rating 4.9 stars based on 1,385+ reviews",
      },
      {
        alt: "Best Rated Solar Installer — #1 Most Popular Western Australia 2026",
      },
      {
        alt: "Top Rated Solar Panel Installers",
      },
      {
        alt: "Top Rated Installers — Western Australia",
      },
    ],
    reviews: [
      {
        title: "10kW Solar + Battery System",
        review:
          "The Entire Process Was Smooth From Consultation To Installation. Our Power Bills Dropped Almost Immediately, And The Team Kept Us Informed Every Step Of The Way.",
        author: "Sarah",
        location: "Perth",
        rating: 5,
      },
      {
        title: "10kW Solar + Battery System",
        review:
          "The Entire Process Was Smooth From Consultation To Installation. Our Power Bills Dropped Almost Immediately, And The Team Kept Us Informed Every Step Of The Way.",
        author: "Sarah",
        location: "Perth",
        rating: 5,
      },
      {
        title: "10kW Solar + Battery System",
        review:
          "The Entire Process Was Smooth From Consultation To Installation. Our Power Bills Dropped Almost Immediately, And The Team Kept Us Informed Every Step Of The Way.",
        author: "Sarah",
        location: "Perth",
        rating: 5,
      },
      {
        title: "6.6kW Solar Panel System",
        review:
          "Outstanding service from start to finish. The team was professional, punctual and the quality of the installation exceeded our expectations.",
        author: "James",
        location: "Joondalup",
        rating: 5,
      },
      {
        title: "13.2kW Commercial Solar",
        review:
          "Best decision we made for our business. Energy costs cut in half and the ROI was faster than projected.",
        author: "Michelle",
        location: "Fremantle",
        rating: 5,
      },
    ],
  },

  {
    __component: "home.smartsolar" as const,
    topSubtitle: "Explore Our",
    title: "Latest news & insights",
    cards: [
      {
        title: "STC Upfront Discount",
        description:
          "Federal STC And WA Rebate Values Are Deducted Directly From Your Quoted Price. You Pay The Post-Rebate Balance.",
        textPosition: "top",
        footerTitle: "Best For",
        footerDescription: "Any installation — applied by default.",
      },
      {
        title: "Plenti No-Interest Loan",
        description:
          "WA-Funded No-Interest Loan From $2,001 To $10,000. Flexible 3–10 Year Terms, No Early Repayment Fees.",
        textPosition: "top",
        footerTitle: "Best For",
        footerDescription: "Any installation — applied by default.",
      },
      {
        title: "Third-Party Finance",
        description:
          "We Can Refer You To Accredited Green-Loan Providers For Larger Systems Or Commercial Installations.",
        textPosition: "top",
        footerTitle: "Best For",
        footerDescription: "Any installation — applied by default.",
      },
    ],
  },

  {
    __component: "home.battery-quote" as const,
    subtitle: "Get Your Free Solar &",
    title: "Battery Quote",
    description:
      "Our technical sales team will design a system tailored to your home, usage, and budget. Most quotes delivered within 24 hours.",
  },
];
