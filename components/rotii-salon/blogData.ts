export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt?: string;
  readTime: string;
  image: string;
  alt: string;
}

// PLACEHOLDER images throughout, AI-generated mock imagery per the
// brief, not real photos. Categories include Skincare and Wellness as
// general journal topics, not additions to Rotii's five confirmed
// bookable services (Hair, Nails, Lashes, Pedicure, Spa).

export const featuredStory: Article = {
  slug: "ritual-of-healthy-hair",
  category: "Hair",
  title: "The Ritual of Healthy Hair",
  excerpt:
    "Why slowing down, using the right products, and professional care creates better results that last.",
  readTime: "7 min read",
  image: "/images/rotii-salon/strong-hair.jpg",
  alt: "An editorial portrait for The Ritual of Healthy Hair",
};

export const editorialList: Article[] = [
  {
    slug: "secret-to-healthy-nails",
    category: "Nails",
    title: "The Secret to Healthy Nails",
    readTime: "3 min read",
    image: "/images/rotii-salon/manicure.jpg",
    alt: "Editorial image for The Secret to Healthy Nails",
  },
  {
    slug: "why-professional-facials-matter",
    category: "Skincare",
    title: "Why Professional Facials Matter",
    readTime: "5 min read",
    image: "/images/rotii-salon/journal-list-skincare.jpg",
    alt: "Editorial image for Why Professional Facials Matter",
  },
  {
    slug: "how-often-visit-spa",
    category: "Spa",
    title: "How Often Should You Visit a Spa?",
    readTime: "6 min read",
    image: "/images/rotii-salon/journal-list-spa.jpg",
    alt: "Editorial image for How Often Should You Visit a Spa",
  },
  {
    slug: "lash-aftercare-tips",
    category: "Lashes",
    title: "Lash Aftercare Tips for Longer-Lasting Results",
    readTime: "4 min read",
    image: "/images/rotii-salon/journal-list-lashes.jpg",
    alt: "Editorial image for Lash Aftercare Tips",
  },
];

export const magazineGrid: (Article & { size: "large" | "medium" | "small" })[] = [
  {
    slug: "benefits-of-regular-facials",
    category: "Skincare",
    title: "The Benefits of Regular Facials",
    readTime: "5 min read",
    image: "/images/rotii-salon/journal-list-skincare.jpg",
    alt: "Editorial image for The Benefits of Regular Facials",
    size: "large",
  },
  {
    slug: "power-of-rest-and-renewal",
    category: "Wellness",
    title: "The Power of Rest and Renewal",
    readTime: "8 min read",
    image: "/images/rotii-salon/journal-list-spa.jpg",
    alt: "Editorial image for The Power of Rest and Renewal",
    size: "large",
  },
  {
    slug: "pedicure-benefits-beyond-aesthetics",
    category: "Pedicure",
    title: "Pedicure Benefits Beyond Aesthetics",
    readTime: "6 min read",
    image: "/images/rotii-salon/rotti-nails.jpeg",
    alt: "Editorial image for Pedicure Benefits Beyond Aesthetics",
    size: "large",
  },
  {
    slug: "maintain-salon-fresh-hair-at-home",
    category: "Hair",
    title: "How to Maintain Salon-Fresh Hair at Home",
    readTime: "6 min read",
    image: "/images/rotii-salon/hair-take-down.jpg",
    alt: "Editorial image for How to Maintain Salon-Fresh Hair at Home",
    size: "medium",
  },
  {
    slug: "secret-to-strong-healthy-nails",
    category: "Nails",
    title: "The Secret to Strong, Healthy Nails",
    readTime: "4 min read",
    image: "/images/rotii-salon/nails.jpg",
    alt: "Editorial image for The Secret to Strong, Healthy Nails",
    size: "small",
  },
  {
    slug: "building-a-skincare-routine",
    category: "Skincare",
    title: "Building a Skincare Routine That Actually Works",
    readTime: "7 min read",
    image: "/images/rotii-salon/journal-grid-routine.jpg",
    alt: "Editorial image for Building a Skincare Routine That Actually Works",
    size: "small",
  },
];