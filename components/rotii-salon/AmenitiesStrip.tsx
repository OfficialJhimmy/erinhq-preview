"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { amenities } from "./locationData";

const icons: Record<string, React.ReactNode> = {
  "Private Parking": (
    <>
      <rect x="3" y="10" width="18" height="7" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <circle cx="7.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <circle cx="16.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
    </>
  ),
  "Complimentary Refreshments": (
    <path d="M6 3h12l-1.5 12a2 2 0 01-2 1.8H9.5a2 2 0 01-2-1.8L6 3zM8 21h8" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
  ),
  "Wheelchair Accessible": (
    <>
      <circle cx="9" cy="5" r="1.6" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M9 8v5l5 2M9 13H6a3 3 0 000 6 3 3 0 003-2.4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </>
  ),
  "Free Wi-Fi": (
    <>
      <path d="M4 9a12 12 0 0116 0M7 12.5a7.5 7.5 0 0110 0" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <circle cx="12" cy="17" r="1.2" fill="currentColor" />
    </>
  ),
  "Luxury Products": (
    <path d="M12 4c-3 3-6 5-6 9a6 6 0 0012 0c0-4-3-6-6-9z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
  ),
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function AmenitiesStrip() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="border-t border-rotii-rosewood/15 bg-rotii-blush/10 py-10">
      <motion.div
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={container}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-6 sm:grid-cols-3 md:grid-cols-5 md:px-16"
      >
        {amenities.map((amenity) => (
          <motion.div key={amenity} variants={item} className="flex flex-col items-center gap-2 text-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-rotii-rosewood/25 text-rotii-rosewood">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                {icons[amenity]}
              </svg>
            </span>
            <p className="font-rotii-sans text-xs font-medium uppercase tracking-wide text-rotii-ink">
              {amenity}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}