"use client";

import { motion, useReducedMotion } from "framer-motion";

const items = [
  "Private Suites",
  "Dedicated Stylists",
  "Complimentary Refreshments",
  "Luxury Hair & Skin Products",
];

export default function FloatingStudioCard() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-8 left-8 max-w-[260px] rounded-2xl border border-white/40 bg-white/30 p-5 backdrop-blur-md"
    >
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="font-rotii-sans text-sm text-rotii-ink">
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}