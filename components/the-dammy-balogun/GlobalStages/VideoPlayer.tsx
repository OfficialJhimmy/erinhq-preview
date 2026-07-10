"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, MapPin, Play } from "lucide-react";
import { useState } from "react";

type VideoPlayerProps = {
  poster: string;
  posterAlt: string;
  youtubeVideoId?: string;
  title: string;
  location: string;
  date: string;
};

export default function VideoPlayer({ poster, posterAlt, youtubeVideoId, title, location, date }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const reduceMotion = useReducedMotion();
  const canEmbed = Boolean(youtubeVideoId);

  return (
    <motion.figure
      initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[28px] border border-damilola-bronze-light/70 bg-[#171714] shadow-[0_24px_75px_rgba(18,12,3,0.22)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(18,12,3,0.3)] dark:border-damilola-gold-dark/70 dark:shadow-[0_0_65px_rgba(190,135,37,0.16)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {isPlaying && canEmbed ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
            title={`${title} video`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <Image src={poster} alt={posterAlt} fill priority={false} sizes="(max-width: 1023px) 100vw, 58vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/35" />
            <div className="absolute right-5 top-5 rounded-xl border border-damilola-gold-dark/65 bg-black/30 px-3 py-2 font-damilola-sans text-[10px] font-medium uppercase tracking-[0.1em] text-damilola-gold-dark backdrop-blur-sm">
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-damilola-gold-dark" />Live event
            </div>
            <button
              type="button"
              onClick={() => canEmbed && setIsPlaying(true)}
              disabled={!canEmbed}
              aria-label={canEmbed ? `Play ${title} video` : `${title} video is coming soon`}
              className="absolute left-1/2 top-1/2 flex h-[86px] w-[86px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-damilola-gold-dark/80 bg-black/20 text-damilola-gold-dark backdrop-blur-sm transition-transform duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-damilola-gold-dark disabled:cursor-default disabled:opacity-70"
            >
              <Play size={34} fill="currentColor" strokeWidth={1} className="ml-1" />
            </button>
            {!canEmbed && <span className="sr-only">Video source will be added shortly.</span>}
            <blockquote className="absolute bottom-7 left-7 max-w-[260px] border-l border-damilola-gold-dark/80 pl-4 font-damilola-display text-[20px] italic leading-[1.25] text-white">
              Ideas become action when the right people share the same room.
            </blockquote>
          </>
        )}
      </div>
      <figcaption className="grid gap-3 border-t border-damilola-gold-dark/25 px-6 py-5 font-damilola-sans text-[13px] text-white/90 sm:grid-cols-3 sm:gap-0">
        <span className="flex items-center gap-2"><CalendarDays size={17} className="text-damilola-gold-dark" />{title}</span>
        <span className="flex items-center gap-2 sm:border-l sm:border-white/20 sm:pl-5"><MapPin size={17} className="text-damilola-gold-dark" />{location}</span>
        <span className="flex items-center gap-2 sm:border-l sm:border-white/20 sm:pl-5">{date}</span>
      </figcaption>
    </motion.figure>
  );
}
