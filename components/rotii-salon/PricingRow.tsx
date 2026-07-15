"use client";

import type { PriceItem } from "./pricingData";

export default function PricingRow({ item }: { item: PriceItem }) {
  return (
    <div className="group -mx-3 flex items-center justify-between gap-4 rounded-xl px-3 py-4 transition-colors hover:bg-spicknspan-cream/40">
      <div className="min-w-0">
        <p className="font-spicknspan-sans text-base font-medium text-spicknspan-dark">
          {item.name}
        </p>
        <p className="mt-1 font-spicknspan-sans text-sm text-spicknspan-dark/50">
          {item.description}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-6">
        <span className="hidden items-center gap-1.5 font-spicknspan-sans text-xs text-spicknspan-dark/40 sm:flex">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {item.duration}
        </span>

        <span className="font-spicknspan-sans text-lg font-medium text-spicknspan-dark transition-transform duration-300 group-hover:-translate-x-1">
          {item.price}
        </span>

        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-spicknspan-dark/15 text-spicknspan-dark/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}