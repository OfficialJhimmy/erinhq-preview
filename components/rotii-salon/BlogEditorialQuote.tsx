"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function BlogEditorialQuote() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative my-4 grid overflow-hidden md:grid-cols-2">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center bg-rotii-blush/15 px-6 py-16 md:px-16"
      >
        <div>
          <span className="font-rotii-display text-4xl text-rotii-rosewood/40">&ldquo;</span>
          <p className="mt-2 font-rotii-display text-4xl leading-tight text-rotii-ink md:text-5xl">
            Beauty begins
            <br />
            <span className="italic">with intention.</span>
          </p>
          <span className="mt-5 block h-px w-12 bg-rotii-rosewood" />
        </div>
      </motion.div>

      <div className="relative min-h-[280px]">
        <Image
          src="/images/rotii-salon/journal-quote-lifestyle.jpg"
          alt="A still-life beauty composition"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}