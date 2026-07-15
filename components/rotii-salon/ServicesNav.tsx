"use client";

import { motion } from "framer-motion";
import { heroSlides } from "./data";

export default function ServicesNav({
  activeIndex,
  onChange,
}: {
  activeIndex: number;
  onChange: (index: number) => void;
}) {
  return (
    <nav
      aria-label="Featured services"
      className="hidden flex-col gap-5 lg:flex"
    >
      {heroSlides.map((slide, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={slide.id}
            onClick={() => onChange(i)}
            aria-current={isActive}
            className="group flex items-center gap-3 text-left"
          >
            <span className="font-rotii-sans text-xs text-rotii-rosewood/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <span
                className={`font-rotii-sans text-xs uppercase tracking-wide transition-colors ${
                  isActive
                    ? "font-medium text-rotii-ink"
                    : "text-rotii-ink/40 group-hover:text-rotii-ink/70"
                }`}
              >
                {slide.label}
              </span>
              {isActive && (
                <motion.span
                  layoutId="rotii-hero-nav-line"
                  transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                  className="mt-1 block h-px w-6 bg-rotii-rosewood"
                />
              )}
            </div>
          </button>
        );
      })}
    </nav>
  );
}