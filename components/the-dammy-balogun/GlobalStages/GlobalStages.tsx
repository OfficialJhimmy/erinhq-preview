"use client";

import { motion, useReducedMotion } from "framer-motion";
import EventTicker from "./EventTicker";
import PhotoCollage from "./PhotoCollage";
import SectionHeader from "./SectionHeader";
import StatsPanel from "./StatsPanel";
import Timeline from "./Timeline";
import VideoPlayer from "./VideoPlayer";

function WorldTexture() {
  return <svg aria-hidden="true" viewBox="0 0 900 520" className="absolute -left-20 top-24 w-[840px] opacity-[0.09] dark:opacity-[0.16]">
    <defs><pattern id="stage-dots" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1" fill="currentColor" /></pattern></defs>
    <g fill="url(#stage-dots)"><path d="M46 143 90 99l95-22 74 25 23 36-36 34-36-2-22 37-46 8-11-28-48-11-45 14-39-21z" /><path d="m226 205 44 17 37 48-19 75-31 70-31-15-19-65 12-47-28-44z" /><path d="m316 129 58-39 49-8 38 20 43-2 30 23-17 32-44 9-25 34-44-8-37 17-44-23z" /><path d="m430 209 50 13 35 60-16 91-43 28-35-53 11-48-28-51z" /><path d="m520 129 62-43 102-4 43 26 70-2 76 36-27 30-80-4-38 29-83-1-38-25-53-2z" /></g>
  </svg>;
}

export type GlobalStagesProps = {
  /** YouTube video ID. The embed is intentionally created only after play. */
  youtubeVideoId?: string;
};

export default function GlobalStages({ youtubeVideoId }: GlobalStagesProps) {
  const reduceMotion = useReducedMotion();
  return (
    <section id="global-stages" className="relative isolate min-h-[120vh] overflow-hidden bg-[#f5f2eb] px-6 py-24 text-[#1b1a18] dark:bg-[#0f1115] dark:text-[#f5f0e8] md:px-12 lg:py-32">
      <motion.div aria-hidden="true" animate={reduceMotion ? undefined : { x: [0, 20, 0], y: [0, -12, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -left-48 top-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(182,138,53,0.12),transparent_68%)] dark:bg-[radial-gradient(circle,rgba(212,175,106,0.18),transparent_68%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(currentColor_0.6px,transparent_0.6px)] [background-size:5px_5px] dark:opacity-[0.06]" />
      <WorldTexture />
      <div aria-hidden="true" className="pointer-events-none absolute left-[4%] top-[260px] h-[1px] w-[55%] rotate-[15deg] bg-gradient-to-r from-transparent via-damilola-bronze-light/50 to-transparent dark:via-damilola-gold-dark/45" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[5%] top-[400px] h-[1px] w-[40%] -rotate-[11deg] bg-gradient-to-r from-transparent via-damilola-bronze-light/35 to-transparent dark:via-damilola-gold-dark/35" />
      <div className="relative mx-auto max-w-[1360px]">
        <div className="grid gap-10 xl:grid-cols-[1.4fr_0.78fr] xl:items-end">
          <SectionHeader description="From United Nations conferences to international energy summits, Damilola contributes to conversations shaping sustainability, entrepreneurship and Africa's clean energy future." />
          <StatsPanel />
        </div>
        <div className="mt-14 grid gap-9 lg:grid-cols-[1.16fr_0.84fr] lg:items-center">
          <VideoPlayer poster="/images/the-dammy-balogun/IMG_6207.jpg" posterAlt="Damilola Balogun speaking at an Africa energy event" youtubeVideoId={youtubeVideoId} title="Powering Africa Summit" location="Washington D.C." date="March 19–20, 2026" />
          <PhotoCollage />
        </div>
        <div className="mt-14"><Timeline /></div>
        <div className="mt-11"><EventTicker /></div>
      </div>
    </section>
  );
}
