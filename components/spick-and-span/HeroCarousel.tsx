"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent, type TouchEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { heroSlides } from "./heroData";
import FloatingBadge from "./FloatingBadge";

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const prefersReducedMotion = useReducedMotion();
  const touchStartX = useRef<number | null>(null);

  const goTo = (index: number) => {
    setActiveIndex(((index % heroSlides.length) + heroSlides.length) % heroSlides.length);
  };
  const goNext = () => goTo(activeIndex + 1);
  const goPrev = () => goTo(activeIndex - 1);

  useEffect(() => {
    if (prefersReducedMotion || paused) return;
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, paused, prefersReducedMotion]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      delta < 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
  };

  const active = heroSlides[activeIndex];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured services"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] shadow-[0_30px_80px_rgba(35,31,27,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-spicknspan-oxblood lg:aspect-auto lg:h-full"
    >
      {heroSlides.map((slide, i) => {
        const isActive = i === activeIndex;
        return (
          <motion.div
            key={slide.id}
            aria-hidden={!isActive}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.div
              className="absolute inset-0"
              animate={
                prefersReducedMotion
                  ? { scale: 1 }
                  : { scale: isActive ? 1.04 : 1 }
              }
              transition={{
                duration: isActive && !prefersReducedMotion ? 6 : 0,
                ease: "linear",
              }}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={i === 0}
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        );
      })}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden opacity-[0.08] lg:block"
        style={{
          background: `radial-gradient(320px circle at ${glow.x}% ${glow.y}%, #F7F4EE, transparent 70%)`,
        }}
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-spicknspan-dark/25 via-transparent to-transparent" />

      <FloatingBadge />

      <span className="absolute bottom-6 left-6 rounded-full bg-spicknspan-bg/90 px-4 py-1.5 font-spicknspan-sans text-xs font-medium uppercase tracking-widest text-spicknspan-dark">
        {active.category}
      </span>

      <div className="absolute bottom-6 right-6 flex items-center gap-3">
        <span className="font-spicknspan-sans text-xs text-spicknspan-bg/90">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <span className="h-px w-6 bg-spicknspan-bg/50" />
        <span className="font-spicknspan-sans text-xs text-spicknspan-bg/60">
          {String(heroSlides.length).padStart(2, "0")}
        </span>

        <button
          onClick={goPrev}
          aria-label="Previous slide"
          className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-spicknspan-bg/40 text-spicknspan-bg backdrop-blur-sm transition-colors hover:bg-spicknspan-bg/20"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={goNext}
          aria-label="Next slide"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-spicknspan-bg/40 text-spicknspan-bg backdrop-blur-sm transition-colors hover:bg-spicknspan-bg/20"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}