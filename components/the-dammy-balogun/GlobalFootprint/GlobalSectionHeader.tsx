"use client";

import { motion } from "framer-motion";

export default function GlobalSectionHeader() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_auto_auto] lg:items-start">
      <div>
        <div className="flex items-center gap-4">
          <p className="font-damilola-sans text-xs font-semibold uppercase tracking-[0.25em] text-damilola-gold-dark">
            Global Footprint
          </p>
          <span className="h-px w-10 bg-damilola-gold-dark/50" />
        </div>
 
        <h2 className="mt-6 font-damilola-display text-5xl font-medium leading-[1.05] text-damilola-bone md:text-6xl">
          Ideas Know
          <br />
          No <span className="text-damilola-gold-dark">Borders.</span>
        </h2>
      </div>
 
      <div className="max-w-xs border-l border-white/15 pl-6 lg:mt-2">
        <p className="font-damilola-sans text-sm leading-relaxed text-white/65">
          Every destination represents collaboration, dialogue, and shared
          progress rather than simply another place visited.
        </p>
      </div>
 
      <div className="lg:mt-2 lg:text-right">
        {/* 20+ is the real confirmed figure from the brief (spoken at UN
            conferences across 20+ countries), not the count of the four
            specific markers plotted below, since we only have specific
            city-level confirmation for those four. */}
        <p className="font-damilola-display text-5xl font-medium text-damilola-gold-dark">
          20<span className="align-top text-2xl">+</span>
        </p>
        <p className="mt-1 font-damilola-sans text-xs uppercase tracking-widest text-white/50">
          Countries
          <br />
          Reached
        </p>
      </div>
    </div>
  );
}