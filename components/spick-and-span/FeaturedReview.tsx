"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { reviews } from "./reviewsData";

export default function FeaturedReview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const active = reviews[activeIndex];

  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="font-spicknspan-display text-6xl leading-none text-spicknspan-oxblood/30">
        &ldquo;
      </span>

      <div className="relative mt-2 min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.p
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-spicknspan-display text-2xl leading-snug text-spicknspan-dark md:text-3xl"
          >
            {active.text}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {reviews.map((review, i) => (
          <button
            key={review.id}
            onClick={() => setActiveIndex(i)}
            aria-label={`Show review ${i + 1}`}
            aria-current={i === activeIndex}
            className="relative flex h-4 w-4 items-center justify-center"
          >
            {i === activeIndex ? (
              <motion.span
                layoutId="review-dot"
                transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                className="h-1.5 w-1.5 rounded-full bg-spicknspan-oxblood"
              />
            ) : (
              <span className="h-1.5 w-1.5 rounded-full bg-spicknspan-dark/20" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}