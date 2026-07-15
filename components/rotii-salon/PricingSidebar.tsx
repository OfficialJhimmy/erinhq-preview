"use client";

import { motion, useReducedMotion } from "framer-motion";
import PricingCategoryNav from "./PricingCategoryNav";

export default function PricingSidebar({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="font-spicknspan-sans text-xs uppercase tracking-[0.25em] text-spicknspan-oxblood">
          Pricing
        </p>
        <h2 className="mt-4 font-rotii-display text-6xl leading-[1.05] text-spicknspan-dark md:text-7xl">
          Luxury,
          <br />
          without
          <br />
          guesswork.
        </h2>
      </motion.div>

      <motion.p
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="mt-6 max-w-xs font-spicknspan-sans text-sm leading-relaxed text-spicknspan-dark/60"
      >
        Every appointment includes consultation, professional care, and
        premium products.
      </motion.p>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="mt-10 hidden border-t border-spicknspan-dark/10 pt-8 lg:block"
      >
        <PricingCategoryNav activeId={activeId} onSelect={onSelect} />
      </motion.div>

      <div className="mt-10 flex items-start gap-4 border-t border-spicknspan-dark/10 pt-8">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-spicknspan-champagne/60 text-spicknspan-oxblood">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 8l8 5 8-5M4 8v8a1 1 0 001 1h14a1 1 0 001-1V8M4 8a1 1 0 011-1h14a1 1 0 011 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div>
          <p className="font-spicknspan-sans text-sm font-medium text-spicknspan-dark">
            Need something bespoke?
          </p>
          <p className="mt-1 font-spicknspan-sans text-sm text-spicknspan-dark/55">
            Private packages, group bookings and custom treatments are
            available.
          </p>
          <a
            href="#contact"
            className="mt-2 inline-flex items-center gap-1 font-spicknspan-sans text-sm font-medium text-spicknspan-oxblood hover:underline"
          >
            Talk to our concierge →
          </a>
        </div>
      </div>
    </div>
  );
}