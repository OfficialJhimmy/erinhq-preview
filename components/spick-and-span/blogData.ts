export interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  // PLACEHOLDER: one cover image per post
  image: string;
  featured?: boolean;
}

export const posts: BlogPost[] = [
  {
    id: "haircare-essentials",
    category: "Haircare",
    title: "4 Essential Items Needed in Your Haircare Routine",
    excerpt:
      "A good routine does not need to be complicated. These four essentials cover the basics that keep hair healthy between salon visits, no matter your texture.",
    readTime: "3 min read",
    image: "/images/spick-and-span/hair-essential.jpg",
    featured: true,
  },
  {
    id: "massage-benefits",
    category: "Wellness",
    title: "The Real Benefits of a Good Massage",
    excerpt:
      "Beyond simply relaxing, regular massage can ease tension, improve circulation, and give you a genuine reset, not just a treat, a habit worth keeping.",
    readTime: "4 min read",
    image: "/images/spick-and-span/massage.jpg",
  },
  {
    id: "braids-take-down",
    category: "Haircare",
    title: "Signs It Is Time to Take Down Your Braids",
    excerpt:
      "Braids can look great for weeks, but holding on too long can do more harm than good. Here is what to actually watch for before it becomes a problem.",
    readTime: "3 min read",
    image: "/images/spick-and-span/hair-take-down.jpg",
  },
  {
    id: "strong-healthy-hair",
    category: "Haircare",
    title: "Simple Tips for Strong, Healthy Hair",
    excerpt:
      "No gimmicks, just the small, consistent habits that actually make a difference over time, from how you handle wet hair to how often you trim.",
    readTime: "4 min read",
    image: "/images/spick-and-span/strong-hair.jpg",
  },
];