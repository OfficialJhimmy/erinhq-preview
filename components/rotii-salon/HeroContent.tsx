"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function HeroContent() {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? false : { opacity: 0, y: 16 };

  return (
    <div>
      <motion.div
        initial={initial}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-3"
      >
        <span className="h-px w-8 bg-rotii-rosewood" />
        <p className="font-rotii-sans text-xs uppercase tracking-[0.25em] text-rotii-rosewood">
          Beauty Reimagined
        </p>
      </motion.div>

      <motion.h1
        initial={initial}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="mt-5 font-rotii-display text-5xl leading-[1.15] text-rotii-ink md:text-6xl"
      >
        Where timeless beauty meets
        <br />
        <span className="italic text-rotii-rosewood">modern luxury.</span>
      </motion.h1>

      <motion.p
        initial={initial}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="mt-6 max-w-md font-rotii-sans leading-relaxed text-rotii-ink/60"
      >
        Hair. Nails. Lashes. Pedicure. Spa. Every experience is
        personalised, unhurried, and designed around you.
      </motion.p>

      <motion.div
        initial={initial}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="mt-8 flex flex-wrap gap-4"
      >
        <a
          href="#booking"
          className="inline-flex items-center gap-2 rounded-full bg-rotii-rosewood px-8 py-3.5 font-rotii-sans text-sm font-medium uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(189,118,109,0.35)]"
        >
          Reserve Your Experience
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a
          href="#services"
          className="group inline-flex items-center gap-2 rounded-full border border-rotii-rosewood/50 px-8 py-3.5 font-rotii-sans text-sm font-medium uppercase tracking-wide text-rotii-ink transition-colors hover:border-rotii-rosewood"
        >
          Discover the Studio
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </motion.div>
    </div>
  );
}