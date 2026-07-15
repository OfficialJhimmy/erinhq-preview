"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function EditorialQuote() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20 text-center md:px-16 md:py-28">
      <motion.p
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-rotii-display text-3xl leading-snug text-rotii-ink/45 md:text-4xl"
      >
        Luxury begins <span className="italic">the moment</span>
        <br />
        you slow down.
      </motion.p>
    </div>
  );
}