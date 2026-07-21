export const contactSections = [
  {
    __component: "contact.hero" as const,
    subtitle: "Get In Touch With",
    mainTitle: "Regen Power",
    description:
      "From Your First Enquiry To Final Installation, Our Specialists Are Here To Guide You Every Step Of The Way. Contact Us Today For A Personalised Energy Solution.",
    ctaText: "Get Your Free Quote",
    ctaLink: "#quote-form",
    backgroundImage: null,
  },
  {
    __component: "contact.contact-form-section" as const,
    subtitle: "Ready To Start Your",
    title: "Energy Journey?",
    description:
      "Fill In The Form Below And Our Team Will Get Back To You Within 24 Hours With A Free, No-Obligation Consultation.",
  },
  {
    __component: "contact.location-map" as const,
    subtitle: "Our",
    title: "Locations",
    markers: [
      { name: "Perth", top: "63%", left: "78%" },
      { name: "Brisbane", top: "70%", left: "78%" },
      { name: "Sydney", top: "70%", left: "88%" },
      { name: "Adelaide", top: "76%", left: "76%" },
      { name: "Victoria", top: "78%", left: "88%" },
    ],
  },
  {
    __component: "solar.cta-banner" as const,
    subtitle: "A Global Energy",
    mainTitle: "Footprint",
    description:
      "Our Projects Extend Across Australia, India, Malaysia, Vietnam, Singapore, And The Maldives\u2014Delivering Scalable, Future-Ready Renewable Energy Solutions Across Diverse Landscapes.",
    buttonText: "Get My Free Quote",
    backgroundImage: null,
  },
];
