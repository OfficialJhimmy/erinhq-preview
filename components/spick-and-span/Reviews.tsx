"use client";

import { motion, useReducedMotion } from "framer-motion";
import FeaturedReview from "./FeaturedReview";
import ReviewCard from "./ReviewCard";
import { reviews } from "./reviewsData";

const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

// Duplicated once so the marquee can loop seamlessly at -50% translate.
const loopedReviews = [...reviews, ...reviews];

export default function Reviews() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-spicknspan-bg px-6 py-24 md:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(141,74,40,0.06), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="font-spicknspan-sans text-sm uppercase tracking-[0.25em] text-spicknspan-oxblood">
            Reviews
          </p>
          <h2 className="mt-4 font-spicknspan-display text-4xl text-spicknspan-dark md:text-5xl">
            Why They Keep Coming Back
          </h2>
          <p className="mx-auto mt-3 max-w-md font-spicknspan-sans text-sm text-spicknspan-dark/55">
            Real feedback from real clients. More on our Instagram.
          </p>
        </motion.div>

        <div className="mt-16">
          <FeaturedReview />
        </div>

        <div className="group mt-16 overflow-hidden">
          <div
            className={`flex w-max gap-6 ${
              prefersReducedMotion
                ? ""
                : "animate-marquee group-hover:[animation-play-state:paused]"
            }`}
          >
            {loopedReviews.map((review, i) => (
              <ReviewCard key={`${review.id}-${i}`} text={review.text} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/spicknspan_beauty_studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-spicknspan-oxblood px-8 py-3 font-spicknspan-sans text-sm font-medium text-spicknspan-oxblood transition-colors hover:bg-spicknspan-oxblood hover:text-spicknspan-bg"
          >
            See More Reviews
          </a>
        </div>
      </div>
    </section>
  );
}