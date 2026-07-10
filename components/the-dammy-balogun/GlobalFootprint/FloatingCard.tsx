import Image from "next/image";
import type { FootprintLocation } from "../data";

export default function FloatingCard({ location }: { location: FootprintLocation }) {
  return (
    <div className="w-full max-w-[340px] overflow-hidden rounded-[28px] border border-damilola-gold-dark/40 bg-[#12161B] shadow-2xl">
      <div className="relative aspect-[16/10]">
        {/* PLACEHOLDER: real landscape photo for this location */}
        <Image
          src={location.image}
          alt={`${location.city}, ${location.country}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <p className="font-damilola-sans text-[10px] font-semibold uppercase tracking-widest text-damilola-gold-dark">
          {location.country}
        </p>
        <h3 className="mt-1 font-damilola-display text-2xl font-medium text-damilola-bone">
          {location.city}
        </h3>
        <p className="mt-2 font-damilola-mono text-xs text-white/50">
          {location.date}
        </p>

        <div className="my-4 h-px w-full bg-damilola-gold-dark/30" />

        <p className="font-damilola-sans text-sm font-semibold text-damilola-bone">
          {location.title}
        </p>
        <p className="mt-2 font-damilola-sans text-sm leading-relaxed text-white/60">
          {location.description}
        </p>
      </div>
    </div>
  );
}