"use client";

import { motion, useReducedMotion } from "framer-motion";

const MAPS_QUERY = "Rotii%20Salon%20%26%20Spa%2C%202A%20Hakeem%20Dickson%2C%20Lekki%20Phase%201%2C%20Lagos";
const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

export default function MapPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative aspect-[4/3] overflow-hidden rounded-[24px] bg-rotii-blush/15 sm:aspect-[16/10]"
    >
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
        <svg viewBox="0 0 400 260" className="h-full w-full text-rotii-ink/10">
          <line x1="0" y1="60" x2="400" y2="90" stroke="currentColor" strokeWidth="3" />
          <line x1="0" y1="180" x2="400" y2="150" stroke="currentColor" strokeWidth="3" />
          <line x1="80" y1="0" x2="120" y2="260" stroke="currentColor" strokeWidth="3" />
          <line x1="280" y1="0" x2="320" y2="260" stroke="currentColor" strokeWidth="3" />
        </svg>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.span
          animate={prefersReducedMotion ? {} : { scale: [1, 1.15, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-rotii-rosewood text-white shadow-lg"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z" fill="white" />
          </svg>
        </motion.span>
      </div>

      <a
        href={MAPS_DIRECTIONS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-rotii-ink px-5 py-2.5 font-rotii-sans text-xs font-medium uppercase tracking-wide text-white"
      >
        Open in Maps →
      </a>
    </motion.div>
  );
}