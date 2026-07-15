"use client";

import type { Experience } from "./bookingData";

const included = [
  "Private Suite Experience",
  "Complimentary Refreshments",
  "Personal Consultation",
  "Premium Products",
];

export default function ReservationSummary({
  experience,
  date,
  time,
}: {
  experience: Experience;
  date: Date;
  time: string;
}) {
  return (
    <div>
      <h3 className="font-rotii-display text-2xl text-rotii-ink">Review your reservation</h3>
      <p className="mt-1 font-rotii-sans text-sm text-rotii-ink/50">
        Please confirm the details below
      </p>

      <div className="mt-6 space-y-4 rounded-2xl border border-rotii-ink/10 p-6">
        <div className="flex justify-between font-rotii-sans text-sm">
          <span className="text-rotii-ink/50">Experience</span>
          <span className="font-medium text-rotii-ink">{experience.name}</span>
        </div>
        <div className="flex justify-between font-rotii-sans text-sm">
          <span className="text-rotii-ink/50">Date</span>
          <span className="font-medium text-rotii-ink">
            {date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
          </span>
        </div>
        <div className="flex justify-between font-rotii-sans text-sm">
          <span className="text-rotii-ink/50">Time</span>
          <span className="font-medium text-rotii-ink">{time}</span>
        </div>
        <div className="flex justify-between font-rotii-sans text-sm">
          <span className="text-rotii-ink/50">Duration</span>
          <span className="font-medium text-rotii-ink">{experience.duration}</span>
        </div>

        <div className="border-t border-rotii-ink/10 pt-4">
          <ul className="space-y-2">
            {included.map((label) => (
              <li key={label} className="flex items-center gap-2 font-rotii-sans text-xs text-rotii-ink/55">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" stroke="#BD766D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}