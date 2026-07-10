"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { PressArticle } from "./PressRecognition";

type FeaturedArticleProps = { article: PressArticle };

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.65, ease: "easeOut" }} className="group rounded-[32px] border border-damilola-graphite/10 bg-white p-8 shadow-[0_24px_60px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-damilola-bronze-light/65 hover:bg-[#fffefa] hover:shadow-[0_28px_65px_rgba(0,0,0,0.1)] sm:p-10">
      <div className="flex items-start justify-between gap-8">
        <Image src={article.logo} alt={article.publication} width={92} height={42} className="h-10 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0" />
        <p className="font-damilola-sans text-[10px] font-medium uppercase tracking-[0.14em] text-damilola-graphite/45">Featured story · {article.year}</p>
      </div>
      <div className="mt-16 max-w-[650px]">
        <p className="font-damilola-sans text-[11px] font-medium uppercase tracking-[0.16em] text-damilola-bronze-light">{article.category}</p>
        <h3 className="mt-5 font-damilola-display text-[35px] leading-[1.04] tracking-[-0.04em] text-damilola-graphite sm:text-[44px]">{article.headline}</h3>
        <p className="mt-6 max-w-[560px] font-damilola-sans text-[15px] leading-[1.7] text-damilola-graphite/65">{article.excerpt}</p>
      </div>
      <a href={article.url} target="_blank" rel="noopener noreferrer" aria-label={`Read ${article.publication} coverage: ${article.headline}`} className="mt-12 inline-flex items-center gap-3 font-damilola-sans text-[13px] font-medium text-damilola-graphite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-damilola-bronze-light">
        Read coverage <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </motion.article>
  );
}
