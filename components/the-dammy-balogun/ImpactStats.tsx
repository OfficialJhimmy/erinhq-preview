"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Globe, Flag, DollarSign } from "lucide-react";

const stats = [
  { target: 12000, suffix: "+", label: "Youth Empowered", Icon: Users },
  { target: 50, suffix: "+", label: "Countries Reached", Icon: Globe },
  { target: 20, suffix: "+", label: "Nations Served", Icon: Flag },
  {
    target: 150000,
    prefix: "$",
    suffix: "+",
    label: "Solar Funding Secured",
    Icon: DollarSign,
  },
];

function StatColumn({
  target,
  prefix,
  suffix,
  label,
  Icon,
  index,
}: {
  target: number;
  prefix?: string;
  suffix: string;
  label: string;
  Icon: typeof Users;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    // Own baseline draws for ~0.6s, plus a small stagger; the count-up
    // starts once that's had time to finish, no cross-component
    // callback wiring needed.
    const delay = 500 + index * 100;
    const timeout = setTimeout(() => {
      const controls = animate(0, target, {
        duration: 1.4,
        ease: "easeOut",
        onUpdate: (v) => setCount(Math.round(v)),
      });
      return () => controls.stop();
    }, delay);

    return () => clearTimeout(timeout);
  }, [inView, target, index]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="flex h-14 items-end justify-center md:h-20">
        <p className="break-words font-damilola-display text-3xl font-medium leading-none text-damilola-graphite dark:text-damilola-bone md:text-5xl">
          {prefix}
          {count.toLocaleString()}
          {suffix}
        </p>
      </div>

      {/* Each column carries its own baseline segment. In a row on
          larger screens these sit edge to edge and read as one
          continuous line; in a 2x2 grid on mobile they just work as
          individual dividers, no special-cased full-width line needed. */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
        style={{ transformOrigin: "left" }}
        className="mt-4 h-px w-full bg-damilola-bronze-light/40 dark:bg-damilola-gold-dark/40"
      />

      <Icon
        size={16}
        strokeWidth={1.5}
        className="mt-4 text-damilola-bronze-light dark:text-damilola-gold-dark"
      />
      <p className="mt-2 text-center font-damilola-sans text-xs text-damilola-graphite/55 dark:text-damilola-bone/55">
        {label}
      </p>
    </div>
  );
}

export default function ImpactStats() {
  return (
    <section
      id="impact"
      className="bg-damilola-bone px-6 py-28 dark:bg-damilola-graphite md:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-damilola-sans text-sm uppercase tracking-widest text-damilola-bronze-light dark:text-damilola-gold-dark">
          Impact
        </p>
        <h2 className="max-w-xl font-damilola-display text-3xl font-medium text-damilola-graphite dark:text-damilola-bone md:text-4xl">
          Real Numbers, Not Marketing Copy
        </h2>

        {/* 2x2 grid on mobile, single row from sm up */}
        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-14 sm:flex sm:gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="sm:flex-1">
              <StatColumn {...stat} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}