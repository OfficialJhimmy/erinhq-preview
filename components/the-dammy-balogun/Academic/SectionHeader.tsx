"use client";

import { motion } from "framer-motion";

export default function SectionHeader() {
  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4">
            <p className="font-damilola-sans text-xs font-semibold uppercase tracking-[0.25em] text-damilola-bronze-light dark:text-damilola-gold-dark">
              Academic Background
            </p>
            <span className="h-px w-10 bg-damilola-bronze-light/50 dark:bg-damilola-gold-dark/50" />
          </div>

          <h2 className="mt-5 font-damilola-display text-4xl font-medium leading-[1.1] text-damilola-graphite dark:text-damilola-bone md:text-5xl">
            Building Expertise.
            <br />
            Creating{" "}
            <span className="text-damilola-bronze-light dark:text-damilola-gold-dark">
              Impact.
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-damilola-sans text-damilola-graphite/60 dark:text-damilola-bone/60"
        >
          A multidisciplinary academic journey spanning law,
          entrepreneurship, sustainability, climate policy, and systems
          thinking, providing the intellectual foundation for building
          organisations that create meaningful impact.
        </motion.p>
      </div>

      {/* Divider, draws in on scroll */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        style={{ transformOrigin: "left" }}
        className="relative mt-16 h-px w-full bg-damilola-graphite/10 dark:bg-damilola-bone/10"
      >
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-damilola-bronze-light dark:bg-damilola-gold-dark" />
      </motion.div>
    </div>
  );
}