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
    title: "Contact Us",
    description:
      "Have a question, need a quote, or want to discuss your project? Fill in the form and our team will get back to you shortly.",
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
];
