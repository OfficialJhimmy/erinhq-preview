"use client";

import { useEffect, useRef, useState } from "react";

// Vague and honest on purpose. No invented feature details, since none
// exist yet beyond the name itself.
const teaserLines = [
  "Something is rising.",
  "Not yet. Soon.",
  "Ebele's World is about to expand.",
];

export default function NewDawn() {
  const [risen, setRisen] = useState(false);
  const [teaserIndex, setTeaserIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setRisen(true);
      return;
    }

    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRisen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setTeaserIndex((i) => (i + 1) % teaserLines.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="new-dawn"
      ref={sectionRef}
      className="relative overflow-hidden bg-ebele-plum px-6 py-32 text-center md:px-16"
    >
      {/* The "sun," built from layered blurred solid shapes, not a
          gradient, since the brief rules gradients out entirely. Rises
          into place the first time this section scrolls into view. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-ebele-brass/25 blur-3xl transition-all duration-[2000ms] ease-out motion-reduce:transition-none ${
          risen ? "top-1/2 opacity-100" : "top-[85%] opacity-0"
        }`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-ebele-rose/20 blur-2xl transition-all delay-300 duration-[2000ms] ease-out motion-reduce:transition-none ${
          risen ? "top-1/2 opacity-100" : "top-[90%] opacity-0"
        }`}
      />

      {/* Horizon line */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-1/2 h-px bg-ebele-parchment/15"
      />

      <div className="relative mx-auto max-w-xl">
        <p className="mb-4 font-ebele-sans text-sm uppercase tracking-[0.2em] text-ebele-brass">
          Coming Soon
        </p>
        <h2
          className={`font-ebele-display text-4xl italic text-ebele-parchment transition-all duration-1000 motion-reduce:transition-none md:text-6xl ${
            risen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          A New Dawn
        </h2>

        <div className="mt-8 h-6">
          <p
            key={teaserIndex}
            className="font-ebele-sans text-ebele-parchment/60 motion-safe:animate-fadeIn"
          >
            {teaserLines[teaserIndex]}
          </p>
        </div>

        <a
          href="https://instagram.com/ebelesworld"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full border border-ebele-parchment/30 px-8 py-3 font-ebele-sans text-sm font-medium text-ebele-parchment transition-colors hover:border-ebele-brass hover:text-ebele-brass"
        >
          Follow For Updates
        </a>
      </div>
    </section>
  );
}