export interface HeroSlide {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "hair-styling",
    title: "Luxury Hair Styling",
    category: "Hairstyling",
    image: "/images/spick-and-span/service-hair-styles.jpg",
    alt: "A finished luxury hairstyle at Spick & Span Beauty Studio",
  },
  {
    id: "haircut",
    title: "Haircut Experience",
    category: "Haircuts",
    image: "/images/spick-and-span/service-haircut.jpg",
    alt: "A stylist giving a precision haircut at Spick & Span Beauty Studio",
  },
  {
    id: "nails",
    title: "Nail Studio",
    category: "Nails",
    image: "/images/spick-and-span/service-nails.jpeg",
    alt: "A luxury manicure close-up at Spick & Span Beauty Studio",
  },
  {
    id: "massage",
    title: "Massage Treatment",
    category: "Massage",
    image: "/images/spick-and-span/service-massage.jpg",
    alt: "A massage treatment room at Spick & Span Beauty Studio",
  },
  {
    id: "lashes",
    title: "Lash Extensions",
    category: "Lashes",
    image: "/images/spick-and-span/service-lashes.jpg",
    alt: "A finished lash set at Spick & Span Beauty Studio",
  },
  {
    id: "mani-pedi",
    title: "Mani-Pedi",
    category: "Mani-Pedi",
    image: "/images/spick-and-span/service-mani-pedi.jpeg",
    alt: "A combined manicure and pedicure session at Spick & Span Beauty Studio",
  },
  {
    id: "pedicure",
    title: "Pedicure Ritual",
    category: "Pedicure",
    image: "/images/spick-and-span/service-pedicure.jpeg",
    alt: "A luxury foot spa pedicure treatment at Spick & Span Beauty Studio",
  },
];