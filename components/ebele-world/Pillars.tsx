"use client";

import { useEffect, useRef, useState } from "react";

interface Pillar {
  id: string;
  label: string;
  statement: string;
  body: string;
  example: string;
  accent: "moss" | "brass" | "rose";
  dark: boolean;
  icon: "plate" | "pulse" | "drop" | "garment";
}

// Statements and bodies are original copy written for this positioning.
// The "example" line references real published content themes from the
// brief, paraphrased rather than reproduced verbatim.
const pillars: Pillar[] = [
  {
    id: "health",
    label: "Health",
    statement: "Eating well is not a punishment",
    body: "Practical, sustainable nutrition guidance built for real life, not a restriction plan you'll abandon in a week.",
    example: "Recently: a DASH-diet-based guide to eating better",
    accent: "moss",
    dark: false,
    icon: "plate",
  },
  {
    id: "fitness",
    label: "Fitness",
    statement: "Movement, not punishment",
    body: "The case for consistent movement, explained plainly, without the guilt that usually comes attached to fitness content.",
    example: "Recently: the real health benefits of regular exercise",
    accent: "brass",
    dark: true,
    icon: "pulse",
  },
  {
    id: "beauty",
    label: "Beauty",
    statement: "Know what you're putting on your skin",
    body: "Ingredient-level skincare education, so a routine is a decision, not a guess based on packaging.",
    example: "Recently: a Vitamin C (Tetrahexyldecyl Ascorbate) explainer",
    accent: "rose",
    dark: false,
    icon: "drop",
  },
  {
    id: "style",
    label: "Style",
    statement: "Getting dressed is a daily decision",
    body: "Style guidance rooted in what actually works day to day, not a seasonal trend list.",
    example: "Recently: Dress Sense, and 5 easy ways to look stylish every day",
    accent: "moss",
    dark: true,
    icon: "garment",
  },
];

const iconPaths: Record<Pillar["icon"], string> = {
  // A circle with an off-center division, a nod to a balanced plate
  // rather than a literal pie chart.
  plate: "M50,15 A35,35 0 1,1 49,15 M50,15 C65,15 78,32 78,50",
  // A resting pulse line that spikes once, the rhythm of movement.
  pulse: "M5,50 L30,50 L40,20 L52,80 L62,50 L95,50",
  // A single continuous droplet outline.
  drop: "M50,10 C70,42 82,62 82,76 C82,90 67,98 50,98 C33,98 18,90 18,76 C18,62 30,42 50,10 Z",
  // A simplified folded garment silhouette.
  garment:
    "M32,22 L46,10 L50,18 L54,10 L68,22 L68,34 L58,32 L58,92 L42,92 L42,32 L32,34 Z",
};

const accentTextClass: Record<Pillar["accent"], string> = {
  moss: "text-ebele-moss",
  brass: "text-ebele-brass",
  rose: "text-ebele-rose",
};

const accentStrokeColor: Record<Pillar["accent"], string> = {
  moss: "#7C8B6F",
  brass: "#B98B4E",
  rose: "#C97B86",
};

function PillarIcon({
  pillar,
  visible,
}: {
  pillar: Pillar;
  visible: boolean;
}) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const path = pathRef.current;
    if (!path) return;

    if (prefersReducedMotion) {
      path.style.strokeDasharray = "none";
      path.style.strokeDashoffset = "0";
      return;
    }

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = visible ? "0" : `${length}`;
    path.style.transition = "stroke-dashoffset 1.2s ease-out";
  }, [visible]);

  return (
    <svg viewBox="0 0 100 100" className="h-28 w-28 md:h-36 md:w-36" aria-hidden="true">
      <path
        ref={pathRef}
        d={iconPaths[pillar.icon]}
        fill="none"
        stroke={accentStrokeColor[pillar.accent]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PillarBand({
  pillar,
  index,
  registerRef,
}: {
  pillar: Pillar;
  index: number;
  registerRef: (el: HTMLDivElement | null, index: number) => void;
}) {
  const [visible, setVisible] = useState(false);
  const localRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }
    const node = localRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const bg = pillar.dark ? "bg-ebele-plum" : "bg-ebele-parchment";
  const textColor = pillar.dark ? "text-ebele-parchment" : "text-ebele-plum";
  const bodyColor = pillar.dark
    ? "text-ebele-parchment/70"
    : "text-ebele-plum/70";
  const reversed = index % 2 === 1;

  return (
    <div
      id={pillar.id}
      ref={(el) => {
        localRef.current = el;
        registerRef(el, index);
      }}
      className={`${bg} px-6 py-24 md:px-16`}
    >
      <div
        className={`mx-auto flex max-w-4xl flex-col items-center gap-10 md:flex-row md:gap-16 ${
          reversed ? "md:flex-row-reverse" : ""
        }`}
      >
        <div
          className={`shrink-0 transition-all duration-700 motion-reduce:transition-none ${
            visible ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <PillarIcon pillar={pillar} visible={visible} />
        </div>

        <div
          className={`text-center transition-all duration-700 motion-reduce:transition-none md:text-left ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p
            className={`mb-3 font-ebele-sans text-sm uppercase tracking-[0.2em] ${accentTextClass[pillar.accent]}`}
          >
            {pillar.label}
          </p>
          <h3
            className={`font-ebele-display text-3xl italic md:text-5xl ${textColor}`}
          >
            {pillar.statement}
          </h3>
          <p className={`mt-4 max-w-xl font-ebele-sans text-lg ${bodyColor}`}>
            {pillar.body}
          </p>
          <p
            className={`mt-6 font-ebele-sans text-sm ${accentTextClass[pillar.accent]}`}
          >
            {pillar.example}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Pillars() {
  const [activeIndex, setActiveIndex] = useState(0);
  const bandRefs = useRef<(HTMLDivElement | null)[]>([]);

  const registerRef = (el: HTMLDivElement | null, index: number) => {
    bandRefs.current[index] = el;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = bandRefs.current.findIndex(
              (el) => el === entry.target
            );
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    bandRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const jumpTo = (index: number) => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    bandRefs.current[index]?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "center",
    });
  };

  return (
    <section id="pillars" aria-labelledby="pillars-heading">
      <h2 id="pillars-heading" className="sr-only">
        The four pillars: health, fitness, beauty, and style
      </h2>

      {/* Fixed wayfinding tracker, desktop only. Shows which pillar is
          currently in view and jumps to any of the four on click. */}
      <div className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        {pillars.map((pillar, index) => (
          <button
            key={pillar.id}
            onClick={() => jumpTo(index)}
            aria-current={activeIndex === index}
            aria-label={`Jump to ${pillar.label}`}
            className="group flex items-center gap-3 rounded-full bg-ebele-plum/90 px-3 py-2 backdrop-blur-sm"
          >
            <span
              className={`h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-ebele-brass"
                  : "bg-ebele-parchment/30 group-hover:bg-ebele-parchment/60"
              }`}
            />
            <span
              className={`font-ebele-sans text-xs uppercase tracking-widest transition-opacity duration-300 ${
                activeIndex === index
                  ? "text-ebele-brass opacity-100"
                  : "text-ebele-parchment/50 opacity-0 group-hover:opacity-100"
              }`}
            >
              {pillar.label}
            </span>
          </button>
        ))}
      </div>

      {pillars.map((pillar, index) => (
        <PillarBand
          key={pillar.id}
          pillar={pillar}
          index={index}
          registerRef={registerRef}
        />
      ))}
    </section>
  );
}