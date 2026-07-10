"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import InstitutionLogo from "./InstitutionLogo";
import type { Education } from "../types";

export default function FeaturedDegree({ education }: { education: Education }) {
  const [expanded, setExpanded] = useState(false);
  const achievements = education.achievements ?? [];
  const visibleAchievements = expanded ? achievements : achievements.slice(0, 3);
  const hasMore = achievements.length > 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="border-l-2 border-damilola-bronze-light pl-6 dark:border-damilola-gold-dark md:pl-8"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* PLACEHOLDER: real official Linnaeus University logo */}
          <InstitutionLogo
            src="/images/the-dammy-balogun/linnaeus.png"
            alt="Linnaeus University logo"
            institution="Linnaeus University"
            size={44}
          />
          <p className="font-damilola-sans text-sm font-semibold text-damilola-graphite dark:text-damilola-bone">
            Linnaeus University
          </p>
        </div>
        <p className="font-damilola-mono text-xs text-damilola-graphite/50 dark:text-damilola-bone/50">
          {education.period}
        </p>
      </div>

      <h3 className="mt-6 font-damilola-display text-3xl font-medium leading-tight text-damilola-graphite dark:text-damilola-bone md:text-4xl">
        {education.degree}
      </h3>

      {education.description && (
        <p className="mt-5 max-w-xl font-damilola-sans text-damilola-graphite/65 dark:text-damilola-bone/65">
          {education.description}
        </p>
      )}

      {achievements.length > 0 && (
        <ul className="mt-6 space-y-3">
          {visibleAchievements.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-damilola-bronze-light dark:bg-damilola-gold-dark" />
              <span className="font-damilola-sans text-sm leading-relaxed text-damilola-graphite/70 dark:text-damilola-bone/70">
                {item}
              </span>
            </li>
          ))}
        </ul>
      )}

      {hasMore && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 font-damilola-sans text-sm font-medium text-damilola-bronze-light underline-offset-2 hover:underline dark:text-damilola-gold-dark"
        >
          {expanded ? "Show less" : "… more"}
        </button>
      )}

      {education.skills && education.skills.length > 0 && (
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="font-damilola-sans text-xs font-semibold uppercase tracking-wide text-damilola-graphite/50 dark:text-damilola-bone/50">
            Skills:
          </span>
          {education.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-damilola-graphite/10 px-3 py-1 font-damilola-sans text-xs text-damilola-graphite/70 dark:border-damilola-bone/15 dark:text-damilola-bone/70"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}