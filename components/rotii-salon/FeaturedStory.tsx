"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import ReadingTime from "./ReadingTime";
import type { Article } from "./blogData";

export default function FeaturedStory({ story }: { story: Article }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href="#"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative block overflow-hidden rounded-[24px]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/10]">
        <Image
          src={story.image}
          alt={story.alt}
          fill
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="absolute bottom-6 left-6 right-6 max-w-md rounded-2xl bg-white/95 p-6 backdrop-blur-sm md:right-auto">
        <p className="font-rotii-sans text-xs font-medium uppercase tracking-widest text-rotii-rosewood">
          {story.category}
        </p>
        <h3 className="mt-2 font-rotii-display text-2xl leading-snug text-rotii-ink transition-transform duration-300 group-hover:-translate-y-1 md:text-3xl">
          {story.title}
        </h3>
        {story.excerpt && (
          <p className="mt-2 font-rotii-sans text-sm text-rotii-ink/55">{story.excerpt}</p>
        )}

        <div className="mt-4 flex items-center justify-between">
          <ReadingTime time={story.readTime} />
          <span className="flex items-center gap-1.5 font-rotii-sans text-xs font-medium uppercase tracking-wide text-rotii-rosewood">
            Read Story
            <span className="relative flex items-center">
              <span className="h-px w-6 bg-rotii-rosewood/50 transition-all duration-500 group-hover:w-10 group-hover:bg-rotii-rosewood" />
              <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </span>
          </span>
        </div>
      </div>
    </motion.a>
  );
}