"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import StatusBadge from "./StatusBadge";
import { hours } from "./locationData";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const item: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function OpeningHours() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <p className="font-rotii-sans text-xs uppercase tracking-widest text-rotii-rosewood">
        Opening Hours
      </p>

      <motion.ul
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={container}
        className="mt-5 space-y-2.5"
      >
        {hours.map((entry) => (
          <motion.li
            key={entry.day}
            variants={item}
            className="flex items-center justify-between font-rotii-sans text-sm"
          >
            <span className="text-rotii-ink/60">{entry.day}</span>
            <span className={entry.time === "Closed" ? "text-rotii-ink/35" : "text-rotii-ink"}>
              {entry.time}
            </span>
          </motion.li>
        ))}
      </motion.ul>

      <StatusBadge />
    </div>
  );
}