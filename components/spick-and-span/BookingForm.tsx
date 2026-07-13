"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";

const services = [
  "Hair Styles",
  "Haircuts",
  "Nails",
  "Massage",
  "Lashes",
  "Mani-Pedi",
  "Pedicure",
];

const inputClasses =
  "w-full border-b border-spicknspan-dark/20 bg-transparent py-3 font-spicknspan-sans text-spicknspan-dark placeholder:text-spicknspan-dark/35 transition-colors focus:border-spicknspan-oxblood focus:outline-none";

export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  // SIMULATED SUBMISSION. No real booking backend exists yet, this
  // resolves locally after a short delay rather than sending anywhere.
  // Before this goes live, this needs to be wired to something real:
  // an email service, a WhatsApp handoff, or an actual booking system.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1200);
  };

  return (
    <div className="relative min-h-[520px]">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex h-full flex-col items-center justify-center py-16 text-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-spicknspan-oxblood/10 text-spicknspan-oxblood">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h3 className="mt-6 font-spicknspan-display text-2xl text-spicknspan-dark">
              Request Received
            </h3>
            <p className="mt-3 max-w-xs font-spicknspan-sans text-sm text-spicknspan-dark/60">
              Thank you. We will be in touch shortly to confirm your
              appointment.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 font-spicknspan-sans text-sm font-medium text-spicknspan-oxblood hover:underline"
            >
              Make Another Request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                className={inputClasses}
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number"
                className={inputClasses}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email (optional)"
              className={inputClasses}
            />

            <div className="grid gap-6 sm:grid-cols-2">
              <select
                name="service"
                required
                defaultValue=""
                className={`${inputClasses} appearance-none`}
              >
                <option value="" disabled>
                  Select a Service
                </option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              <input type="date" name="date" required className={inputClasses} />
            </div>

            <textarea
              name="notes"
              rows={3}
              placeholder="Anything else we should know? (optional)"
              className={`${inputClasses} resize-none`}
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-spicknspan-oxblood px-8 py-4 font-spicknspan-sans font-medium text-spicknspan-bg transition-colors hover:bg-spicknspan-dark disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-spicknspan-bg/40 border-t-spicknspan-bg" />
                  Sending
                </>
              ) : (
                "Request Appointment"
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}