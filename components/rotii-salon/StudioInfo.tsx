"use client";

import { motion, useReducedMotion } from "framer-motion";
import ContactMethods from "./ContactMethods";
import OpeningHours from "./OpeningHours";
import { address } from "./locationData";

const MAPS_QUERY = "Rotii%20Salon%20%26%20Spa%2C%202A%20Hakeem%20Dickson%2C%20Lekki%20Phase%201%2C%20Lagos";
const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

export default function StudioInfo() {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? false : { opacity: 0, y: 24 };

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-16">
      <div className="grid gap-12 sm:grid-cols-3">
        <motion.div
          initial={initial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-rotii-sans text-xs uppercase tracking-widest text-rotii-rosewood">
            Our Location
          </p>
          <div className="mt-5 flex gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-rotii-rosewood/25 text-rotii-rosewood">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z" stroke="currentColor" strokeWidth="1.4" fill="none" />
                <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
              </svg>
            </span>
            <p className="font-rotii-sans text-sm leading-relaxed text-rotii-ink/80">
              {address.line1}
              <br />
              {address.line2}
              <br />
              {address.line3}
            </p>
          </div>

          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 inline-flex items-center gap-1.5 font-rotii-sans text-sm text-rotii-rosewood"
          >
            Open in Google Maps
            <span className="relative flex items-center">
              <span className="h-px w-5 bg-rotii-rosewood/50 transition-all duration-500 group-hover:w-8 group-hover:bg-rotii-rosewood" />
              <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={initial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <ContactMethods />
        </motion.div>

        <motion.div
          initial={initial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <OpeningHours />
        </motion.div>
      </div>
    </div>
  );
}