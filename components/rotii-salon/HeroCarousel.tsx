"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { heroSlides } from "./data";

export default function HeroCarousel({
  activeIndex,
  onChange,
}: {
  activeIndex: number;
  onChange: (index: number) => void;
}) {
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || paused) return;
    const interval = setInterval(() => {
      onChange((activeIndex + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, paused, prefersReducedMotion]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] shadow-[0_40px_100px_rgba(189,118,109,0.18)] lg:aspect-auto lg:h-full"
    >
      {heroSlides.map((slide, i) => {
        const isActive = i === activeIndex;
        return (
          <motion.div
            key={slide.id}
            aria-hidden={!isActive}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.div
              className="absolute inset-0"
              initial={false}
              animate={
                prefersReducedMotion
                  ? { scale: 1 }
                  : { scale: isActive ? 1 : 1.06 }
              }
              transition={{ duration: isActive ? 7 : 0, ease: "easeOut" }}
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
    </div>
  );
}