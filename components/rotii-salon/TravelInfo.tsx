"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { travelEstimates } from "./locationData";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TravelInfo() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <p className="font-rotii-sans text-xs uppercase tracking-widest text-rotii-rosewood">
        Getting Here
      </p>

      <motion.div
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={container}
        className="mt-5 divide-y divide-rotii-ink/10"
      >
        {travelEstimates.map((estimate) => (
          <motion.div key={estimate.from} variants={item} className="flex items-center gap-3 py-3.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-rotii-rosewood/25 text-rotii-rosewood">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="10" width="18" height="7" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none" />
                <circle cx="7.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
                <circle cx="16.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
                <path d="M5 10l2-4h10l2 4" stroke="currentColor" strokeWidth="1.4" fill="none" />
              </svg>
            </span>
            <div>
              <p className="font-rotii-sans text-sm font-medium text-rotii-ink">{estimate.time}</p>
              <p className="font-rotii-sans text-xs text-rotii-ink/50">From {estimate.from}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}