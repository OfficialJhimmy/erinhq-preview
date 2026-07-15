"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { PriceCategory } from "./pricingData";

export default function PricingImage({ category }: { category: PriceCategory }) {
  return (
    <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-[28px] lg:min-h-0">
      <AnimatePresence mode="sync">
        <motion.div
          key={category.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={category.image}
            alt={category.imageAlt}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Real brand badge, not the fictional monogram from the reference mockup */}
      <div className="absolute bottom-6 right-6 flex h-20 w-20 items-center justify-center rounded-full border border-spicknspan-bg/40 bg-spicknspan-dark/30 text-center backdrop-blur-sm">
        <p className="font-spicknspan-display text-[10px] uppercase leading-tight tracking-widest text-spicknspan-bg">
          Rotii
          <br />
          Beauty Salon
        </p>
      </div>
    </div>
  );
}