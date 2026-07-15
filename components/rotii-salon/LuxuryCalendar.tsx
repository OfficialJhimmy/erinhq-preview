"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Period } from "./bookingData";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function getMonthGrid(viewDate: Date): (Date | null)[] {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = firstDay.getDay();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  return cells;
}

function isSameDay(a: Date | null, b: Date | null) {
  if (!a || !b) return false;
  return a.toDateString() === b.toDateString();
}

export default function LuxuryCalendar({
  selectedDate,
  onSelectDate,
  selectedPeriod,
  onSelectPeriod,
}: {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
  selectedPeriod: Period;
  onSelectPeriod: (period: Period) => void;
}) {
  const [viewDate, setViewDate] = useState(() => {
    const d = new Date();
    d.setDate(1);
    return d;
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const cells = getMonthGrid(viewDate);

  const changeMonth = (delta: number) => {
    setViewDate((prev) => {
      const next = new Date(prev);
      next.setMonth(prev.getMonth() + delta);
      return next;
    });
  };

  return (
    <div>
      <h3 className="font-rotii-display text-2xl text-rotii-ink">Choose your date</h3>
      <p className="mt-1 font-rotii-sans text-sm text-rotii-ink/50">
        Select a day that works for you
      </p>

      <div className="mt-6 rounded-2xl border border-rotii-ink/10 p-5">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => changeMonth(-1)}
            aria-label="Previous month"
            className="flex h-8 w-8 items-center justify-center rounded-full text-rotii-ink/50 transition-colors hover:bg-rotii-blush/20 hover:text-rotii-rosewood"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <AnimatePresence mode="wait">
            <motion.p
              key={viewDate.toDateString()}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.25 }}
              className="font-rotii-sans text-sm font-medium uppercase tracking-widest text-rotii-ink"
            >
              {viewDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </motion.p>
          </AnimatePresence>

          <button
            type="button"
            onClick={() => changeMonth(1)}
            aria-label="Next month"
            className="flex h-8 w-8 items-center justify-center rounded-full text-rotii-ink/50 transition-colors hover:bg-rotii-blush/20 hover:text-rotii-rosewood"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-5 grid grid-cols-7 gap-1 text-center">
          {WEEKDAYS.map((day) => (
            <span key={day} className="font-rotii-sans text-[10px] uppercase text-rotii-ink/35">
              {day}
            </span>
          ))}

          {cells.map((date, i) => {
            if (!date) return <span key={i} />;
            const isPast = date < today;
            const isToday = isSameDay(date, today);
            const isSelected = isSameDay(date, selectedDate);

            return (
              <button
                key={i}
                type="button"
                disabled={isPast}
                onClick={() => onSelectDate(date)}
                aria-current={isSelected ? "date" : undefined}
                className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full font-rotii-sans text-sm transition-all duration-200 ${
                  isSelected
                    ? "bg-rotii-rosewood text-white"
                    : isPast
                      ? "cursor-not-allowed text-rotii-ink/20"
                      : isToday
                        ? "border border-rotii-rosewood/50 text-rotii-ink hover:scale-105"
                        : "text-rotii-ink/70 hover:scale-105 hover:bg-rotii-blush/20"
                }`}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {(["Morning", "Afternoon", "Evening"] as Period[]).map((period) => (
          <button
            key={period}
            type="button"
            onClick={() => onSelectPeriod(period)}
            aria-pressed={selectedPeriod === period}
            className={`rounded-full border py-2.5 font-rotii-sans text-xs font-medium uppercase tracking-wide transition-colors duration-300 ${
              selectedPeriod === period
                ? "border-rotii-rosewood bg-rotii-rosewood text-white"
                : "border-rotii-ink/15 text-rotii-ink/60 hover:border-rotii-rosewood/40"
            }`}
          >
            {period}
          </button>
        ))}
      </div>
    </div>
  );
}