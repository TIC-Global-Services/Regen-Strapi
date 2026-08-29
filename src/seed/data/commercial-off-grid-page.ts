export const commercialOffGridSections = [
  {
    __component: "commercial-off-grid.hero" as const,
    subtitle: "Powering Business",
    mainTitle: "Anywhere",
    description:
      "Scalable solar and hybrid energy solutions designed to reduce operational costs, increase efficiency, and ensure uninterrupted power.",
    ctaText: "Request Consultation",
    ctaLink: "#quote-form",
    backgroundImage: null,
  },
  {
    __component: "shared.editorial-section" as const,
    subtitle: "Energy That Works",
    title: "For Business",
    align: "left",
    paragraphs: [
      {
        text: "From large-scale commercial rooftops to complex off-grid environments, our solar solutions are thoughtfully engineered to deliver reliable performance, energy independence, and long-term cost savings. Every system is tailored to the specific operational needs of your business,",
        isSecondary: false,
      },
      {
        text: "Ensuring maximum efficiency and return on investment. By combining advanced solar technology, high-quality components, and intelligent system design, we create scalable energy solutions that help businesses reduce operating costs, improve sustainability, and achieve greater control over their energy future.",
        isSecondary: true,
      },
    ],
  },
  {
    __component: "commercial-off-grid.solutions-portfolio" as const,
    subtitle: "Solutions For",
    title: "Every Business Size",
    description:
      "From small business rooftops to large-scale industrial ground-mounts, we design systems that match your energy profile and business objectives.",
    layout: 6,
    cards: [
      {
        type: "text",
        variant: "light-gray",
        title: "Small Business\n10\u201339kW DC",
        description:
          "Streamlined Western Power approval, maximum STC benefit, 2\u20133 year payback.",
        specs: "39kW DC \u00b7 30kVA inverter \u00b7 optional 30\u201360kWh battery",
        image: null,
      },
      {
        type: "text",
        variant: "light-gray",
        title: "Mid-Market\n50\u2013100kW DC",
        description:
          "Full engineering study + GPU, economies of scale, sub-3-year payback typical.",
        specs: "50\u2013100kW DC \u00b7 three-phase hybrid inverters \u00b7 STC upfront discount",
        image: null,
      },
      {
        type: "text",
        variant: "dark",
        title: "Large Commercial\n150kW\u20131MW+",
        description:
          "LGC revenue stream, PPA structures, custom ground-mount or rooftop solutions.",
        specs: "150kW\u20131MW+ \u00b7 multi-inverter \u00b7 LGC accreditation ongoing revenue",
        image: null,
      },
      {
        type: "text",
        variant: "light-gray",
        title: "Off-Grid\nRemote Sites",
        description:
          "HybridGEN power packs, containerised microgrids, solar-wind-diesel hybrid systems.",
        specs: "15\u2013150kW per container \u00b7 multi-day battery autonomy \u00b7 remote monitoring",
        image: null,
      },
      {
        type: "text",
        variant: "light-gray",
        title: "HybridGEN\nPatented Power Pack",
        description:
          "Factory-integrated solar + battery + variable-speed generator for maximum efficiency.",
        specs: "30\u201360% fuel savings \u00b7 international patent \u00b7 Australia & Asia deployments",
        image: null,
      },
      {
        type: "text",
        variant: "light-gray",
        title: "EV Charging\n& Fleet",
        description:
          "Solar-tied EV charging infrastructure for commercial fleets and public facilities.",
        specs: "AC & DC chargers \u00b7 battery-buffered \u00b7 VPP-ready",
        image: null,
      },
    ],
  },
  {
    __component: "shared.cta-banner" as const,
    subtitle: "Build Your",
    mainTitle: "Energy Strategy",
    description:
      "System size depends on your energy usage, roof space, and future needs. Our experts design systems that balance performance and cost for optimal ROI.",
    buttonText: "Get Started",
    buttonLink: "#quote-form",
    backgroundImage: null,
  },
  {
    __component: "shared.form-section" as const,
    subtitle: null,
    title: null,
    description: null,
    image: null,
    video: null,
  },
];
