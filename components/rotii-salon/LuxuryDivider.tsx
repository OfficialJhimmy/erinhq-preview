"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function LuxuryDivider() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="mx-auto max-w-6xl px-6 md:px-16">
      <motion.div
        initial={prefersReducedMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
        className="h-px w-full bg-rotii-rosewood/25"
      />
    </div>
  );
}