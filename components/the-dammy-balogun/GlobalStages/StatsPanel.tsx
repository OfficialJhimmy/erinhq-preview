"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, Globe2, Landmark, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type StageStat = { Icon: LucideIcon; value: string; label: string };

const stats: StageStat[] = [
  { Icon: Globe2, value: "20+", label: "Countries" },
  { Icon: Landmark, value: "UN", label: "Conferences" },
  { Icon: CalendarDays, value: "2026", label: "Powering Africa Summit" },
  { Icon: UserRound, value: "Policy", label: "Leadership" },
];

export default function StatsPanel() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.dl
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: 0.1 }}
      className="grid overflow-hidden rounded-[20px] border border-damilola-bronze-light/30 bg-white/55 backdrop-blur-sm dark:border-damilola-gold-dark/25 dark:bg-black/15 sm:grid-cols-2"
    >
      {stats.map(({ Icon, value, label }, index) => (
        <div key={label} className={`flex min-h-[114px] gap-4 p-5 ${index % 2 === 1 ? "sm:border-l sm:border-damilola-bronze-light/20 dark:sm:border-damilola-gold-dark/20" : ""} ${index > 1 ? "border-t border-damilola-bronze-light/20 dark:border-damilola-gold-dark/20" : ""}`}>
          <Icon aria-hidden="true" size={27} strokeWidth={1.25} className="shrink-0 text-damilola-bronze-light dark:text-damilola-gold-dark" />
          <div>
            <dt className="font-damilola-display text-[28px] leading-none text-[#1b1a18] dark:text-[#f5f0e8]">{value}</dt>
            <dd className="mt-2 font-damilola-sans text-[11px] leading-snug text-[#1b1a18]/65 dark:text-[#f5f0e8]/65">{label}</dd>
          </div>
        </div>
      ))}
    </motion.dl>
  );
}
