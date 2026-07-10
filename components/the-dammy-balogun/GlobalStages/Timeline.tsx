"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type TimelineEvent = { title: string; place: string };

const events: TimelineEvent[] = [
  { title: "United Nations\nClimate Forum", place: "Geneva" },
  { title: "Africa Energy\nWeek", place: "Cape Town" },
  { title: "UN Environment\nAssembly", place: "Nairobi" },
  { title: "Powering Africa\nSummit 2026", place: "Washington D.C." },
  { title: "Lagos Climate\nAction Summit", place: "Lagos" },
  { title: "World Future\nEnergy Summit", place: "Abu Dhabi" },
  { title: "Stockholm\n+50 Forum", place: "Stockholm" },
];

export default function Timeline() {
  const [activeEvent, setActiveEvent] = useState(3);
  const reduceMotion = useReducedMotion();
  return (
    <div className="overflow-x-auto pb-3 pt-2 [scrollbar-color:rgba(182,138,53,0.5)_transparent]">
      <motion.ol initial={reduceMotion ? false : { opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative flex min-w-[970px] items-end justify-between px-2 before:absolute before:bottom-[40px] before:left-0 before:right-0 before:h-px before:bg-damilola-bronze-light/50 dark:before:bg-damilola-gold-dark/45">
        {events.map((event, index) => {
          const isActive = activeEvent === index;
          return (
            <li key={event.place} className="relative w-[128px] text-center">
              <button type="button" onClick={() => setActiveEvent(index)} className={`group flex w-full flex-col items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-damilola-gold-dark ${isActive ? "text-damilola-bronze-light dark:text-damilola-gold-dark" : "text-[#1b1a18]/70 dark:text-[#f5f0e8]/72"}`} aria-current={isActive ? "step" : undefined}>
                <span className={`mb-5 whitespace-pre-line font-damilola-sans text-[12px] leading-[1.35] transition-colors ${isActive ? "text-[#1b1a18] dark:text-[#f5f0e8]" : "group-hover:text-damilola-bronze-light dark:group-hover:text-damilola-gold-dark"}`}>{event.title}</span>
                <span className={`relative z-10 h-4 w-4 rounded-full border-2 bg-[#f5f2eb] transition-all dark:bg-[#0f1115] ${isActive ? "border-damilola-bronze-light shadow-[0_0_20px_rgba(182,138,53,0.75)] dark:border-damilola-gold-dark" : "border-damilola-bronze-light/80 group-hover:scale-125 dark:border-damilola-gold-dark/75"}`} />
                <span className="mt-4 font-damilola-sans text-[10px] font-medium uppercase tracking-[0.1em]">{event.place}</span>
              </button>
            </li>
          );
        })}
      </motion.ol>
    </div>
  );
}
