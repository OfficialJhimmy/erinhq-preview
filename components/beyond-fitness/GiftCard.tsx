"use client";

import Image from "next/image";
import { useState } from "react";

// Policy language drawn directly from BEYOND's real gift card page.
const policyPoints = [
  "Sent straight to your recipient's email, with a blind copy to you.",
  "Arrives as a digital code, activated in-studio. Vouchers are issued within 3 days of purchase.",
  "Recipients have 3 months to activate it. Once first used, the remaining balance is valid for 1 month.",
];

export default function GiftCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section
      id="gift-cards"
      className="relative overflow-hidden bg-beyond-dark px-6 py-24 md:px-16"
    >
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-beyond-gold/10 blur-3xl" />

      <div className="mx-auto grid max-w-5xl items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-beyond-sans text-sm uppercase tracking-widest text-beyond-gold">
            Gift Cards
          </p>
          <h2 className="font-beyond-display text-3xl text-white md:text-5xl">
            Give Someone A Reason To Move
          </h2>
          <p className="mt-4 max-w-md font-beyond-sans text-white/70">
            A BEYOND gift card hands someone real coaching, not another thing
            to unwrap and return.
          </p>

          <ul className="mt-8 space-y-4">
            {policyPoints.map((point) => (
              <li
                key={point}
                className="flex gap-3 font-beyond-sans text-sm text-white/60"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-beyond-gold" />
                {point}
              </li>
            ))}
          </ul>

          {/* Placeholder destination. Needs the real gift card purchase
              form URL once confirmed. */}
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-beyond-gold px-8 py-3 font-beyond-sans font-semibold text-beyond-dark transition-colors hover:bg-beyond-olive hover:text-white"
          >
            Purchase a Gift Card
          </a>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-sm animate-float motion-reduce:animate-none [perspective:1500px]">
            <button
              onClick={() => setFlipped((f) => !f)}
              aria-pressed={flipped}
              aria-label="Flip the gift card to see the terms"
              className="relative h-64 w-full [transform-style:preserve-3d] transition-transform duration-700 motion-reduce:transition-none"
              style={{
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front */}
              <div className="group absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-beyond-gold/40 bg-beyond-dark p-6 [backface-visibility:hidden]">
                {/* Subtle diagonal texture, solid color repeated lines,
                    not a gradient or an image. */}
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
                  aria-hidden="true"
                >
                  <pattern
                    id="card-texture"
                    width="14"
                    height="14"
                    patternTransform="rotate(45)"
                    patternUnits="userSpaceOnUse"
                  >
                    <line x1="0" y1="0" x2="0" y2="14" stroke="#E8D083" strokeWidth="1" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#card-texture)" />
                </svg>

                <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 rotate-12 bg-beyond-cream/10 blur-2xl transition-transform duration-700 group-hover:translate-x-[250%]" />

                {/* Top row: chip icon and small logo mark */}
                <div className="relative flex items-start justify-between">
                  <svg width="36" height="26" viewBox="0 0 36 26" aria-hidden="true">
                    <rect
                      x="0.5"
                      y="0.5"
                      width="35"
                      height="25"
                      rx="4"
                      fill="none"
                      stroke="#F9D663"
                      strokeWidth="1"
                    />
                    <line x1="0.5" y1="8.5" x2="35.5" y2="8.5" stroke="#F9D663" strokeWidth="1" />
                    <line x1="0.5" y1="17.5" x2="35.5" y2="17.5" stroke="#F9D663" strokeWidth="1" />
                    <line x1="12" y1="0.5" x2="12" y2="25.5" stroke="#F9D663" strokeWidth="1" />
                    <line x1="24" y1="0.5" x2="24" y2="25.5" stroke="#F9D663" strokeWidth="1" />
                  </svg>
                  <div className="relative h-6 w-20">
                    <Image
                      src="/images/beyond-fitness/beyond.jpeg"
                      alt="BEYOND Fitness"
                      fill
                      className="object-contain object-right"
                    />
                  </div>
                </div>

                {/* Faux card number, purely decorative */}
                <p className="relative font-beyond-sans text-lg tracking-[0.3em] text-white/40">
                  •••• •••• •••• GIFT
                </p>

                <div className="relative">
                  <p className="font-beyond-sans text-xs uppercase tracking-widest text-beyond-gold">
                    Gift Card
                  </p>
                  <p className="mt-1 font-beyond-display text-2xl text-white">
                    Give BEYOND
                  </p>
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-beyond-gold/40 bg-beyond-dark p-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <p className="font-beyond-sans text-sm text-white/70">
                  Valid for 3 months from purchase. Once first used, the
                  remaining balance is valid for 1 month.
                </p>
                <span className="mt-4 font-beyond-sans text-xs uppercase tracking-widest text-beyond-gold">
                  Tap to flip back
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}