"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { PressArticle } from "./PressRecognition";

type PublicationCardProps = { article: PressArticle; index: number };

export default function PublicationCard({ article, index }: PublicationCardProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.08 }} className={`group flex flex-col rounded-[22px] border border-damilola-graphite/10 bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-damilola-bronze-light/60 hover:shadow-[0_18px_38px_rgba(0,0,0,0.07)] ${index === 1 ? "lg:min-h-[230px]" : "lg:min-h-[205px]"}`}>
      <div className="flex items-center justify-between gap-5">
        <Image src={article.logo} alt={article.publication} width={70} height={30} className="h-7 w-auto max-w-[105px] object-contain grayscale opacity-75 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100" />
        <span className="font-damilola-sans text-[10px] uppercase tracking-[0.12em] text-damilola-graphite/45">{article.year}</span>
      </div>
      <p className="mt-5 font-damilola-sans text-[10px] font-medium uppercase tracking-[0.14em] text-damilola-bronze-light">{article.category}</p>
      <h3 className="mt-3 font-damilola-display text-[23px] leading-[1.15] tracking-[-0.025em] text-damilola-graphite">{article.headline}</h3>
      <a href={article.url} target="_blank" rel="noopener noreferrer" aria-label={`Read ${article.publication} coverage: ${article.headline}`} className="mt-auto inline-flex items-center gap-2 pt-5 font-damilola-sans text-[12px] font-medium text-damilola-graphite/70 transition-colors hover:text-damilola-bronze-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-damilola-bronze-light">Read coverage <ArrowUpRight size={15} /></a>
    </motion.article>
  );
}
