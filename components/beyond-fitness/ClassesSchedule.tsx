"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Category = "All" | "Barre" | "Lift" | "Mobility" | "Ride";
type Day =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

interface ClassSession {
  id: string;
  day: Day;
  category: Exclude<Category, "All">;
  name: string;
  time: string;
  duration: string;
  location: string;
}

const days: Day[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const categories: Category[] = ["All", "Barre", "Lift", "Mobility", "Ride"];

// Representative sample only. Built from BEYOND's real class names,
// categories, and locations (Barre Pilates, Stretch & Mobility, HIIT Ride,
// Lift - Upper Body & Abs, Lift - Total Body Bootcamp, Sunrise Sculpt Fusion,
// Beyond Fitness VI, Cycle Studio, Lift Studio, Low Impact Room).
// Tuesday and Wednesday reflect classes actually seen on BEYOND's live
// booking page. Every other day, including this Sunday session, repeats
// those same real class types at plausible times and has not been
// confirmed against BEYOND's actual recurring schedule. Every card links
// out to the real booking flow rather than attempting to book in place.
const sessions: ClassSession[] = [
  { id: "1", day: "Sunday", category: "Mobility", name: "Stretch & Mobility", time: "9:00 AM", duration: "30 min", location: "Low Impact Room" },
  { id: "2", day: "Sunday", category: "Barre", name: "Barre Pilates", time: "10:00 AM", duration: "45 min", location: "Beyond Fitness VI" },
  { id: "3", day: "Monday", category: "Barre", name: "Barre Pilates", time: "6:00 PM", duration: "45 min", location: "Beyond Fitness VI" },
  { id: "4", day: "Monday", category: "Ride", name: "HIIT Ride", time: "7:00 PM", duration: "45 min", location: "Cycle Studio" },
  { id: "5", day: "Tuesday", category: "Barre", name: "Barre Pilates", time: "6:00 PM", duration: "45 min", location: "Beyond Fitness VI" },
  { id: "6", day: "Tuesday", category: "Mobility", name: "Stretch & Mobility", time: "6:00 PM", duration: "45 min", location: "Low Impact Room" },
  { id: "7", day: "Tuesday", category: "Ride", name: "HIIT Ride", time: "7:00 PM", duration: "45 min", location: "Cycle Studio" },
  { id: "8", day: "Tuesday", category: "Lift", name: "Lift - Upper Body & Abs", time: "7:00 PM", duration: "45 min", location: "Lift Studio" },
  { id: "9", day: "Wednesday", category: "Lift", name: "Lift - Total Body Bootcamp (Core Focus)", time: "6:30 AM", duration: "50 min", location: "Lift Studio" },
  { id: "10", day: "Wednesday", category: "Mobility", name: "Sunrise Sculpt Fusion", time: "7:00 AM", duration: "45 min", location: "Beyond Fitness VI" },
  { id: "11", day: "Wednesday", category: "Mobility", name: "Stretch & Mobility", time: "7:30 AM", duration: "30 min", location: "Low Impact Room" },
  { id: "12", day: "Wednesday", category: "Lift", name: "Lift - Total Body Bootcamp (Core Focus)", time: "8:00 AM", duration: "50 min", location: "Lift Studio" },
  { id: "13", day: "Thursday", category: "Lift", name: "Lift - Upper Body & Abs", time: "6:30 AM", duration: "45 min", location: "Lift Studio" },
  { id: "14", day: "Thursday", category: "Mobility", name: "Stretch & Mobility", time: "7:30 AM", duration: "30 min", location: "Low Impact Room" },
  { id: "15", day: "Friday", category: "Barre", name: "Barre Pilates", time: "6:00 PM", duration: "45 min", location: "Beyond Fitness VI" },
  { id: "16", day: "Friday", category: "Ride", name: "HIIT Ride", time: "7:00 PM", duration: "45 min", location: "Cycle Studio" },
  { id: "17", day: "Saturday", category: "Mobility", name: "Sunrise Sculpt Fusion", time: "8:00 AM", duration: "45 min", location: "Beyond Fitness VI" },
  { id: "18", day: "Saturday", category: "Lift", name: "Lift - Total Body Bootcamp (Core Focus)", time: "9:00 AM", duration: "50 min", location: "Lift Studio" },
];

const dayIndexMap: Record<number, Day> = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

// Encoded inline as a data URI so the texture doesn't depend on an image
// asset. Pure CSS/SVG feTurbulence noise, kept at very low opacity.
const NOISE_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export default function ClassesSchedule() {
  const [selectedDay, setSelectedDay] = useState<Day | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [visible, setVisible] = useState(false);
  const [today, setToday] = useState<Day | null>(null);

  useEffect(() => {
    setToday(dayIndexMap[new Date().getDay()]);
  }, []);

  useEffect(() => {
    if (!selectedDay) return;
    setVisible(false);
    const timeout = setTimeout(() => setVisible(true), 20);
    return () => clearTimeout(timeout);
  }, [selectedDay, activeCategory]);

  const filtered = selectedDay
    ? sessions.filter(
        (session) =>
          session.day === selectedDay &&
          (activeCategory === "All" || session.category === activeCategory)
      )
    : [];

  return (
    <section
      id="classes"
      className="relative overflow-hidden bg-beyond-dark px-6 py-24 md:px-16"
    >
      {/* Background photo. Replace the path once real BEYOND photography
          is available. Kept subtle behind a dark overlay so text and
          cards stay readable at full contrast. */}
      <Image
        src="/images/beyond-fitness/beyond-store.jpeg"
        alt=""
        fill
        aria-hidden="true"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-beyond-dark/85" />

      {/* Ambient brand-color glow, positioned so it reads as depth rather
          than as decoration sitting on top of the content. */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-beyond-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-beyond-olive/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-beyond-cream/5 blur-3xl" />

      {/* Fine grain so the dark field doesn't sit completely flat. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: `url("${NOISE_SVG}")` }}
      />

      <div className="relative mx-auto max-w-5xl">
        <p className="mb-3 font-beyond-sans text-sm uppercase tracking-widest text-beyond-gold">
          Classes &amp; Schedule
        </p>
        <h2 className="font-beyond-display text-3xl text-white md:text-5xl">
          Find Your Class
        </h2>
        <p className="mt-4 max-w-xl font-beyond-sans text-white/70">
          Pick a day to see what&apos;s running. Every class links straight to
          real-time booking.
        </p>

        <div
          className="mt-10 flex gap-2 overflow-x-auto pb-2"
          role="group"
          aria-label="Select a day"
        >
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              aria-pressed={selectedDay === day}
              aria-current={today === day ? "date" : undefined}
              className={`relative shrink-0 rounded-full px-5 py-2 font-beyond-sans text-sm font-medium transition-colors ${
                selectedDay === day
                  ? "bg-beyond-gold text-beyond-dark"
                  : "border border-beyond-olive/40 text-white/70 hover:border-beyond-gold hover:text-white"
              }`}
            >
              {day}
              {today === day && (
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-beyond-gold ring-2 ring-beyond-dark" />
              )}
            </button>
          ))}
        </div>

        {selectedDay && (
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`rounded-full px-4 py-1.5 font-beyond-sans text-xs uppercase tracking-wide transition-colors ${
                  activeCategory === category
                    ? "bg-beyond-olive text-white"
                    : "border border-white/15 text-white/50 hover:border-beyond-olive hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="mt-10 min-h-[280px]" aria-live="polite">
          {!selectedDay && (
            <div className="flex h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-beyond-olive/30 text-center">
              <p className="font-beyond-display text-xl text-white/60">
                Pick a day above
              </p>
              <p className="mt-2 font-beyond-sans text-sm text-white/40">
                Your schedule will appear here.
              </p>
            </div>
          )}

          {selectedDay && (
            <h3 className="mb-4 font-beyond-display text-2xl text-white">
              {selectedDay}
            </h3>
          )}

          {selectedDay && filtered.length === 0 && (
            <p className="font-beyond-sans text-white/60">
              Nothing in this category on {selectedDay}. Try another filter
              or day.
            </p>
          )}

          {selectedDay && filtered.length > 0 && (
            <div
              className={`grid gap-4 transition-all duration-500 motion-reduce:transition-none sm:grid-cols-2 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
            >
              {filtered.map((session) => (
                <div
                  key={session.id}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-beyond-gold/60"
                >
                  <span className="font-beyond-sans text-xs uppercase tracking-widest text-beyond-gold">
                    {session.category}
                  </span>
                  <h4 className="mt-2 font-beyond-display text-xl text-white">
                    {session.name}
                  </h4>
                  <div className="mt-4 space-y-1 font-beyond-sans text-sm text-white/60">
                    <p>
                      {session.time} · {session.duration}
                    </p>
                    <p>{session.location}</p>
                  </div>
                  <a
                    href="#book-now"
                    className="mt-5 inline-block rounded-full bg-beyond-gold px-5 py-2 text-sm font-semibold text-beyond-dark transition-colors group-hover:bg-beyond-olive group-hover:text-white"
                  >
                    Book Now
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}