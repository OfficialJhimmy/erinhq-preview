export interface HeroSlide {
  id: string;
  label: string;
  image: string;
  alt: string;
}

// PLACEHOLDER images throughout, should be AI-generated mock imagery
// per the brief, not real photos pulled from Instagram. This list uses
// Rotii's actual five confirmed services; the section brief's own
// carousel list (which swapped Pedicure for an unconfirmed "Facial")
// was reconciled back to the real, confirmed set.
export const heroSlides: HeroSlide[] = [
  {
    id: "hair",
    label: "Hair",
    image: "/images/rotii-salon/booking-hair.jpg",
    alt: "An editorial hair styling look at Rotii Salon & Spa",
  },
  {
    id: "nails",
    label: "Nails",
    image: "/images/rotii-salon/rotti-nails.jpeg",
    alt: "A luxury manicure at Rotii Salon & Spa",
  },
  {
    id: "lashes",
    label: "Lashes",
    image: "/images/rotii-salon/category-lashes.jpg",
    alt: "A finished lash set at Rotii Salon & Spa",
  },
  {
    id: "pedicure",
    label: "Pedicure",
    image: "/images/rotii-salon/category-pedicure.jpg",
    alt: "A luxury pedicure treatment at Rotii Salon & Spa",
  },
  {
    id: "spa",
    label: "Spa",
    image: "/images/rotii-salon/category-spa.jpg",
    alt: "A spa treatment room at Rotii Salon & Spa",
  },
];