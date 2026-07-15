"use client";

import { motion, useReducedMotion } from "framer-motion";
import BackgroundTypography from "./BackgroundTypography";

export default function JournalHeader() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto max-w-2xl px-6 pb-16 text-center md:px-16">
      <BackgroundTypography />

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <p className="font-rotii-sans text-xs uppercase tracking-[0.3em] text-rotii-rosewood">
          Editorial
        </p>
        <h2 className="mt-3 font-rotii-display text-5xl text-rotii-ink md:text-6xl">
          The Journal
        </h2>
        <p className="mt-4 font-rotii-sans text-sm text-rotii-ink/55">
          Stories, rituals and timeless beauty, crafted to inspire every
          visit.
        </p>
      </motion.div>
    </div>
  );
}