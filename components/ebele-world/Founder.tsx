"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Only the general facts confirmed in the brief are used here. Specific
// award names, press outlets, and dates are not invented; if those exist,
// they should replace the generic "awards and press recognition" line
// below rather than this being padded out with fabricated specifics.
const stages = [
  {
    label: "The Musician",
    body: "Known publicly as Ebele The Flutist, Nigeria's first and foremost female flutist, a career built on years of discipline and public performance.",
  },
  {
    label: "The Coach",
    body: "A personal development coach, applying that same discipline to helping other people build better lives, with awards and press recognition along the way.",
  },
  {
    label: "The Founder",
    body: "Ebele's World is where that standard gets applied to health, fitness, beauty, and style, not a music brand, a company built by someone who has already mastered one craft.",
  },
];

export default function Founder() {
  const [visibleStages, setVisibleStages] = useState<boolean[]>(
    stages.map(() => false)
  );
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setVisibleStages(stages.map(() => true));
      return;
    }

    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          stages.forEach((_, i) => {
            setTimeout(() => {
              setVisibleStages((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 250);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="founder"
      ref={sectionRef}
      className="bg-ebele-parchment px-6 py-24 md:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-[minmax(0,320px)_1fr] md:items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ebele-plum/10 md:sticky md:top-24">
            {/* Placeholder. Needs a real photo of Ebele. */}
            <Image
              src="/images/ebele/ebele.jpeg"
              alt="Ebele Ezeamakam"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-3 font-ebele-sans text-sm uppercase tracking-[0.2em] text-ebele-brass">
              The Founder
            </p>
            <h2 className="font-ebele-display text-4xl italic text-ebele-plum md:text-6xl">
              Ebele Ezeamakam
            </h2>

            <div className="mt-10 space-y-8 border-l border-ebele-plum/15 pl-8">
              {stages.map((stage, i) => (
                <div
                  key={stage.label}
                  className={`relative transition-all duration-700 motion-reduce:transition-none ${
                    visibleStages[i]
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <span className="absolute -left-[calc(2rem+3px)] top-1.5 h-2 w-2 rounded-full bg-ebele-brass" />
                  <p className="font-ebele-sans text-sm uppercase tracking-wide text-ebele-brass">
                    {stage.label}
                  </p>
                  <p className="mt-2 max-w-xl font-ebele-sans text-lg text-ebele-plum/80">
                    {stage.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-ebele-plum/15 pt-6">
              <a
                href="https://instagram.com/ebelesworld"
                target="_blank"
                rel="noopener noreferrer"
                className="font-ebele-sans text-sm text-ebele-plum/70 transition-colors hover:text-ebele-brass"
              >
                Connect on Instagram · @ebelesworld
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}