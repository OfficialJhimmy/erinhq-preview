"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Experience } from "./bookingData";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function toIcsDate(date: Date, time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  const d = new Date(date);
  d.setHours(hours, minutes, 0, 0);
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;
}

function downloadBlob(content: string, filename: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export default function ConfirmationScreen({
  experience,
  date,
  time,
  onReset,
}: {
  experience: Experience;
  date: Date;
  time: string;
  onReset: () => void;
}) {
  const prefersReducedMotion = useReducedMotion();

  const handleAddToCalendar = () => {
    const start = toIcsDate(date, time);
    const endDate = new Date(date);
    const [hours, minutes] = time.split(":").map(Number);
    endDate.setHours(hours, minutes + experience.durationMinutes, 0, 0);
    const end = toIcsDate(endDate, `${pad(endDate.getHours())}:${pad(endDate.getMinutes())}`);

    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `SUMMARY:Rotii Salon & Spa — ${experience.name}`,
      "DESCRIPTION:Reservation at Rotii Salon & Spa, 2A Hakeem Dickson, Lekki Phase 1, Lagos.",
      "LOCATION:2A Hakeem Dickson, Lekki Phase 1, Lagos",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    downloadBlob(ics, "rotii-salon-reservation.ics", "text/calendar");
  };

  const handleDownload = () => {
    const summary = [
      "ROTII SALON & SPA",
      "Reservation Summary",
      "",
      `Experience: ${experience.name}`,
      `Date: ${date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}`,
      `Time: ${time}`,
      `Duration: ${experience.duration}`,
      "",
      "2A Hakeem Dickson, Lekki Phase 1, Lagos",
      "",
      "This is a preview reservation, no real booking has been made.",
    ].join("\n");

    downloadBlob(summary, "rotii-salon-reservation.txt", "text/plain");
  };

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center py-8 text-center"
    >
      <motion.span
        initial={prefersReducedMotion ? false : { scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="flex h-20 w-20 items-center justify-center rounded-full border border-rotii-rosewood/30"
      >
        <motion.svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          initial={prefersReducedMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <motion.path
            d="M20 6L9 17l-5-5"
            stroke="#BD766D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.span>

      <h3 className="mt-6 font-rotii-display text-3xl text-rotii-ink">
        Your experience
        <br />
        has been reserved.
      </h3>
      <p className="mt-3 max-w-xs font-rotii-sans text-sm text-rotii-ink/55">
        Thank you for choosing us. We look forward to welcoming you.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          onClick={handleAddToCalendar}
          className="rounded-full bg-rotii-rosewood px-6 py-3 font-rotii-sans text-sm font-medium text-white transition-colors hover:bg-rotii-ink"
        >
          Add to Calendar
        </button>
        <button
          onClick={handleDownload}
          className="rounded-full border border-rotii-ink/15 px-6 py-3 font-rotii-sans text-sm font-medium text-rotii-ink transition-colors hover:border-rotii-rosewood/40"
        >
          Download Reservation
        </button>
      </div>

      <button
        onClick={onReset}
        className="mt-6 font-rotii-sans text-sm text-rotii-rosewood hover:underline"
      >
        Reserve Another Experience
      </button>
    </motion.div>
  );
}