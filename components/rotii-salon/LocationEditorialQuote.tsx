"use client";

import { motion, useReducedMotion } from "framer-motion";
import LocationBotanicalDecoration from "./LocationBotanicalDecoration";

export default function LocationEditorialQuote() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto max-w-3xl px-6 py-24 text-center md:px-16">
      <LocationBotanicalDecoration className="absolute right-0 top-0 hidden opacity-60 md:block" />

      <motion.p
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative font-rotii-display text-3xl leading-snug text-rotii-ink md:text-4xl"
      >
        The experience begins the moment
        <br />
        <span className="italic text-rotii-rosewood">you arrive.</span>
      </motion.p>
    </div>
  );
}