"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { contact } from "./locationData";

export default function BookingInvitation() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="grid overflow-hidden rounded-[24px] border border-rotii-rosewood/15 md:grid-cols-2"
    >
      <div className="relative min-h-[260px]">
        <Image
          src="/images/rotii-salon/location-spa-treatment.png"
          alt="An editorial spa treatment scene at Rotii Salon & Spa"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center px-6 py-12 md:px-12">
        <p className="font-rotii-sans text-xs uppercase tracking-widest text-rotii-rosewood">
          Reserve Your Visit
        </p>
        <h3 className="mt-3 font-rotii-display text-3xl leading-tight text-rotii-ink md:text-4xl">
          Reserve your experience
          <br />
          and let us <span className="italic text-rotii-rosewood">take care of you.</span>
        </h3>
        <p className="mt-4 max-w-sm font-rotii-sans text-sm text-rotii-ink/55">
          A private suite, personal attention, and a space designed to
          slow you down. Book your visit whenever you&apos;re ready.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#booking"
            className="rounded-full bg-rotii-rosewood px-7 py-3.5 font-rotii-sans text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Reserve Your Experience
          </a>
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="rounded-full border border-rotii-ink/15 px-7 py-3.5 font-rotii-sans text-sm font-medium text-rotii-ink transition-colors hover:border-rotii-rosewood/40"
          >
            Call the Studio
          </a>
        </div>
      </div>
    </motion.div>
  );
}