export interface ServiceEntry {
  number: string;
  title: string;
  bgWord: string;
  description: string;
  // PLACEHOLDER: AI-generated mock imagery only, per the brief, not a real photo
  image: string;
  alt: string;
}

export const services: ServiceEntry[] = [
  {
    number: "01",
    title: "Hair",
    bgWord: "HAIR",
    description:
      "Tailored styling, colour, and finishing, considered around your natural texture and the life you actually live.",
    image: "/images/rotii-salon/category-hair.jpeg",
    alt: "An editorial hair styling look at Rotii Salon & Spa",
  },
  {
    number: "02",
    title: "Nails",
    bgWord: "NAILS",
    description:
      "Manicures and nail artistry finished with real attention to detail, never rushed.",
    image: "/images/rotii-salon/category-nails.jpg",
    alt: "A luxury manicure close-up at Rotii Salon & Spa",
  },
  {
    number: "03",
    title: "Lashes",
    bgWord: "LASHES",
    description:
      "Precision lash extensions that enhance rather than overpower your natural features.",
    image: "/images/rotii-salon/category-lashes.jpg",
    alt: "A finished lash set at Rotii Salon & Spa",
  },
  {
    number: "04",
    title: "Pedicure",
    bgWord: "PEDICURE",
    description:
      "Thorough, unhurried foot care, from routine maintenance to a full restorative treatment.",
    image: "/images/rotii-salon/category-pedicure.jpg",
    alt: "A luxury pedicure treatment at Rotii Salon & Spa",
  },
  {
    number: "05",
    title: "Spa",
    bgWord: "SPA",
    description:
      "Curated treatments designed to help you properly slow down, not just relax for an hour.",
    image: "/images/rotii-salon/category-spa.jpg",
    alt: "A spa treatment room at Rotii Salon & Spa",
  },
];