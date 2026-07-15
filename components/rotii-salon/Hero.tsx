"use client";

import { useState, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroCarousel from "./HeroCarousel";
import ServicesNav from "./ServicesNav";
import LuxurySeal from "./LuxurySeal";
import AppointmentBadge from "./AppointmentBadge";
import BottomStrip from "./BottomStrip";

const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-white pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(252,211,211,0.35), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
      />
      <p
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 select-none whitespace-nowrap font-rotii-display text-[22vw] font-semibold leading-none text-rotii-rosewood opacity-[0.03]"
      >
        BEAUTY
      </p>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden opacity-[0.06] lg:block"
        style={{
          background: `radial-gradient(400px circle at ${glow.x}% ${glow.y}%, #BD766D, transparent 70%)`,
        }}
      />

      <div className="relative mx-auto px-6 pb-16 md:px-16">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr_1.1fr] lg:items-center lg:gap-10">
          <ServicesNav activeIndex={activeIndex} onChange={setActiveIndex} />

          <HeroContent />

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[620px]"
          >
            <HeroCarousel activeIndex={activeIndex} onChange={setActiveIndex} />
            <AppointmentBadge />
            <LuxurySeal />
          </motion.div>
        </div>

        <div className="mt-12 hidden flex-col items-center gap-2 lg:flex">
          <span className="font-rotii-sans text-[10px] uppercase tracking-widest text-rotii-ink/40">
            Scroll
          </span>
          <motion.span
            animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 9l6 6 6-6" stroke="#BD766D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.span>
        </div>
      </div>

      <BottomStrip />
    </section>
  );
}