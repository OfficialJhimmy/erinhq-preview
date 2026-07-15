"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import ReadingTime from "./ReadingTime";
import type { Article } from "./blogData";

const aspectBySize = {
  large: "aspect-[3/4]",
  medium: "aspect-[4/3]",
  small: "aspect-[16/11]",
};

export default function MagazineCard({
  article,
  index,
}: {
  article: Article & { size: "large" | "medium" | "small" };
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href="#"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="group block"
    >
      <div className={`relative overflow-hidden rounded-2xl ${aspectBySize[article.size]}`}>
        <Image
          src={article.image}
          alt={article.alt}
          fill
          className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-105"
        />
        <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white/95 px-4 py-3 backdrop-blur-sm">
          <p className="font-rotii-sans text-[10px] font-medium uppercase tracking-widest text-rotii-rosewood">
            {article.category}
          </p>
          <p className="mt-1 font-rotii-display text-base leading-snug text-rotii-ink">
            {article.title}
          </p>
          <div className="mt-1.5 flex items-center justify-between">
            <ReadingTime time={article.readTime} />
            <span className="text-rotii-rosewood transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}