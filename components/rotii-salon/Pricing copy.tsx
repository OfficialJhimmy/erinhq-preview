"use client";

import { useState, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import PricingSidebar from "./PricingSidebar";
import PricingCard from "./PricingCard";
import PricingImage from "./PricingImage";
import { priceCategories } from "./pricingData";

const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export default function Pricing() {
  const [activeId, setActiveId] = useState(priceCategories[0].id);
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const prefersReducedMotion = useReducedMotion();
  const activeCategory =
    priceCategories.find((c) => c.id === activeId) ?? priceCategories[0];

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-spicknspan-bg px-6 py-20 md:px-16 lg:min-h-screen lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-1/4 h-[500px] w-[500px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(141,74,40,0.06), transparent 70%)",
        }}
      />

      <div
        className="relative mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_1.3fr_1fr] lg:items-stretch lg:gap-8"
        onMouseMove={handleMouseMove}
      >
        {/* Mobile/tablet order: heading + nav block, image, horizontal
            category selector, card. Desktop: three real columns. */}
        <div className="order-1 lg:order-1">
          <PricingSidebar activeId={activeId} onSelect={setActiveId} />
        </div>

        <div className="relative order-3 lg:order-2">
          {/* Subtle cursor-following glow behind the card, desktop only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-10 hidden opacity-[0.05] lg:block"
            style={{
              background: `radial-gradient(300px circle at ${glow.x}% ${glow.y}%, #8D4A28, transparent 70%)`,
            }}
          />
          <div className="relative">
            <PricingCard category={activeCategory} />
          </div>
        </div>

        {/* Mobile-only horizontal category selector. The vertical
            magazine-style nav lives inside PricingSidebar for desktop;
            this is a separate, simpler control suited to a narrow,
            horizontally scrolling context. */}
        <div className="order-2 -mx-6 overflow-x-auto px-6 lg:hidden">
          <div className="flex w-max gap-6 border-b border-spicknspan-dark/10 pb-3">
            {priceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveId(category.id)}
                aria-current={category.id === activeId}
                className={`whitespace-nowrap font-spicknspan-sans text-sm uppercase tracking-wide transition-colors ${
                  category.id === activeId
                    ? "font-medium text-spicknspan-oxblood"
                    : "text-spicknspan-dark/45"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="order-4 h-[320px] lg:order-3 lg:h-auto"
        >
          <PricingImage category={activeCategory} />
        </motion.div>
      </div>
    </section>
  );
}