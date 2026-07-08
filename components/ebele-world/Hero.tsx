"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const pathRef = useRef<SVGPathElement>(null);

  // Draws the waveform in once on load, skipped entirely for
  // prefers-reduced-motion rather than just speeding it up.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const path = pathRef.current;
    if (!path || prefersReducedMotion) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    path.getBoundingClientRect(); // force reflow before transition starts
    path.style.transition = "stroke-dashoffset 1.8s ease-out";
    path.style.strokeDashoffset = "0";
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-ebele-plum px-6 pt-24 md:px-16"
    >
      {/* Signature element: a single sustained waveform line, a quiet
          nod to the founder's real identity as a flutist, not a literal
          instrument illustration. */}
      <svg
        viewBox="0 0 800 120"
        className="pointer-events-none absolute left-0 right-0 top-1/2 w-full -translate-y-1/2 opacity-30"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          ref={pathRef}
          d="M0,60 C50,20 100,100 150,60 C200,20 250,100 300,60 C350,20 400,100 450,60 C500,20 550,100 600,60 C650,20 700,100 750,60 C775,40 790,60 800,60"
          fill="none"
          stroke="#B98B4E"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-4 font-ebele-sans text-sm uppercase tracking-[0.2em] text-ebele-brass">
          Health · Fitness · Beauty · Style
        </p>
        <h1 className="font-ebele-display text-5xl italic leading-tight text-ebele-parchment md:text-7xl">
          A world built around your best self
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-ebele-sans text-lg text-ebele-parchment/70">
          Products and services across health, fitness, beauty, and style,
          from Ebele Ezeamakam.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-ebele-brass px-8 py-3 font-ebele-sans font-medium text-ebele-plum transition-colors hover:bg-ebele-rose"
          >
            Get In Touch
          </a>
          <a
            href="#pillars"
            className="rounded-full border border-ebele-parchment/30 px-8 py-3 font-ebele-sans font-medium text-ebele-parchment transition-colors hover:border-ebele-brass hover:text-ebele-brass"
          >
            Explore The Pillars
          </a>
        </div>
      </div>
    </section>
  );
}