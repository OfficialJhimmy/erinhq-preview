"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function SectionIntro() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="mx-auto max-w-2xl px-6 pb-16 text-center md:px-16 md:pb-24"
    >
      <motion.div variants={item} className="flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-rotii-rosewood" />
        <p className="font-rotii-sans text-xs uppercase tracking-[0.25em] text-rotii-rosewood">
          Our Signature Experiences
        </p>
        <span className="h-px w-8 bg-rotii-rosewood" />
      </motion.div>

      <motion.h2 variants={item} className="mt-6 font-rotii-display text-4xl leading-tight text-rotii-ink md:text-5xl">
        Crafted with precision.
      </motion.h2>
      <motion.p variants={item} className="font-rotii-display text-4xl italic leading-tight text-rotii-rosewood md:text-5xl">
        Designed around you.
      </motion.p>

      <motion.p variants={item} className="mt-6 font-rotii-sans text-rotii-ink/55">
        Every treatment is tailored to enhance your natural beauty.
      </motion.p>
    </motion.div>
  );
}