export interface PriceItem {
  name: string;
  description: string;
  duration: string;
  price: string;
}

export interface PriceCategory {
  id: string;
  label: string;
  subtitle: string;
  badge?: string;
  image: string;
  imageAlt: string;
  items: PriceItem[];
}

// ILLUSTRATIVE PLACEHOLDER CONTENT ONLY. Prices, durations, and the
// short descriptive lines under each treatment were invented at the
// client's own explicit request as stand-ins for this mockup. None of
// it came from Spick & Span, and it needs to be replaced with real
// pricing and copy before this ships as anything other than a preview.
export const priceCategories: PriceCategory[] = [
  {
    id: "hair",
    label: "Hair",
    subtitle: "The Complete Collection",
    badge: "Most Requested",
    image: "/images/rotii-salon/booking-hair.jpg",
    imageAlt: "A finished luxury hairstyle at Rotii Beauty Studio",
    items: [
      { name: "Classic Blowout", description: "Sleek. Bouncy. Timeless.", duration: "60 mins", price: "₦15,000" },
      { name: "Silk Press", description: "Silky smooth with lasting shine.", duration: "90 mins", price: "₦25,000" },
      { name: "Braided Updo", description: "Elegant styles for every occasion.", duration: "90 mins", price: "₦20,000" },
      { name: "Weave Install", description: "Flawless finish. Natural look.", duration: "120 mins", price: "₦35,000" },
      { name: "Natural Hair Styling", description: "Worked with, not against, your texture.", duration: "75 mins", price: "₦18,000" },
      { name: "Special Occasion Style", description: "Camera-ready, hours-long hold.", duration: "90 mins", price: "₦30,000" },
      { name: "Bridal Styling", description: "The one day it has to be right.", duration: "120 mins", price: "₦45,000" },
    ],
  },

  {
    id: "nails",
    label: "Nails",
    subtitle: "Hands, Considered",
    image: "/images/rotii-salon/rotti-nails.jpeg",
    imageAlt: "A luxury manicure close-up at Rotii Beauty Studio",
    items: [
      { name: "Classic Manicure", description: "Clean, simple, well done.", duration: "40 mins", price: "₦10,000" },
      { name: "Gel Manicure", description: "Glossy finish that holds.", duration: "50 mins", price: "₦15,000" },
      { name: "Nail Art (per hand)", description: "A small, deliberate detail.", duration: "30 mins", price: "₦8,000" },
      { name: "Acrylic Extension", description: "Length and shape, done properly.", duration: "75 mins", price: "₦25,000" },
      { name: "Nail Repair", description: "One nail, fixed properly.", duration: "20 mins", price: "₦5,000" },
      { name: "Polish Change", description: "A quick refresh.", duration: "20 mins", price: "₦4,000" },
    ],
  },
  {
    id: "lashes",
    label: "Lashes",
    subtitle: "Framed, Properly",
    image: "/images/spick-and-span/service-lashes.jpg",
    imageAlt: "A close-up beauty portrait showing finished lash work at Rotii Beauty Studio",
    items: [
      { name: "Classic Lash Set", description: "Natural, everyday definition.", duration: "60 mins", price: "₦20,000" },
      { name: "Hybrid Lash Set", description: "A little more texture, still soft.", duration: "75 mins", price: "₦25,000" },
      { name: "Volume Lash Set", description: "Full, dramatic, still light on the eye.", duration: "90 mins", price: "₦30,000" },
      { name: "Lash Fill", description: "Keep the set looking fresh.", duration: "45 mins", price: "₦12,000" },
      { name: "Lash Removal", description: "Clean removal, no damage.", duration: "20 mins", price: "₦5,000" },
    ],
  },
  {
    id: "massage",
    label: "Massage",
    subtitle: "A Proper Pause",
    image: "/images/spick-and-span/service-massage.jpg",
    imageAlt: "Spa stones in a massage treatment room at Rotii Beauty Studio",
    items: [
      { name: "Swedish Massage", description: "Slow, steady, deeply relaxing.", duration: "60 mins", price: "₦25,000" },
      { name: "Deep Tissue Massage", description: "For the knots that need real work.", duration: "60 mins", price: "₦30,000" },
      { name: "Hot Stone Massage", description: "Warmth that reaches deeper.", duration: "75 mins", price: "₦35,000" },
      { name: "Back, Neck & Shoulder", description: "Targeted relief where it counts.", duration: "30 mins", price: "₦15,000" },
      { name: "Foot Massage", description: "An underrated kind of reset.", duration: "30 mins", price: "₦12,000" },
    ],
  },
  {
    id: "pedicure",
    label: "Pedicure",
    subtitle: "Feet, Properly Cared For",
    image: "/images/spick-and-span/service-pedicure.jpeg",
    imageAlt: "A luxury foot spa pedicure treatment at Rotii Beauty Studio",
    items: [
      { name: "Classic Pedicure", description: "Clean, simple, well done.", duration: "40 mins", price: "₦12,000" },
      { name: "Gel Pedicure", description: "Glossy finish that holds.", duration: "50 mins", price: "₦18,000" },
      { name: "Spa Pedicure", description: "The slower, fuller treatment.", duration: "60 mins", price: "₦22,000" },
      { name: "Callus Treatment", description: "Targeted, thorough care.", duration: "30 mins", price: "₦8,000" },
    ],
  },
];