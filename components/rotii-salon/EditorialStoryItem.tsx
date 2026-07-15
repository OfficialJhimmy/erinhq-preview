"use client";

import { motion, useReducedMotion } from "framer-motion";
import ReadingTime from "./ReadingTime";
import type { Article } from "./blogData";

export default function EditorialStoryItem({
  story,
  index,
  isLast,
}: {
  story: Article;
  index: number;
  isLast: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href="#"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`group flex items-start gap-4 py-5 ${!isLast ? "border-b border-rotii-rosewood/15" : ""}`}
    >
      <span className="font-rotii-display text-2xl italic text-rotii-rosewood">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="min-w-0 flex-1">
        <p className="font-rotii-sans text-[11px] font-medium uppercase tracking-widest text-rotii-rosewood/80">
          {story.category}
        </p>
        <h4 className="mt-1 font-rotii-display text-lg leading-snug text-rotii-ink transition-transform duration-300 group-hover:-translate-y-0.5">
          {story.title}
        </h4>
        <div className="mt-2 flex items-center justify-between">
          <ReadingTime time={story.readTime} />
          <span className="text-rotii-rosewood transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </div>
      </div>
    </motion.a>
  );
}