"use client";

import { motion } from "framer-motion";
import InstitutionLogo from "./InstitutionLogo";
import type { Education } from "../types";

export default function EducationItem({
  education,
  index,
}: {
  education: Education;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className="group -mx-4 rounded-lg border-l-2 border-damilola-bronze-light/60 px-4 py-5 transition-colors duration-300 hover:bg-damilola-graphite/[0.02] dark:border-damilola-gold-dark/60 dark:hover:bg-damilola-bone/[0.03]"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InstitutionLogo
            src={education.logo}
            alt={`${education.institution} logo`}
            institution={education.institution}
            size={32}
          />
          <p className="font-damilola-sans text-xs font-semibold uppercase tracking-wide text-damilola-graphite/60 dark:text-damilola-bone/60">
            {education.institution}
          </p>
        </div>
        <p className="font-damilola-mono text-[11px] text-damilola-graphite/45 dark:text-damilola-bone/45">
          {education.period}
        </p>
      </div>

      <p className="mt-3 font-damilola-sans text-sm font-semibold text-damilola-graphite transition-colors duration-300 group-hover:text-damilola-bronze-light dark:text-damilola-bone dark:group-hover:text-damilola-gold-dark">
        {education.institution}
      </p>
      <p className="mt-1 font-damilola-display text-xl font-medium text-damilola-graphite dark:text-damilola-bone">
        {education.degree}
      </p>

      {education.description && (
        <p className="mt-2 font-damilola-sans text-sm leading-relaxed text-damilola-graphite/60 dark:text-damilola-bone/60">
          {education.description}
        </p>
      )}
    </motion.div>
  );
}