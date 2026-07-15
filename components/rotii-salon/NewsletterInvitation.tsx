"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function NewsletterInvitation() {
  const [submitted, setSubmitted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // SIMULATED. No real subscription is created, no email is sent
    // anywhere. This needs wiring to a real mailing list service
    // before it means anything.
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="grid overflow-hidden rounded-[24px] border border-rotii-rosewood/15 md:grid-cols-2"
    >
      <div className="relative min-h-[320px]">
        <Image
          src="/images/rotii-salon/location-massage.jpg"
          alt="A lifestyle beauty composition"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center px-6 py-10 md:px-12">
        <p className="font-rotii-sans text-xs uppercase tracking-[0.25em] text-rotii-rosewood">
          Newsletter
        </p>
        <h3 className="mt-2 font-rotii-display text-3xl text-rotii-ink">Stay Inspired</h3>
        <p className="mt-2 max-w-xs font-rotii-sans text-sm text-rotii-ink/55">
          Receive exclusive beauty rituals, studio stories, and timeless
          inspiration.
        </p>

        {submitted ? (
          <p className="mt-6 font-rotii-sans text-sm text-rotii-rosewood">
            Thank you, you&apos;re on the list.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex max-w-sm gap-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full border-b border-rotii-ink/20 bg-transparent py-2 font-rotii-sans text-sm text-rotii-ink placeholder:text-rotii-ink/35 focus:border-rotii-rosewood focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-rotii-rosewood px-6 py-2.5 font-rotii-sans text-xs font-medium uppercase tracking-wide text-white transition-colors hover:bg-rotii-ink"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}