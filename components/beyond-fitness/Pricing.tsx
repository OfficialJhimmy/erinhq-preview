"use client";

import { useState } from "react";

type CategoryId = "first-timers" | "drop-in" | "quarterly" | "annual";

interface PricingTier {
  id: string;
  name: string;
  perClass: string;
  total: string;
  validity: string;
  note?: string;
}

const categories: { id: CategoryId; label: string }[] = [
  { id: "first-timers", label: "First Timers" },
  { id: "drop-in", label: "Drop-In" },
  { id: "quarterly", label: "Quarterly" },
  { id: "annual", label: "Annual" },
];

// Built from BEYOND's real pricing page. The per-class rate times the
// number of classes in each package matches the crossed-out total in
// every case except "2 Weeks Unlimited," where the source shows the same
// number for both the listed and discounted price, meaning there's no
// actual discount on that specific tier as published. The 24x/month
// figure is corrected from a visible typo on the source page (₦11,00,
// missing a zero); ₦11,000 is what makes the ₦792,000 total math out
// exactly, but this should still be confirmed against BEYOND's real
// numbers before publishing.
const tiersByCategory: Record<CategoryId, PricingTier[]> = {
  "first-timers": [
    {
      id: "2-classes",
      name: "2 Classes",
      perClass: "₦20,000",
      total: "₦40,000",
      validity: "Valid for 2 weeks",
    },
    {
      id: "2-weeks-unlimited",
      name: "2 Weeks Unlimited",
      perClass: "",
      total: "₦80,000",
      validity: "Valid for 2 weeks",
      note: "Flat rate as published, no additional discount listed",
    },
  ],
  "drop-in": [
    {
      id: "1-class",
      name: "1 Class",
      perClass: "₦25,000",
      total: "₦25,000",
      validity: "No expiry",
    },
    {
      id: "5-class-pack",
      name: "5 Class Pack",
      perClass: "₦22,000",
      total: "₦110,000",
      validity: "Valid for 2 months",
      note: "More flexible",
    },
    {
      id: "10-class-pack",
      name: "10 Class Pack",
      perClass: "₦20,000",
      total: "₦200,000",
      validity: "Valid for 2 months",
      note: "More flexible",
    },
  ],
  quarterly: [
    {
      id: "8x-month",
      name: "8x / Month",
      perClass: "₦17,000",
      total: "₦408,000",
      validity: "Valid for 3 months",
    },
    {
      id: "12x-month",
      name: "12x / Month",
      perClass: "₦15,000",
      total: "₦540,000",
      validity: "Valid for 3 months",
    },
    {
      id: "20x-month",
      name: "20x / Month",
      perClass: "₦12,000",
      total: "₦720,000",
      validity: "Valid for 3 months",
    },
    {
      id: "24x-month",
      name: "24x / Month",
      perClass: "₦11,000",
      total: "₦792,000",
      validity: "Valid for 3 months",
      note: "Source showed ₦11,00, confirm real figure",
    },
  ],
  annual: [
    {
      id: "unlimited",
      name: "Unlimited",
      perClass: "₦9,333",
      total: "₦3,360,000",
      validity: "Valid for 12 months",
    },
  ],
};

const membershipPerks = [
  "10% off recovery shakes",
  "10% off merchandise",
  "1 guest pass / month",
  "Quarterly consultation with a coach",
  "Special pricing & access to BEYOND events",
  "Access to swimming sessions",
  "2 non-consecutive months freeze possible for annual members",
];

export default function Pricing() {
  const [active, setActive] = useState<CategoryId>("first-timers");
  const [visible, setVisible] = useState(true);

  const handleSelect = (id: CategoryId) => {
    if (id === active) return;
    setVisible(false);
    setTimeout(() => {
      setActive(id);
      setVisible(true);
    }, 200);
  };

  const tiers = tiersByCategory[active];
  const showPerks = active === "quarterly" || active === "annual";

  return (
    <section id="pricing" className="bg-beyond-dark px-6 py-24 md:px-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 font-beyond-sans text-sm uppercase tracking-widest text-beyond-gold">
          Pricing
        </p>
        <h2 className="font-beyond-display text-3xl text-white md:text-5xl">
          Pick Your Way In
        </h2>
        <p className="mt-4 max-w-xl font-beyond-sans text-white/70">
          Every plan links straight to secure payment. Prices shown are the
          effective rate per class.
        </p>

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Pricing categories"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active === cat.id}
              onClick={() => handleSelect(cat.id)}
              className={`rounded-full border px-5 py-2 font-beyond-sans text-sm font-medium transition-colors ${
                active === cat.id
                  ? "border-beyond-gold bg-beyond-gold text-beyond-dark"
                  : "border-beyond-olive/40 text-white/70 hover:border-beyond-gold hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          aria-live="polite"
          className={`mt-10 grid gap-4 transition-opacity duration-200 motion-reduce:transition-none sm:grid-cols-2 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="flex flex-col justify-between border border-beyond-olive/30 p-6 transition-[transform,border-color] duration-300 hover:scale-[1.01] hover:border-beyond-gold motion-reduce:transition-none motion-reduce:hover:scale-100"
            >
              <div>
                <h3 className="font-beyond-display text-xl text-white">
                  {tier.name}
                </h3>
                {tier.note && (
                  <p className="mt-1 font-beyond-sans text-xs text-beyond-gold">
                    {tier.note}
                  </p>
                )}
              </div>

              {tier.perClass ? (
                <>
                  <div className="mt-6 flex items-baseline gap-3">
                    <span className="font-beyond-display text-3xl text-white">
                      {tier.perClass}
                    </span>
                    <span className="font-beyond-sans text-sm text-white/50">
                      / class
                    </span>
                  </div>
                  {tier.total !== tier.perClass && (
                    <p className="mt-2 font-beyond-sans text-sm text-white/50 line-through">
                      {tier.total} total
                    </p>
                  )}
                </>
              ) : (
                <div className="mt-6">
                  <span className="font-beyond-display text-3xl text-white">
                    {tier.total}
                  </span>
                  <span className="ml-2 font-beyond-sans text-sm text-white/50">
                    flat rate
                  </span>
                </div>
              )}

              <p className="mt-2 font-beyond-sans text-xs uppercase tracking-wide text-white/40">
                {tier.validity}
              </p>

              <a
                href="#book-now"
                className="mt-6 inline-block rounded-full border border-beyond-gold px-5 py-2 text-center text-sm font-semibold text-beyond-gold transition-colors hover:bg-beyond-gold hover:text-beyond-dark"
              >
                Pay Now
              </a>
            </div>
          ))}
        </div>

        {showPerks && (
          <div className="mt-12 border-t border-beyond-olive/30 pt-8">
            <h3 className="font-beyond-display text-xl text-white">
              Membership Perks
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {membershipPerks.map((perk) => (
                <li
                  key={perk}
                  className="font-beyond-sans text-sm text-white/70"
                >
                  · {perk}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}