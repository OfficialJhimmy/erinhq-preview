"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function PullQuote() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.blockquote initial={reduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }} className="mt-10 border-l border-damilola-bronze-light/60 py-2 pl-7">
      <span aria-hidden="true" className="block h-6 font-damilola-display text-[72px] leading-none text-damilola-bronze-light/70">&ldquo;</span>
      <p className="max-w-[420px] font-damilola-display text-[28px] italic leading-[1.15] tracking-[-0.03em] text-damilola-graphite">Recognition follows consistent impact.</p>
      <footer className="mt-5 font-damilola-sans text-[10px] font-medium uppercase tracking-[0.18em] text-damilola-graphite/45">A body of work, not a moment</footer>
    </motion.blockquote>
  );
}
