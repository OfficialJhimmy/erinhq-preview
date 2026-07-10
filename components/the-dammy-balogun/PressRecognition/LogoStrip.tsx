"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { PressArticle } from "./PressRecognition";

type LogoStripProps = { articles: PressArticle[] };

export default function LogoStrip({ articles }: LogoStripProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.nav initial={reduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} aria-label="Press publications" className="mt-16 border-t border-damilola-graphite/10 pt-9">
      <ul className="flex flex-wrap items-center justify-between gap-x-12 gap-y-8">
        {articles.map((article) => <li key={article.publication}><a href={article.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${article.publication}`} className="group relative block pb-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-damilola-bronze-light"><Image src={article.logo} alt={article.publication} width={90} height={34} className="h-7 w-auto max-w-[120px] object-contain grayscale opacity-60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:grayscale-0 group-hover:opacity-100" /><span aria-hidden="true" className="absolute bottom-0 left-0 h-px w-0 bg-damilola-bronze-light transition-all duration-300 group-hover:w-full" /></a></li>)}
      </ul>
    </motion.nav>
  );
}
