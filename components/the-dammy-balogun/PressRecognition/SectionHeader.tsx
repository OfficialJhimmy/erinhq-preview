"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function SectionHeader() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="grid gap-9 lg:grid-cols-[1.25fr_0.7fr] lg:items-end lg:gap-24">
      <motion.div initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.65, ease: "easeOut" }}>
        <p className="mb-6 font-damilola-sans text-[10px] font-medium uppercase tracking-[0.4em] text-damilola-bronze-light">Press &amp; Recognition</p>
        <h2 id="press-heading" className="font-damilola-display text-[52px] leading-[0.95] tracking-[-0.05em] text-damilola-graphite sm:text-[64px] lg:text-[70px]">
          When Impact<br />Gets <em className="font-normal text-damilola-bronze-light">Noticed.</em>
        </h2>
      </motion.div>
      <motion.p initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }} className="max-w-[380px] font-damilola-sans text-[15px] leading-[1.7] text-damilola-graphite/65">
        Damilola&apos;s work has been recognised by respected publications covering entrepreneurship, sustainability and social impact.
      </motion.p>
    </div>
  );
}
