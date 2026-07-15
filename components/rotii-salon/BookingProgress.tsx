"use client";

import { motion } from "framer-motion";

const steps = ["Experience", "Date", "Time", "Review", "Confirmation"];

export default function BookingProgress({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-start">
      {steps.map((label, i) => {
        const stepNumber = i + 1;
        const isActive = stepNumber === currentStep;
        const isComplete = stepNumber < currentStep;

        return (
          <div key={label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full font-rotii-sans text-xs font-medium transition-colors duration-500 ${
                  isActive
                    ? "bg-rotii-rosewood text-white"
                    : isComplete
                      ? "border border-rotii-rosewood text-rotii-rosewood"
                      : "border border-rotii-ink/15 text-rotii-ink/35"
                }`}
              >
                {isComplete ? "✓" : stepNumber}
              </span>
              <span
                className={`font-rotii-sans text-[10px] uppercase tracking-widest ${
                  isActive ? "text-rotii-rosewood" : "text-rotii-ink/35"
                }`}
              >
                {label}
              </span>
            </div>

            {stepNumber < steps.length && (
              <div className="mx-2 mb-4 h-px flex-1 bg-rotii-ink/10">
                <motion.div
                  className="h-full bg-rotii-rosewood"
                  initial={false}
                  animate={{ width: isComplete ? "100%" : "0%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}