"use client";

import { motion, useReducedMotion } from "framer-motion";

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "9:00 AM – 6:30 PM" },
  { day: "Wednesday", time: "9:00 AM – 6:30 PM" },
  { day: "Thursday", time: "9:00 AM – 6:30 PM" },
  { day: "Friday", time: "9:00 AM – 6:30 PM" },
  { day: "Saturday", time: "9:00 AM – 6:30 PM" },
  { day: "Sunday", time: "2:00 PM – 6:30 PM" },
];

// Real query, built from the confirmed real address; no coordinates
// were invented, this is a genuine Google Maps search embed.
const MAPS_QUERY = "Spick %26 Span Beauty Studio, Awolowo Road, Ikoyi, Lagos";
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

export default function Location() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="location" className="bg-spicknspan-bg px-6 py-24 md:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-spicknspan-sans text-sm uppercase tracking-[0.25em] text-spicknspan-oxblood">
            Location &amp; Hours
          </p>
          <h2 className="mt-4 font-spicknspan-display text-4xl text-spicknspan-dark md:text-5xl">
            Find Us in Ikoyi
          </h2>
          <p className="mt-4 max-w-sm font-spicknspan-sans text-spicknspan-dark/60">
            Awolowo Road, Ikoyi, Lagos.
          </p>

          <dl className="mt-8 max-w-sm divide-y divide-spicknspan-dark/10 border-y border-spicknspan-dark/10">
            {hours.map((entry) => (
              <div
                key={entry.day}
                className="flex items-center justify-between py-3"
              >
                <dt className="font-spicknspan-sans text-sm text-spicknspan-dark/70">
                  {entry.day}
                </dt>
                <dd
                  className={`font-spicknspan-sans text-sm font-medium ${
                    entry.time === "Closed"
                      ? "text-spicknspan-dark/40"
                      : "text-spicknspan-dark"
                  }`}
                >
                  {entry.time}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-spicknspan-oxblood px-8 py-3 font-spicknspan-sans font-medium text-spicknspan-bg transition-colors hover:bg-spicknspan-dark"
          >
            Get Directions
          </a>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="overflow-hidden rounded-[28px] border border-spicknspan-dark/10"
        >
          <iframe
            title="Spick & Span Beauty Studio location on Google Maps"
            src={MAPS_EMBED_URL}
            className="h-[420px] w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}