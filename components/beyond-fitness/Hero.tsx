"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/beyond-fitness/beyond-training.jpg",
    eyebrow: "In-Studio",
    headline: "Redefining Fitness for Africa's Leaders",
    body: "Personalised training for CEOs, business leaders, and global citizens.",
  },
  {
    image: "/images/beyond-fitness/beyond-room.jpeg",
    eyebrow: "At-Home",
    headline: "Your Studio, Wherever You Are",
    body: "The same expert coaching, brought directly to you.",
  },
  {
    image: "/images/beyond-fitness/athlete-training.jpg",
    eyebrow: "Corporate & Private",
    headline: "Wellness Built Into Your Organisation",
    body: "Fitness solutions designed for teams and private events.",
  },
];

const SLIDE_DURATION_MS = 5000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || isPaused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION_MS);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== active}
        >
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            priority={i === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-beyond-dark/60" />
        </div>
      ))}

      <div className="relative z-10 flex h-full max-w-3xl flex-col justify-center px-6 md:px-16">
        <p className="mb-3 font-beyond-sans text-sm uppercase tracking-widest text-beyond-gold">
          {slides[active].eyebrow}
        </p>
        <h1 className="font-beyond-display text-4xl leading-tight text-white md:text-6xl">
          {slides[active].headline}
        </h1>
        <p className="mt-4 max-w-lg font-beyond-sans text-lg text-white/80">
          {slides[active].body}
        </p>

        <div className="mt-8 flex gap-4 font-beyond-sans">
          <a
            href="#book-now"
            className="rounded-full bg-beyond-gold px-8 py-3 font-semibold text-beyond-dark transition-colors hover:bg-beyond-olive hover:text-white"
          >
            Book a Class
          </a>
          <a
            href="#pricing"
            className="rounded-full border border-beyond-cream/50 px-8 py-3 font-semibold text-white transition-colors hover:bg-beyond-cream/10"
          >
            View Pricing
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-all ${
              i === active ? "w-6 bg-beyond-gold" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}