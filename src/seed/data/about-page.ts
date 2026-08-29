interface Section {
  __component: string;
  [key: string]: unknown;
}

export const aboutSections: Section[] = [
  {
    __component: "about.hero",
    eyebrow: "Regen Power",
    title: "At A Glance",
    video: null,
  },
  {
    __component: "about.awards",
    cards: [
      {
        title: "Finalist - Smart Installer, Smart Energy Excellence Awards 2026",
        description: "Regen Power is proud to be recognised nationally. Finalist – Smart Installer, Smart Energy Excellence Awards 2026.",
        badge: null,
        badgeSizeClass: "h-48 w-48",
      },
      {
        title: "#1 Most Popular Solar Installer in Western Australia and\n#2 Most Popular in Australia by SunWiz Awards 2026",
        description: "Regen Power is proud to be recognised nationally. Finalist – Smart Installer, Smart Energy Excellence Awards 2026.",
        badge: null,
        badgeSizeClass: "h-64 w-72",
      },
      {
        title: "Finalist - Smart Installer, Smart Energy Excellence Awards 2026",
        description: "Regen Power is proud to be recognised nationally. Finalist – Smart Installer, Smart Energy Excellence Awards 2026.",
        badge: null,
      },
      {
        title: "ProductReview.com.au Awards Winner 2026",
        description: "Regen Power has won the ProductReview.com.au Award in the Solar Installer Category for the sixth year in a row year (2021, 2022, 2023, 2024, 2025 & 2026). The award is given to the solar company that earned the highest 5-star rating in the calendar year 2025.",
        badge: null,
      },
    ],
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
