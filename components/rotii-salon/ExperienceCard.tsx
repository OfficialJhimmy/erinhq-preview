"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Experience } from "./bookingData";

export default function ExperienceCard({
  experience,
  selected,
  onSelect,
}: {
  experience: Experience;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group relative rounded-2xl border p-3 text-left transition-colors duration-300 h-full ${
        selected
          ? "border-rotii-rosewood bg-rotii-blush/10"
          : "border-rotii-ink/10 hover:border-rotii-rosewood/40"
      }`}
    >
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image
          src={experience.image}
          alt={experience.alt}
          fill
          className={`object-cover transition-all duration-500 ${
            selected ? "brightness-105" : "brightness-95 group-hover:brightness-100"
          }`}
        />
        {selected && (
          <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-rotii-rosewood text-white">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </div>

      <p className="mt-3 font-rotii-display text-xl text-rotii-ink">{experience.name}</p>
      <p className="mt-1 font-rotii-sans text-xs leading-relaxed text-rotii-ink/50">
        {experience.description}
      </p>
      <p className="mt-2 flex items-center gap-1.5 font-rotii-sans text-xs text-rotii-ink/60">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        {experience.duration}
      </p>
    </motion.button>
  );
}