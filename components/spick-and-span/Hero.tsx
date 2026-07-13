"use client";

import { motion, useReducedMotion } from "framer-motion";
import HeroCarousel from "./HeroCarousel";

const trustIndicators = [
  {
    label: "Premium Experience",
    sub: "Luxury in every detail",
    icon: (
      <path d="M4 8l3 3 5-6 5 6 3-3-2 10H6L4 8z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    label: "Expert Stylists",
    sub: "Skilled. Trained. Trusted.",
    icon: (
      <>
        <circle cx="8" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
        <circle cx="16" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
        <path d="M4 16l6-3 6 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      </>
    ),
  },
  {
    label: "Quality Products",
    sub: "Only the best for you",
    icon: (
      <path
        d="M12 4c-3 3-6 5-6 9a6 6 0 0012 0c0-4-3-6-6-9z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    label: "Your Confidence",
    sub: "Our ultimate goal",
    icon: (
      <path
        d="M12 20s-7-4.4-9.5-9A5 5 0 0112 6a5 5 0 019.5 5c-2.5 4.6-9.5 9-9.5 9z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? false : { opacity: 0, y: 16 };

  return (
    <section id="hero" className="bg-spicknspan-bg px-6 pb-16 pt-36 md:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <motion.p
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 font-spicknspan-sans text-xs uppercase tracking-[0.25em] text-spicknspan-oxblood"
          >
            Awolowo Road · Ikoyi · Lagos
          </motion.p>

          <motion.h1
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-5 font-spicknspan-display text-5xl leading-[1.05] text-spicknspan-dark md:text-7xl"
          >
            Beauty.
            <br />
            Care.
            <br />
            <span className="text-spicknspan-oxblood">Confidence.</span>
          </motion.h1>

          <motion.p
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-md font-spicknspan-sans leading-relaxed text-spicknspan-dark/65"
          >
            A premium hair and beauty studio offering exceptional hair,
            nail, massage, and lash services in one beautifully designed
            space.
          </motion.p>

          <motion.div
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-spicknspan-dark px-8 py-3.5 font-spicknspan-sans font-medium text-spicknspan-bg shadow-[0_4px_16px_rgba(35,31,27,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(35,31,27,0.2)]"
            >
              Book Your Appointment
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-spicknspan-dark/20 px-8 py-3.5 font-spicknspan-sans font-medium text-spicknspan-dark transition-all duration-300 hover:-translate-y-0.5 hover:border-spicknspan-oxblood hover:text-spicknspan-oxblood"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.div
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-spicknspan-dark/10 pt-8 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-6"
          >
            {trustIndicators.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-spicknspan-oxblood/25 text-spicknspan-oxblood">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    {item.icon}
                  </svg>
                </span>
                <div>
                  <p className="font-spicknspan-sans text-xs font-medium uppercase tracking-wide text-spicknspan-dark">
                    {item.label}
                  </p>
                  <p className="font-spicknspan-sans text-xs text-spicknspan-dark/50">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:h-[640px]"
        >
          <HeroCarousel />
        </motion.div>
      </div>
    </section>
  );
}