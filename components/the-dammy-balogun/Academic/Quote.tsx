"use client";

import { motion } from "framer-motion";

export default function Quote() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mt-20 border-t border-damilola-graphite/10 pt-12 text-center dark:border-damilola-bone/10"
    >
      <span className="font-damilola-display text-3xl leading-none text-damilola-bronze-light dark:text-damilola-gold-dark">
        &ldquo;
      </span>
      {/* PLACEHOLDER: not a verified quote from Damilola. The
          AI-generated reference invented this line; replace it with
          something he's actually said before this ships. */}
      <p className="mx-auto mt-2 max-w-md font-damilola-display text-lg leading-snug text-damilola-graphite/80 dark:text-damilola-bone/80">
        [Placeholder — needs a real quote from Damilola before this
        section is accurate]
      </p>
    </motion.div>
  );
}