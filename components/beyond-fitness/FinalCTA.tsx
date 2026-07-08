export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-beyond-dark px-6 py-32 text-center md:px-16">
      {/* Oversized ghost wordmark for scale and drama, opacity only, no
          gradient or shadow. */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-beyond-display text-[18vw] leading-none text-white/[0.04] md:text-[12vw]"
      >
        BEYOND
      </p>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-beyond-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-2xl">
        <p className="mb-4 font-beyond-sans text-sm uppercase tracking-widest text-beyond-gold">
          Ready When You Are
        </p>
        <h2 className="font-beyond-display text-4xl text-white md:text-6xl">
          Your First Class Is Waiting
        </h2>
        <p className="mt-5 font-beyond-sans text-white/70">
          Personalised training for CEOs, business leaders, and global
          citizens, starting whenever you decide to show up.
        </p>

        <a
          href="#book-now"
          className="mt-10 inline-block rounded-full bg-beyond-gold px-10 py-4 font-beyond-sans text-lg font-semibold text-beyond-dark transition-colors hover:bg-beyond-olive hover:text-white"
        >
          Book Your First Class
        </a>

        <div className="mt-8">
          <a
            href="https://instagram.com/beyondfitnessng"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-beyond-sans text-sm text-white/50 transition-colors hover:text-beyond-gold"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
            </svg>
            Follow @beyondfitnessng
          </a>
        </div>
      </div>
    </section>
  );
}