"use client";

import { motion } from "framer-motion";
import { priceCategories } from "./pricingData";

export default function PricingCategoryNav({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <nav aria-label="Pricing categories">
      <ul className="space-y-1">
        {priceCategories.map((category) => {
          const isActive = category.id === activeId;
          return (
            <li key={category.id}>
              <button
                onClick={() => onSelect(category.id)}
                aria-current={isActive}
                className="relative flex w-full items-center gap-3 py-2.5 text-left"
              >
                <span className="relative flex h-1.5 w-1.5 shrink-0 items-center justify-center">
                  {isActive && (
                    <motion.span
                      layoutId="pricing-nav-dot"
                      transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full bg-spicknspan-oxblood"
                    />
                  )}
                </span>

                <span
                  className={`font-spicknspan-sans text-sm uppercase tracking-wide transition-colors ${
                    isActive
                      ? "font-medium text-spicknspan-dark"
                      : "text-spicknspan-dark/45 hover:text-spicknspan-dark/70"
                  }`}
                >
                  {category.label}
                </span>

                {isActive && (
                  <motion.span
                    layoutId="pricing-nav-underline"
                    transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                    className="ml-2 h-px flex-1 bg-spicknspan-oxblood/40"
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}