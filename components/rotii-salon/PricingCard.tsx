"use client";

import { AnimatePresence, motion } from "framer-motion";
import PricingRow from "./PricingRow";
import type { PriceCategory } from "./pricingData";

function durationRange(category: PriceCategory): string {
  const minutes = category.items.map((item) => parseInt(item.duration, 10));
  const min = Math.min(...minutes);
  const max = Math.max(...minutes);
  return min === max ? `${min} mins` : `${min} – ${max} mins`;
}

export default function PricingCard({ category }: { category: PriceCategory }) {
  return (
    <div className="rounded-[28px] bg-spicknspan-card p-6 shadow-[0_20px_60px_rgba(35,31,27,0.08)] md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-rotii-display text-4xl text-spicknspan-dark md:text-5xl">
            {category.label}
          </h3>
          <p className="mt-1 font-spicknspan-sans text-xs uppercase tracking-widest text-spicknspan-dark/45">
            {category.subtitle}
          </p>
        </div>

        {category.badge && (
          <span className="mt-1 flex shrink-0 items-center gap-1.5 rounded-full border border-spicknspan-oxblood/30 px-3 py-1.5 font-spicknspan-sans text-xs font-medium text-spicknspan-oxblood">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l2.9 6.3 6.9.9-5 4.8 1.3 6.8L12 17.6l-6.1 3.2 1.3-6.8-5-4.8 6.9-.9L12 2z" />
            </svg>
            {category.badge}
          </span>
        )}
      </div>

      <div className="relative mt-8 min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="divide-y divide-spicknspan-dark/[0.06]"
          >
            {category.items.map((item) => (
              <PricingRow key={item.name} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-spicknspan-dark/[0.08] pt-6">
        <div>
          <p className="font-spicknspan-sans text-[11px] uppercase tracking-widest text-spicknspan-dark/40">
            Duration
          </p>
          <p className="mt-1 font-spicknspan-sans text-sm text-spicknspan-dark">
            {durationRange(category)}
          </p>
        </div>
        <div>
          <p className="font-spicknspan-sans text-[11px] uppercase tracking-widest text-spicknspan-dark/40">
            Products
          </p>
          <p className="mt-1 font-spicknspan-sans text-sm text-spicknspan-dark">
            Premium
          </p>
        </div>
        <div>
          <p className="font-spicknspan-sans text-[11px] uppercase tracking-widest text-spicknspan-dark/40">
            Recommended
          </p>
          <p className="mt-1 font-spicknspan-sans text-sm text-spicknspan-dark">
            ★★★★★
          </p>
        </div>
      </div>

      <a
        href="#booking"
        className="mt-8 flex w-full items-center justify-between rounded-full bg-spicknspan-dark px-7 py-4 font-spicknspan-sans text-base font-medium text-spicknspan-bg transition-transform duration-300 hover:scale-[1.01]"
      >
        Book This Treatment
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}