"use client";

import { motion, useReducedMotion } from "framer-motion";

type SectionHeaderProps = {
  description: string;
};

export default function SectionHeader({ description }: SectionHeaderProps) {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 } };

  return (
    <div className="grid gap-9 lg:grid-cols-[1.35fr_0.8fr] lg:items-end lg:gap-20">
      <motion.div {...reveal} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: "easeOut" }}>
        <p className="mb-6 flex items-center gap-3 font-damilola-sans text-[11px] font-medium uppercase tracking-[0.2em] text-damilola-gold-dark dark:text-damilola-gold-dark">
          Global Stages <span aria-hidden="true" className="h-px w-12 bg-damilola-gold-dark/70" />
        </p>
        <h2 className="max-w-[680px] font-damilola-display text-[53px] font-normal leading-[0.94] tracking-[-0.05em] text-[#1b1a18] dark:text-[#f5f0e8] sm:text-[66px] lg:text-[72px]">
          Conversations<br />That Shape<br />
          <em className="font-damilola-display font-normal text-damilola-bronze-light dark:text-damilola-gold-dark">Tomorrow.</em>
        </h2>
      </motion.div>
      <motion.p {...reveal} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }} className="max-w-[370px] font-damilola-sans text-[15px] leading-[1.75] text-[#1b1a18]/70 dark:text-[#f5f0e8]/75">
        {description}
      </motion.p>
    </div>
  );
}
