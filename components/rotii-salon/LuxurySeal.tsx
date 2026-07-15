"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function LuxurySeal() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      animate={prefersReducedMotion ? {} : { rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-6 right-6 hidden h-28 w-28 items-center justify-center sm:flex"
    >
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <defs>
          <path
            id="rotii-seal-circle"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <circle cx="50" cy="50" r="47" stroke="#BD766D" strokeOpacity="0.3" strokeWidth="1" fill="none" />
        <text fill="#BD766D" fontSize="7" letterSpacing="2">
          <textPath href="#rotii-seal-circle" startOffset="2%">
            EXPERIENCE BEAUTY ✦ WITH INTENTION ✦
          </textPath>
        </text>
      </svg>
      <span className="absolute text-center font-rotii-sans text-[10px] uppercase leading-tight tracking-widest text-rotii-rosewood">
        Est.
        <br />
        2026
      </span>
    </motion.div>
  );
}