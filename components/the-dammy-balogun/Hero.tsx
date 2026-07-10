"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// PLACEHOLDERS: hero-formal-1/2/3 — a small rotating set of formal
// photos for the hero carousel, distinct angles or settings, all in
// the same formal/boardroom register as the rest of the site.
const carouselImages = [
  {
    src: "/images/the-dammy-balogun/hero-formal.jpg",
    alt: "Damilola Hamid Balogun in formal business attire, a boardroom or summit-style setting",
  },
  {
    src: "/images/the-dammy-balogun/hero-formal-2.jpg",
    alt: "Damilola Hamid Balogun speaking or presenting at an event",
  },
  {
    src: "/images/the-dammy-balogun/hero-formal-3.jpg",
    alt: "Damilola Hamid Balogun in a panel or boardroom discussion",
  },
];

// Kept in sync with Ventures by hand; if that content changes, update
// this too.
const ventureSummaries = [
  {
    role: "Co-Founder & CEO",
    name: "Youth Sustainable Development Network (YSDN)",
  },
  {
    role: "Project Lead",
    name: "Powering Lagos SMEs Clean Energy Initiative",
  },
];

export default function Hero() {
  const [settled, setSettled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setSettled(true);
      return;
    }
    const timeout = setTimeout(() => setSettled(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || paused) return;

    const interval = setInterval(() => {
      setActiveSlide((i) => (i + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-damilola-bone px-6 pb-24 pt-32 dark:bg-damilola-graphite md:px-16"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        {/* Left column */}
        <div>
          <h1 className="sr-only">Damilola Hamid Balogun</h1>

          <div
            className={`inline-flex w-max items-stretch divide-x divide-damilola-bronze-light/25 rounded-lg border border-damilola-bronze-light/40 bg-white shadow-sm transition-all duration-700 motion-reduce:transition-none dark:divide-damilola-gold-dark/25 dark:border-damilola-gold-dark/30 dark:bg-white/5 ${
              settled ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <div className="flex flex-col justify-center px-4 py-3">
              <span className="font-damilola-display text-lg font-medium leading-none text-damilola-graphite dark:text-damilola-bone">
                Forbes
              </span>
              <span className="mt-1 font-damilola-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-damilola-bronze-light dark:text-damilola-gold-dark">
                Africa
              </span>
            </div>

            <div className="flex items-center px-4 py-3">
              <span className="font-damilola-display text-base font-medium text-damilola-graphite dark:text-damilola-bone">
                30 Under 30
              </span>
            </div>

            <div className="flex flex-col justify-center px-4 py-3">
              <span className="font-damilola-sans text-[10px] font-semibold uppercase tracking-widest text-damilola-bronze-light dark:text-damilola-gold-dark">
                Class of 2025
              </span>
              <span className="font-damilola-sans text-[10px] uppercase tracking-widest text-damilola-graphite/50 dark:text-damilola-bone/50">
                Social Impact
              </span>
            </div>
          </div>

          <div
            aria-hidden="true"
            className={`mt-6 font-damilola-display text-6xl font-medium leading-[0.95] text-damilola-graphite transition-all delay-100 duration-700 motion-reduce:transition-none dark:text-damilola-bone md:text-8xl ${
              settled ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <p>Damilola</p>
            <p>Hamid</p>
            <p>Balogun</p>
          </div>

          <div className="my-6 h-px w-16 bg-damilola-bronze-light dark:bg-damilola-gold-dark" />

          <p
            className={`max-w-md font-damilola-sans text-lg text-damilola-graphite/80 transition-all delay-200 duration-700 motion-reduce:transition-none dark:text-damilola-bone/80 ${
              settled ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            Legal professional turned social impact entrepreneur, with
            nearly a decade of work in climate and energy.
          </p>

          <div
            className={`mt-6 flex flex-col gap-3 transition-all delay-300 duration-700 motion-reduce:transition-none sm:flex-row sm:gap-8 ${
              settled ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            {ventureSummaries.map((v) => (
              <div key={v.name}>
                <p className="font-damilola-sans text-xs uppercase tracking-wide text-damilola-bronze-light dark:text-damilola-gold-dark">
                  {v.role}
                </p>
                <p className="mt-1 max-w-[220px] font-damilola-sans text-sm text-damilola-graphite/70 dark:text-damilola-bone/70">
                  {v.name}
                </p>
              </div>
            ))}
          </div>

          <blockquote
            className={`mt-8 border-l-2 border-damilola-bronze-light pl-4 transition-all delay-[400ms] duration-700 motion-reduce:transition-none dark:border-damilola-gold-dark ${
              settled ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <p className="font-damilola-display text-2xl font-medium tracking-wide text-damilola-bronze-light dark:text-damilola-gold-dark">
              Fortune Favors The Bold
            </p>
          </blockquote>

          <div
            className={`mt-8 flex flex-wrap gap-3 transition-all delay-500 duration-700 motion-reduce:transition-none ${
              settled ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <a
              href="#ventures"
              className="rounded-full bg-damilola-graphite px-6 py-3 font-damilola-sans text-sm font-medium text-damilola-bone transition-colors hover:bg-damilola-bronze-light dark:bg-damilola-gold-dark dark:text-damilola-graphite dark:hover:bg-damilola-bone"
            >
              View Journey
            </a>
            <a
              href="#global-stages"
              className="rounded-full border border-damilola-graphite/20 px-6 py-3 font-damilola-sans text-sm font-medium text-damilola-graphite transition-colors hover:border-damilola-bronze-light dark:border-damilola-bone/20 dark:text-damilola-bone dark:hover:border-damilola-gold-dark"
            >
              Watch Global Stages
            </a>
          </div>
        </div>

        {/* Right column: photo carousel only now */}
        <div
          className={`transition-all delay-200 duration-1000 motion-reduce:transition-none ${
            settled ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-2xl opacity-60"
              style={{
                background:
                  "radial-gradient(circle at 40% 30%, rgba(212,175,106,0.35), transparent 70%)",
              }}
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-damilola-bronze-light/20 dark:border-damilola-gold-dark/20">
              {carouselImages.map((image, i) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={i === 0}
                  className={`object-cover transition-opacity duration-1000 motion-reduce:transition-none ${
                    i === activeSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-damilola-graphite/70 px-3 py-1.5 backdrop-blur-sm">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z"
                    stroke="#D4AF6A"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="9.5" r="2.2" stroke="#D4AF6A" strokeWidth="1.5" />
                </svg>
                <span className="font-damilola-sans text-[10px] uppercase tracking-wide text-damilola-bone">
                  Lagos, Nigeria
                </span>
              </div>

              <p
                aria-hidden="true"
                className="absolute bottom-4 right-5 font-damilola-signature text-3xl text-damilola-gold-dark"
                style={{ transform: "rotate(-4deg)" }}
              >
                Damilola
              </p>

              <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                {carouselImages.map((image, i) => (
                  <button
                    key={image.src}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Show photo ${i + 1}`}
                    aria-current={i === activeSlide}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      i === activeSlide
                        ? "bg-damilola-gold-dark"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}