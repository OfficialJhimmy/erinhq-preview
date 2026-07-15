"use client";

import { useReducedMotion } from "framer-motion";

const amenities = [
  "Private Suites",
  "Award Winning Stylists",
  "Complimentary Refreshments",
  "Luxury Products",
  "Personal Consultation",
];

const looped = [...amenities, ...amenities];

export default function BottomStrip() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="overflow-hidden border-t border-rotii-rosewood/15 bg-rotii-blush/20 py-4">
      <div
        className={`flex w-max gap-3 whitespace-nowrap ${
          prefersReducedMotion ? "" : "animate-marquee"
        }`}
      >
        {looped.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-3 font-rotii-sans text-xs uppercase tracking-widest text-rotii-ink/60"
          >
            {item}
            <span className="text-rotii-rosewood">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}