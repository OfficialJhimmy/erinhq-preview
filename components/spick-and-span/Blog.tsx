"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import BlogCard from "./BlogCard";
import { posts } from "./blogData";

const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export default function Blog() {
  const prefersReducedMotion = useReducedMotion();
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.id !== featured.id);

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-spicknspan-bg px-6 py-24 md:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-spicknspan-sans text-sm uppercase tracking-[0.25em] text-spicknspan-oxblood">
            Journal
          </p>
          <h2 className="mt-4 max-w-lg font-spicknspan-display text-4xl text-spicknspan-dark md:text-5xl">
            Haircare &amp; Wellness, Explained Properly
          </h2>
          <p className="mt-4 max-w-lg font-spicknspan-sans text-spicknspan-dark/60">
            Practical guidance from the studio, not generic advice
            copied from somewhere else.
          </p>
        </motion.div>

        <motion.a
          href="https://instagram.com/spicknspan_beauty_studio"
          target="_blank"
          rel="noopener noreferrer"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="group mt-14 grid gap-8 md:grid-cols-2 md:items-center"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-spicknspan-cream md:aspect-[3/4]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
          <div>
            <p className="font-spicknspan-sans text-xs uppercase tracking-widest text-spicknspan-oxblood">
              {featured.category} · {featured.readTime}
            </p>
            <h3 className="mt-3 font-spicknspan-display text-3xl leading-tight text-spicknspan-dark transition-colors group-hover:text-spicknspan-oxblood md:text-4xl">
              {featured.title}
            </h3>
            <p className="mt-4 max-w-md font-spicknspan-sans text-spicknspan-dark/65">
              {featured.excerpt}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 font-spicknspan-sans text-sm font-medium text-spicknspan-dark/70 transition-colors group-hover:text-spicknspan-oxblood">
              Read on Instagram
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </motion.a>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {rest.map((post, i) => (
            <motion.div
              key={post.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}