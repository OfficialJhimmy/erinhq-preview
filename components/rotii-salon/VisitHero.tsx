"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import FloatingStudioCard from "./FloatingStudioCard";

export default function VisitHero() {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? false : { opacity: 0, y: 24 };

  return (
    <div className="grid lg:grid-cols-2 lg:items-stretch">
      <div className="flex flex-col justify-center px-6 py-16 md:px-16 lg:py-24">
        <motion.p
          initial={initial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-rotii-sans text-xs uppercase tracking-[0.25em] text-rotii-rosewood"
        >
          Visit the Studio
        </motion.p>

        <motion.h2
          initial={initial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-5 max-w-md font-rotii-display text-4xl leading-tight text-rotii-ink md:text-5xl"
        >
          A space designed for <span className="italic text-rotii-rosewood">beauty</span>,{" "}
          <span className="italic text-rotii-rosewood">wellness</span>, and{" "}
          <span className="italic text-rotii-rosewood">quiet</span> moments.
        </motion.h2>

        <motion.p
          initial={initial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-sm font-rotii-sans text-rotii-ink/60"
        >
          Experience personalised beauty inside our carefully curated
          studio in the heart of Lekki.
        </motion.p>
      </div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="group relative min-h-[360px] overflow-hidden lg:min-h-[650px]"
      >
        <Image
          src="/images/rotii-salon/location-hero-studio.png"
          alt="The Rotii Salon & Spa reception and lounge area"
          fill
          className="object-cover transition-all duration-700 group-hover:brightness-105"
        />
        <FloatingStudioCard />
      </motion.div>
    </div>
  );
}