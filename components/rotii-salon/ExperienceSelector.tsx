"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "./bookingData";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ExperienceSelector({
  selectedId,
  onSelect,
}: {
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <h3 className="font-rotii-display text-2xl text-rotii-ink">Choose your experience</h3>
      <p className="mt-1 font-rotii-sans text-sm text-rotii-ink/50">
        Select the service you would like to enjoy
      </p>

      <motion.div
        initial={prefersReducedMotion ? false : "hidden"}
        animate="visible"
        variants={container}
        className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
      >
        {experiences.map((experience) => (
          <motion.div key={experience.id} variants={item}>
            <ExperienceCard
              experience={experience}
              selected={selectedId === experience.id}
              onSelect={() => onSelect(experience.id)}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}