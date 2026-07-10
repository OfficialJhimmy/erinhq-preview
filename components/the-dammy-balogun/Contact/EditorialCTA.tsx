export default function EditorialCTA() {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-4">
        <span className="h-px w-24 bg-damilola-gold-dark/40 sm:w-40" />
        <p className="font-damilola-sans text-sm font-semibold uppercase tracking-[0.25em] text-damilola-gold-dark">
          Start The Conversation
        </p>
        <span className="h-px w-24 bg-damilola-gold-dark/40 sm:w-40" />
      </div>

      <a
        href="#contact-form"
        className="group mt-4 inline-flex items-center gap-2"
      >
        <span className="relative font-damilola-display text-2xl font-medium text-damilola-bone transition-colors duration-300 group-hover:text-damilola-gold-dark">
          Let&apos;s Start a Conversation
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-damilola-gold-dark transition-all duration-500 group-hover:w-full" />
        </span>
        <span className="text-damilola-bone transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-damilola-gold-dark">
          →
        </span>
      </a>

      <p className="mx-auto mt-6 max-w-md font-damilola-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
        Available Worldwide For Speaking, Partnerships And Media.
      </p>
    </div>
  );
}