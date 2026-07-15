"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import BookingLayout from "./BookingLayout";
import BookingProgress from "./BookingProgress";
import ExperienceSelector from "./ExperienceSelector";
import LuxuryCalendar from "./LuxuryCalendar";
import TimeSelector from "./TimeSelector";
import ReservationSummary from "./ReservationSummary";
import ConfirmationScreen from "./ConfirmationScreen";
import EditorialImage from "./EditorialImage";
import FloatingInfoCard from "./FloatingInfoCard";
import BenefitStrip from "./BenefitStrip";
import EditorialQuote from "./EditorialQuote";
import BotanicalDecoration from "./BotanicalDecoration";
import { experiences, type Period } from "./bookingData";

export default function BookingSection() {
  const [step, setStep] = useState(1);
  const [experienceId, setExperienceId] = useState<string | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [period, setPeriod] = useState<Period>("Morning");
  const [time, setTime] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const selectedExperience =
    experiences.find((e) => e.id === experienceId) ?? experiences[0];

  const canContinue =
    (step === 1 && experienceId !== null) ||
    (step === 2 && date !== null) ||
    (step === 3 && time !== null) ||
    step === 4;

  const goNext = () => setStep((s) => Math.min(s + 1, 5));
  const goBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleReset = () => {
    setStep(1);
    setExperienceId(null);
    setDate(null);
    setTime(null);
  };

  return (
    <section id="booking" className="bg-white">
      <BookingLayout
        left={
          <>
            <EditorialImage experience={selectedExperience} />
            <FloatingInfoCard />
          </>
        }
        right={
          <div className="w-full rounded-[28px] border border-rotii-rosewood/15 bg-white p-6 shadow-[0_30px_80px_rgba(189,118,109,0.1)] md:p-10">
            {step < 5 && <BookingProgress currentStep={step} />}

            <div className="relative mt-8 min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {step === 1 && (
                    <ExperienceSelector selectedId={experienceId} onSelect={setExperienceId} />
                  )}
                  {step === 2 && (
                    <LuxuryCalendar
                      selectedDate={date}
                      onSelectDate={setDate}
                      selectedPeriod={period}
                      onSelectPeriod={setPeriod}
                    />
                  )}
                  {step === 3 && (
                    <TimeSelector period={period} selectedTime={time} onSelect={setTime} />
                  )}
                  {step === 4 && date && time && (
                    <ReservationSummary experience={selectedExperience} date={date} time={time} />
                  )}
                  {step === 5 && date && time && (
                    <ConfirmationScreen
                      experience={selectedExperience}
                      date={date}
                      time={time}
                      onReset={handleReset}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {step < 5 && (
              <div className="mt-8 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    onClick={goBack}
                    className="font-rotii-sans text-sm font-medium text-rotii-ink/60 hover:text-rotii-ink"
                  >
                    Back
                  </button>
                ) : (
                  <span />
                )}

                <button
                  onClick={goNext}
                  disabled={!canContinue}
                  className="inline-flex items-center gap-2 rounded-full bg-rotii-rosewood px-8 py-3.5 font-rotii-sans text-sm font-medium uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-y-0"
                >
                  {step === 4 ? "Reserve Experience" : "Continue"}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        }
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-16">
        <BenefitStrip />
        {/* <EditorialQuote /> */}
        <BotanicalDecoration />
      </div>
    </section>
  );
}