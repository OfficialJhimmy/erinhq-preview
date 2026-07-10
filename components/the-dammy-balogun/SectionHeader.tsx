"use client";

import { motion } from "framer-motion";

export default function SectionHeader() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-end">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="mb-4 font-damilola-sans text-xs font-medium uppercase tracking-[0.2em] text-damilola-bronze-light dark:text-damilola-gold-dark">
          Ventures
        </p>
        <h2 className="font-damilola-display text-4xl font-medium leading-[1.1] text-damilola-graphite dark:text-damilola-bone md:text-5xl">
          Building Scalable Solutions.
          <br />
          Powering{" "}
          <span
            style={{ color: "#B68A35" }}
            className="dark:!text-damilola-gold-dark"
          >
            Real Impact.
          </span>
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="font-damilola-sans text-damilola-graphite/60 dark:text-damilola-bone/60"
      >
        Two purpose-driven ventures tackling today&apos;s energy and
        sustainability challenges across communities and businesses.
      </motion.p>
    </div>
  );
}