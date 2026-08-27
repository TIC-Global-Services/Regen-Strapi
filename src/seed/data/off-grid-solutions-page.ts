export const offGridSolutionsSections = [
  {
    __component: "off-grid.hero" as const,
    subtitle: "Off-Grid Power, Engineered For",
    mainTitle: "Remote Western Australia",
    description:
      "With over 20 years of experience, we design and install off-grid power systems for remote homes, farms, mining sites, and more across Australia and globally. Our HybridGEN technology powers sites across Asia. If grid access is limited or unreliable, our engineering team can help you find the right solution.",
    ctaText: "Talk To Our Team",
    ctaLink: "#quote-form",
    backgroundImage: null,
  },
  {
    __component: "commercial-systems.stats-card-grid" as const,
    subtitle: "When The Grid Stops",
    title: "Your Costs Start",
    description:
      "In Western Australia, many areas lie beyond reliable grid access. Connecting can cost $30k\u2013$200k per km, while running diesel generators is expensive and inefficient. Standard solar alone often isn\u2019t enough for harsh conditions\u2014making well-designed off-grid renewable systems a smarter, more reliable solution.",
    cardBackground: null,
    stats: [
      { value: "$30k-\n$200k/KM", label: "Grid Extension" },
      { value: "$55k-\n$100k/YR", label: "Standard\nDiesel Cost" },
      { value: "90\nPercent+", label: "Renewable Share\nPossible" },
    ],
  },
  {
    __component: "off-grid.solutions-portfolio" as const,
    subtitle: "Four Segments.",
    title: "Four Different Specifications.",
    description:
      "Off-grid systems are sized to the customer. A weekender shed needs different engineering to a mining camp. Pick the segment that fits your site to see how we scope and design.",
    cards: [
      {
        type: "text",
        variant: "light-gray",
        title: "Remote Homes &\nLifestyle Blocks",
        description:
          "Off-grid family homes, weekenders, lifestyle properties beyond the SWIS, granny flats, sheds and live-in studios",
        specs:
          "10\u201320kW solar + 30\u201360kWh storage + 5\u201310kVA backup generator. Stand-alone solar+battery",
        image: null,
      },
      {
        type: "image",
        variant: "light-green",
        title: "",
        description: "",
        specs: "",
        image: null,
      },
      {
        type: "text",
        variant: "light-gray",
        title: "Farms, Stations &\nAgribusiness",
        description:
          "Sheep, cattle, cropping, dairy, marron, vineyard. Bore pumps, packing sheds, freezers, electric fences, EV charging.",
        specs:
          "30\u2013100kW solar + 60\u2013200kWh storage + diesel/gas hybrid generator. HybridGEN-pack or full microgrid",
        image: null,
      },
      {
        type: "text",
        variant: "light-gray",
        title: "Mining, Telecom &\nResorts",
        description:
          "Exploration camps, communications towers, tourist lodges, remote workshops. Often three-phase, often modular.",
        specs:
          "Containerised microgrid 15\u2013150kW. Solar-wind-diesel hybrid. Multi-source generation, multi-day battery autonomy.",
        image: null,
      },
      {
        type: "text",
        variant: "dark",
        title: "Remote Communities\n& Infrastructure",
        description:
          "Villages, schools, medical centres, water plants, irrigation, sewage. Often paired with our AcquaSmart water-treatment system.",
        specs:
          "Custom microgrid + AcquaSmart water solution where applicable. International experience across India, Indonesia, Maldives, Vietnam, Sri Lanka.",
        image: null,
      },
      {
        type: "image",
        variant: "light-green",
        title: "",
        description: "",
        specs: "",
        image: null,
      },
    ],
  },
  {
    __component: "off-grid.three-solutions-section" as const,
    subtitle: "Three Engineered Solutions",
    title: "One Design Principle",
    description:
      "Across every off-grid project, our design principle is the same: maximum renewable share, minimum lifetime cost, real reliability. Three product platforms make that possible — pick the one that fits the segment, and we engineer to your site.",
    solutions: [
      {
        title: "Standalone Solar + Battery",
        description:
          "Solar PV + lithium battery + small backup generator. The straightforward off-grid solution for homes and small commercial sites. Remote homes, lifestyle blocks, holiday properties, small workshops, weekenders.",
        image: null,
        ctaText: "Learn More",
        ctaHref: "#",
      },
      {
        title: "HybridGEN: Patented Hybrid Power Pack",
        description:
          "A factory-integrated system combining solar, optional wind, battery storage, and a variable-speed generator—delivering far better efficiency than traditional diesel setups. Farms, stations, agribusiness, telecom towers, irrigation, treatment plants — wherever a diesel generator is currently the primary power source.",
        image: null,
        ctaText: "Learn More",
        ctaHref: "#",
      },
      {
        title: "Solar-Wind-Diesel Microgrid",
        description:
          "Containerised, portable microgrid system (15kW to 150kW per container); multi-container designs available. Multi-source generation; multi-day battery autonomy; remote monitoring. Mining and exploration camps, resorts, remote communities, fringe-of-grid commercial sites, and international projects.",
        image: null,
        ctaText: "Learn More",
        ctaHref: "#",
      },
    ],
  },
  {
    __component: "off-grid.icon-card-grid" as const,
    subtitle: "The Straightforward",
    title: "Off-Grid Solution",
    description:
      "For most remote homes, the ideal setup is simple: a well-sized solar system, lithium batteries with multi-day backup, and a small generator used only when needed. We design based on your usage, use premium components, and plan for worst-case conditions—so the generator runs only a few times a year.",
    layout: 4,
    showHeader: true,
    cards: [
      {
        title: "Tier 1 - Cabin",
        description:
          "Workshops, sheds, micro-homes, studios, weekenders",
        specs:
          "5kW solar \u00b7 10-15kWh battery \u00b7 small AC inverter \u00b7 optional 3kVA generator",
        icon: null,
        variant: "default",
      },
      {
        title: "Tier 2 - Holiday & Energy-Efficient Homes",
        description:
          "Holiday homes, small efficient homes",
        specs:
          "8kW solar \u00b7 20-30kWh battery \u00b7 hybrid inverter \u00b7 5kVA generator",
        icon: null,
        variant: "default",
      },
      {
        title: "Tier 3 - Family Home / Small Farm",
        description:
          "Standard 3-4 bedroom homes, small farms, small businesses",
        specs:
          "12-18kW solar \u00b7 40-60kWh battery \u00b7 Selectronic inverter-charger \u00b7 8kVA generator",
        icon: null,
        variant: "default",
      },
      {
        title: "Tier 4 - Large Home / Community Precinct",
        description:
          "Large homes, community living, large farms",
        specs:
          "20-30kW solar \u00b7 80-120kWh battery \u00b7 multi-phase Selectronic \u00b7 12-15kVA generator",
        icon: null,
        variant: "default",
      },
    ],
  },
  {
    __component: "off-grid.hybrid-gen-detail" as const,
    logo: null,
    image: null,
    subtitle: "HybridGEN - Patented Hybrid",
    title: "Power Pack",
    description: "HybridGEN is Regen's own renewable hybrid power pack — a factory-wired cabinet that combines solar PV, optional small wind, lithium battery storage, and our patented variable-speed generator. It replaces a standard fixed-speed diesel generator with a system that runs the engine only when it's needed, only at its most efficient speed, and only after the renewables have done their job.\n\nThe result: 30–60% reduction in diesel consumption versus a conventional diesel system, longer engine life from running at optimum load, stable voltage and frequency across varying solar and wind input, and a system that ships in a fully wired enclosure — drop in, connect, and run.",
    patentText: "International patent: PCT/AU2011/001068",
  },
  {
    __component: "shared.editorial-section" as const,
    subtitle: "Why Standard Diesel Fails",
    title: "On A Part-Load Site",
    align: "left",
    paragraphs: [
      {
        text: "Diesel generators are typically sized to peak demand. But for most remote sites, peak demand happens for a few hours a day — most of the time the engine is loafing at 20–40% of its rated capacity. At low load, three things go wrong: fuel efficiency drops sharply (more litres per kWh produced);",
        isSecondary: false,
      },
      {
        text: " Incomplete combustion causes wet stacking and cylinder glazing (engine wears out faster); and voltage and frequency become unstable as renewable inputs vary. HybridGEN’s variable-speed generator runs the engine at the speed that matches the current load — extending engine life, cutting fuel consumption by 30–60%, and stabilising power quality even when solar and wind inputs swing.",
        isSecondary: true,
      },
    ],
  },
  {
    __component: "off-grid.world-map" as const,
    title: "International Deployments",
    markers: [
      { name: "India", top: "47%", left: "67%" },
      { name: "Vietnam", top: "47%", left: "78%" },
      { name: "Sri Lanka", top: "55%", left: "68%" },
      { name: "Maldives", top: "53%", left: "62%" },
      { name: "Singapore", top: "58%", left: "75%" },
      { name: "Indonesia", top: "67%", left: "79%" },
      { name: "Australia", top: "80%", left: "85%" },
    ],
  },
  {
    __component: "off-grid.microgrid-spec-table" as const,
    headers: {
      col1: "Field",
      col2: "Detail",
    },
    tableContent: [
      { value: "Power Output", description: "15kW to 150kW per container, scalable beyond 1MW" },
      { value: "Voltage", description: "400V three-phase, 50Hz" },
      { value: "Battery Storage", description: "60\u2013300kWh lithium iron phosphate (LFP), expandable" },
      { value: "Solar Input", description: "Up to 200kW PV per container, Tier-1 panels" },
      { value: "Wind Input", description: "Up to 10kW optional small wind generator" },
      { value: "Backup Generator", description: "Variable-speed diesel/gas (HybridGEN patented control)" },
      { value: "Container", description: "20ft or 40ft ISO, fully weather-sealed, cyclone-rated" },
      { value: "Operating Temp", description: "\u221220\u00b0C to +55\u00b0C" },
      { value: "Monitoring", description: "Real-time web + mobile dashboard, remote diagnostics" },
      { value: "Autonomy", description: "Multi-day battery autonomy depending on load profile" },
    ],
  },
  {
    __component: "shared.editorial-section" as const,
    subtitle: "When A Single Power Pack Isn\u2019t Enough",
    title: "A Microgrid That Travels With You.",
    align: "left",
    paragraphs: [
      {
        text: "For mining, resorts, remote communities, and fringe-of-grid sites, Regen delivers containerised microgrids from 15kW to 150kW per container,",
        isSecondary: false,
      },
      {
        text: " Scalable beyond 1MW. Combining solar PV, optional wind, lithium battery storage, and patented hybrid control, they’re built for harsh conditions and proven across Australia, the Maldives, Singapore, and Sri Lanka.",
        isSecondary: true,
      },
    ],
  },
  {
    __component: "off-grid.acqua-smart-section" as const,
    subtitle: "Clean Drinking Water For Remote Communities",
    title: "Powered By HybridGEN.",
    description:
      "AcquaSmart is Regen’s trailer-mounted water treatment solution for remote locations, combining HybridGEN renewable power with reverse osmosis, UV and ozone sterilisation, and real-time monitoring. Built for villages, rural communities, and off-grid sites, it delivers WHO-standard drinking water wherever it’s needed.",
    image: null,
    cards: [
      {
        title: "Power Source",
        description:
          "Regen HybridGEN — solar PV, optional small wind, optional micro-hydro, variable-speed generator backup",
      },
      {
        title: "Pre-Treatment",
        description:
          "Driving pump, source water tank, source water pump, quartz sand filter, activated carbon filter, softener, fine filter",
      },
      {
        title: "Reverse Osmosis",
        description:
          "Semi-permeable helix membrane; removes 96%+ dissolved solids, 99%+ organic matter, 99%+ colloidal matter, ~100% bacteria; stainless inlet/outlet pipes; flow rate up to 15m³/hr",
      },
      {
        title: "Sterilisation",
        description:
          "UV tube + ozone actuator (Venturi ejector mixing); inactivates E. coli, cholera, typhoid, dysentery, hepatitis pathogens; removes iron, manganese, sulphur",
      },
      {
        title: "Control",
        description:
          "Fully automatic PLC + touchscreen + network communication; remote monitoring; safety protection on every pump and valve",
      },
      {
        title: "Form Factor",
        description:
          "Trailer-mounted, towable by pickup; fully self-contained",
      },
      {
        title: "Best For",
        description:
          "Remote villages without piped water; dispersed rural households; communities failing piped-water standards; off-grid sites combining power + water",
      },
      {
        title: "Source Water",
        description:
          "Rivers, lakes, floods, broken water mains, most freshwater sources",
      },
    ],
  },
  {
    __component: "off-grid.off-grid-story" as const,
    subtitle: "An Off-Grid Story",
    title: "You Can Verify",
    description: "Off-grid systems are bought on trust. The site is remote, the buyer can't always inspect the work, and a system failure 800km from Perth is expensive. Here's how we earn that trust — verifiable, documented, decades-long.",
    cards: [
      { title: "International Patent", description: "PCT/AU2011/001068 — power management system and method for optimising fuel consumption. Inventor: Prof Chem Nayar (Regen Technologies Pty Ltd). Filed in Australia, granted internationally.", variant: "highlighted" },
      { title: "Academic + Industry Founder", description: "Prof Chem Nayar — decades of renewable energy research and engineering. Academic background combined with hands-on industry deployment across remote sites.", variant: "light" },
      { title: "International Patent", description: "PCT/AU2011/001068 — power management system and method for optimising fuel consumption. Inventor: Prof Chem Nayar (Regen Technologies Pty Ltd). Filed in Australia, granted internationally.", variant: "highlighted" },
      { title: "Academic + Industry Founder", description: "Regen Technologies combines academic rigor with field-proven engineering. Every off-grid system is backed by peer-reviewed research and decades of deployment data.", variant: "light" },
    ],
    featuredImage: null,
    featuredTitle: "Prof Chem Nayar",
    featuredDescription: "Founder & chief technology officer — pioneer in renewable energy systems and inventor of Regen's patented HybridGEN technology, driving decades of innovation in sustainable off-grid power.",
  },
  {
    __component: "off-grid.icon-card-grid" as const,
    layout: 4,
    showHeader: false,
    cards: [
      {
        title: "International Patent",
        description:
          "PCT/AU2011/001068 — power management system and method for optimising fuel consumption. Inventor: Prof Chem Nayar (Regen Technologies Pty Ltd). Filed in Australia, granted internationally.",
        icon: null,
        variant: "highlighted",
      },
      {
        title: "Academic + Industry Founder",
        description:
          "Prof Chem Nayar — decades of renewable energy research and engineering. Academic background combined with hands-on industry deployment across remote sites.",
        icon: null,
        variant: "light",
      },
      {
        title: "International Patent",
        description:
          "PCT/AU2011/001068 — power management system and method for optimising fuel consumption. Inventor: Prof Chem Nayar (Regen Technologies Pty Ltd). Filed in Australia, granted internationally.",
        icon: null,
        variant: "highlighted",
      },
      {
        title: "Academic + Industry Founder",
        description:
          "Regen Technologies combines academic rigor with field-proven engineering. Every off-grid system is backed by peer-reviewed research and decades of deployment data.",
        icon: null,
        variant: "light",
      },
    ],
  },
  {
    __component: "off-grid.overlay-card-grid" as const,
    subtitle: "Six Steps",
    title: "Every Step In House",
    description:
      "Off-grid projects are engineering jobs more than installation jobs. We run a six-step process from first call to handover. The early steps are deliberately heavy: getting the site analysis and the load profile right is what makes the system reliable for the next 20 years.",
    backgroundImage: null,
    cardLayout: "grid",
    cardColumns: 3,
    overlayOpacity: 70,
    cards: [
      {
        title: "Discovery & Load Analysis",
        description:
          "Site location, access, climate band, intended loads, expected growth, generator history. We size by worst-week-of-winter, not by annual average.",
      },
      {
        title: "Site Survey",
        description:
          "On-site visit (or detailed remote survey for international jobs). Photos, GPS, soil and mounting assessment, shading, wind regime, source-water if AcquaSmart is in scope.",
      },
      {
        title: "System Design",
        description:
          "In-house engineering. Solar sizing, design, battery sizing, generator sizing, control system, monitoring, plus piping and water-treatment design where AcquaSmart is included.",
      },
      {
        title: "Procurement & Factory Wiring",
        description:
          "We pre-wire HybridGEN packs and microgrid containers in our Perth facility. Cuts on-site time, cuts site-risk, and means the unit arrives ready to commission.",
      },
      {
        title: "Delivery, Install, Commissioning",
        description:
          "Transport to site (truck for WA, container shipping for international), on-site mechanical install + electrical termination + start-up testing.",
      },
      {
        title: "Handover & Remote Support",
        description:
          "App + dashboard walkthrough; performance baseline; remote monitoring activated; maintenance contracts available — particularly important for sites without local trades support.",
      },
    ],
  },
  {
    __component: "shared.faq" as const,
    title: "FAQ",
    sectionTitle: "Entries",
    listTitle: "Off-Grid FAQs",
    image: null,
    items: [
      {
        question: "Q1. How much does an off-grid system cost?",
        answer:
          "Off-grid systems vary widely based on your energy needs, site conditions, and chosen components. A small cabin system starts around $15k–$25k, while a full home system with HybridGEN can range $50k–$200k+. We size to your actual load profile, not generic estimates.",
      },
      {
        question: "Q2. Is off-grid cheaper than connecting to the grid?",
        answer:
          "Often, yes. Western Power’s quoted cost to extend a line to a remote property is typically $30,000–$200,000 per kilometre. If your nearest line is more than a few kilometres away, an off-grid system is usually cheaper to install — and you have no power bills, no demand charges, and no exposure to grid outages thereafter.",
      },
      {
        question: "Q3. Will I still need a diesel generator if I go off-grid?",
        answer:
          "Most off-grid systems include a backup generator for extended low-renewable periods. With our HybridGEN variable-speed generator, it only runs when needed and at the most efficient speed — typically a few times a year rather than daily.",
      },
      {
        question: "Q4. What about cyclones, dust storms, and extreme weather?",
        answer:
          "Regen systems are engineered for remote WA conditions — cyclone-rated mounting, dust-sealed enclosures, and battery chemistries suited to high temperatures. We design for the worst week your site has seen in 20 years, not the average day.",
      },
      {
        question: "Q5. Can my off-grid system run a 3-phase load?",
        answer:
          "Yes. We routinely design three-phase systems for mining camps, workshops, irrigation pumps, and large homes. Our engineers size the inverter and battery bank to handle the starting currents of motors and heavy equipment.",
      },
      {
        question: "Q6. What about Western Power’s free stand-alone power system (SPS) program?",
        answer:
          "Western Power’s SPS program supplies a basic system to eligible properties at no cost. If you need more capacity, three-phase, or want to own your system outright, a Regen off-grid system is usually a better long-term fit. We can advise on the trade-offs.",
      },
    ],
  },
  {
    __component: "off-grid.off-grid-form" as const,
    subtitle: "Talk To Our Remote Area",
    title: "Engineering Team",
    description:
      "Off-grid projects are engineering jobs. The first conversation is technical, not transactional — load profile, site context, generator history, growth plans, water needs if any. Once we understand the problem, we come back with a system that solves it. Send us a brief site overview using the form, or call our remote-area team direct on 1800 073 436.",
    image: null,
  },
];
