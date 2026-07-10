"use client";

const outlets = [
  { name: "Forbes Africa", file: "forbes.png" },
  { name: "The Guardian Nigeria", file: "guardian.webp" },
  { name: "ThisDay", file: "this-day.png" },
  { name: "Vanguard", file: "vanguard.png" },
];

// Duplicated once so the marquee can loop seamlessly at -50% translate.
const loopedOutlets = [...outlets, ...outlets];

export default function PressCarousel() {
  return (
    <section
      id="press"
      aria-label="Featured in"
      className="border-y border-damilola-graphite/10 bg-damilola-bone py-14 dark:border-damilola-bone/10 dark:bg-damilola-graphite"
    >
      <p className="mx-auto mb-8 max-w-6xl px-6 font-damilola-sans text-xs uppercase tracking-widest text-damilola-graphite/40 dark:text-damilola-bone/40 md:px-16">
        Featured In
      </p>

      {/* Auto-scrolling row. Falls back to a static wrapped row for
          prefers-reduced-motion via the motion-reduce: variants below. */}
      <div className="group overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-10 group-hover:[animation-play-state:paused]">
          {loopedOutlets.map((outlet, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${outlet.name}-${i}`}
              src={`/images/the-dammy-balogun/${outlet.file}`}
              alt={outlet.name}
              className="h-12 w-auto shrink-0 object-contain grayscale transition-all hover:grayscale-0 dark:brightness-0 dark:invert dark:hover:brightness-100 dark:hover:invert-0 md:h-16"
            />
          ))}
        </div>
      </div>
    </section>
  );
}