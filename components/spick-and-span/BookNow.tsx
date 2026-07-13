"use client";

import { motion, useReducedMotion } from "framer-motion";
import BookingForm from "./BookingForm";

export default function BookNow() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="bg-spicknspan-bg px-6 py-24 md:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-spicknspan-sans text-sm uppercase tracking-[0.25em] text-spicknspan-oxblood">
            Book Now
          </p>
          <h2 className="mt-4 font-spicknspan-display text-4xl text-spicknspan-dark md:text-5xl">
            Reserve Your Visit
          </h2>
          <p className="mt-4 max-w-sm font-spicknspan-sans text-spicknspan-dark/60">
            Tell us what you have in mind and when works for you. A
            member of the team will confirm your appointment directly.
          </p>

          <div className="mt-10 border-t border-spicknspan-dark/10 pt-6">
            <p className="font-spicknspan-sans text-sm font-medium text-spicknspan-dark">
              Prefer to reach us directly?
            </p>
            <a
              href="https://instagram.com/spicknspan_beauty_studio"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-spicknspan-sans text-sm text-spicknspan-oxblood hover:underline"
            >
              Message us on Instagram
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="rounded-[28px] bg-spicknspan-card p-8 shadow-[0_20px_60px_rgba(35,31,27,0.08)] md:p-10"
        >
          <BookingForm />
        </motion.div>
      </div>
    </section>
  );
}