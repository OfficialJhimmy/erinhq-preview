"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { timeSlotsByPeriod, type Period } from "./bookingData";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function TimeSelector({
  period,
  selectedTime,
  onSelect,
}: {
  period: Period;
  selectedTime: string | null;
  onSelect: (time: string) => void;
}) {
  const prefersReducedMotion = useReducedMotion();
  const slots = timeSlotsByPeriod[period];

  return (
    <div>
      <h3 className="font-rotii-display text-2xl text-rotii-ink">Choose your time</h3>
      <p className="mt-1 font-rotii-sans text-sm text-rotii-ink/50">
        Available {period.toLowerCase()} appointments
      </p>

      <motion.div
        key={period}
        initial={prefersReducedMotion ? false : "hidden"}
        animate="visible"
        variants={container}
        className="mt-6 flex flex-wrap gap-3"
      >
        {slots.map((time) => (
          <motion.button
            key={time}
            variants={item}
            type="button"
            onClick={() => onSelect(time)}
            aria-pressed={selectedTime === time}
            whileHover={{ y: -2 }}
            className={`rounded-full border px-6 py-3 font-rotii-sans text-sm transition-colors duration-300 ${
              selectedTime === time
                ? "border-rotii-rosewood bg-rotii-rosewood text-white"
                : "border-rotii-ink/15 text-rotii-ink/70 hover:border-rotii-rosewood/40"
            }`}
          >
            {time}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}