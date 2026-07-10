"use client";

import { Globe2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const events = ["United Nations", "Nairobi", "Powering Africa Summit", "Washington D.C.", "Linnaeus University", "Sweden", "Climate Week", "New York", "Africa Climate Conference", "Accra"];

export default function EventTicker() {
  const reduceMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);
  const content = events.map((event) => <span key={event} className="flex shrink-0 items-center gap-4"><span>{event}</span><i aria-hidden="true" className="h-1 w-1 rounded-full bg-damilola-bronze-light dark:bg-damilola-gold-dark" /></span>);
  return (
    <div onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className="overflow-hidden rounded-full border border-damilola-bronze-light/30 bg-white/35 py-3 dark:border-damilola-gold-dark/25 dark:bg-black/15">
      <div className="flex items-center gap-4 px-4 text-damilola-bronze-light dark:text-damilola-gold-dark"><Globe2 size={18} strokeWidth={1.3} /><div className="overflow-hidden"><motion.div animate={reduceMotion || isPaused ? undefined : { x: ["0%", "-50%"] }} transition={{ duration: 60, ease: "linear", repeat: Infinity }} className="flex w-max gap-4 whitespace-nowrap font-damilola-sans text-[10px] font-medium uppercase tracking-[0.08em]">{content}{content}</motion.div></div></div>
    </div>
  );
}
