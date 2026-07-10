export default function ContactSectionHeader() {
  return (
    <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
      <div className="border-l border-white/15 pl-6 md:pl-8">
        <div className="flex items-center gap-4">
          <p className="font-damilola-sans text-xs font-semibold uppercase tracking-[0.25em] text-damilola-gold-dark">
            Get In Touch
          </p>
          <span className="h-px w-10 bg-damilola-gold-dark/50" />
        </div>

        <h2 className="mt-6 font-damilola-display text-5xl font-medium leading-[1.05] text-damilola-bone md:text-6xl">
          The Next Chapter
          <br />
          Starts With
          <br />
          A <span className="text-damilola-gold-dark">Conversation.</span>
        </h2>
      </div>

      <div className="relative">
        {/* Faint globe wireframe, pure SVG, sitting behind the paragraph */}
        <svg
          aria-hidden="true"
          viewBox="0 0 300 300"
          className="pointer-events-none absolute -right-10 -top-16 h-[340px] w-[340px] opacity-[0.04]"
        >
          <circle cx="150" cy="150" r="140" stroke="#C59A43" strokeWidth="1" fill="none" />
          <ellipse cx="150" cy="150" rx="60" ry="140" stroke="#C59A43" strokeWidth="1" fill="none" />
          <ellipse cx="150" cy="150" rx="110" ry="140" stroke="#C59A43" strokeWidth="1" fill="none" />
          <line x1="10" y1="150" x2="290" y2="150" stroke="#C59A43" strokeWidth="1" />
          <line x1="20" y1="90" x2="280" y2="90" stroke="#C59A43" strokeWidth="1" />
          <line x1="20" y1="210" x2="280" y2="210" stroke="#C59A43" strokeWidth="1" />
        </svg>

        <p className="relative font-damilola-sans text-sm leading-relaxed text-white/68 lg:pt-2">
          Whether you&apos;re planning a keynote, exploring a strategic
          partnership, discussing climate innovation, or seeking expert
          commentary, let&apos;s start a conversation that creates
          meaningful impact.
        </p>
      </div>
    </div>
  );
}