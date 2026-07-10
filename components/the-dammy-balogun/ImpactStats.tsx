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

function StatNumber({
  target,
  prefix,
  suffix,
  index,
  lineDrawn,
}: {
  target: number;
  prefix?: string;
  suffix: string;
  index: number;
  lineDrawn: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!lineDrawn) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    const timeout = setTimeout(() => {
      const controls = animate(0, target, {
        duration: 1.4,
        ease: "easeOut",
        onUpdate: (v) => setCount(Math.round(v)),
      });
      return () => controls.stop();
    }, index * 100);

    return () => clearTimeout(timeout);
  }, [lineDrawn, target, index]);

  return (
    <div className="flex flex-1 items-end justify-center">
      <p className="break-words font-damilola-display text-3xl font-medium leading-none text-damilola-graphite dark:text-damilola-bone md:text-5xl">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </p>
    </div>
  );
}

export default function ImpactStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [lineDrawn, setLineDrawn] = useState(false);

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="bg-damilola-bone px-6 py-28 dark:bg-damilola-graphite md:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-damilola-sans text-sm uppercase tracking-widest text-damilola-bronze-light dark:text-damilola-gold-dark">
          Impact
        </p>
        <h2 className="max-w-xl font-damilola-display text-3xl font-medium text-damilola-graphite dark:text-damilola-bone md:text-4xl">
          Real Numbers, Not Marketing Copy
        </h2>

        <div className="mt-20">
          {/* Row 1: numbers, bottom-aligned to the row below via flex */}
          <div className="flex h-16 items-end gap-4 md:h-24 md:gap-8">
            {stats.map((stat, i) => (
              <StatNumber key={stat.label} {...stat} index={i} lineDrawn={lineDrawn} />
            ))}
          </div>

          {/* Row 2: the baseline itself, draws in once, in normal flow so
              nothing needs to be manually positioned to line up with it */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            onAnimationComplete={() => setLineDrawn(true)}
            style={{ transformOrigin: "left" }}
            className="h-px w-full bg-damilola-bronze-light/40 dark:bg-damilola-gold-dark/40"
          />

          {/* Row 3: tick, icon, label per column, same flex widths as
              row 1 so everything lines up */}
          <div className="flex gap-4 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-1 flex-col items-center">
                <div className="h-3 w-px bg-damilola-bronze-light dark:bg-damilola-gold-dark" />
                <stat.Icon
                  size={16}
                  strokeWidth={1.5}
                  className="mt-3 text-damilola-bronze-light dark:text-damilola-gold-dark"
                />
                <p className="mt-2 text-center font-damilola-sans text-xs text-damilola-graphite/55 dark:text-damilola-bone/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}