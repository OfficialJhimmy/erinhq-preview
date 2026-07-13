import Image from "next/image";
import type { BlogPost } from "./blogData";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <a
      href="https://instagram.com/spicknspan_beauty_studio"
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-spicknspan-cream">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <p className="mt-4 font-spicknspan-sans text-xs uppercase tracking-widest text-spicknspan-oxblood">
        {post.category} · {post.readTime}
      </p>
      <h3 className="mt-2 font-spicknspan-display text-xl leading-snug text-spicknspan-dark transition-colors group-hover:text-spicknspan-oxblood">
        {post.title}
      </h3>
      <p className="mt-2 font-spicknspan-sans text-sm text-spicknspan-dark/60">
        {post.excerpt}
      </p>

      <span className="mt-3 inline-flex items-center gap-1.5 font-spicknspan-sans text-sm font-medium text-spicknspan-dark/70 transition-colors group-hover:text-spicknspan-oxblood">
        Read on Instagram
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </a>
  );
}