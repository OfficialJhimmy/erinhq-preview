export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-ebele-parchment px-6 py-24 text-center md:px-16"
    >
      <div className="mx-auto max-w-xl">
        <p className="mb-4 font-ebele-sans text-sm uppercase tracking-[0.2em] text-ebele-brass">
          Get In Touch
        </p>
        <h2 className="font-ebele-display text-4xl italic text-ebele-plum md:text-6xl">
          Message Us
        </h2>
        <p className="mt-6 font-ebele-sans text-lg text-ebele-plum/70">
          There&apos;s no booking system here yet, just a real person on
          the other end. Send a message on Instagram and Ebele&apos;s
          World will get back to you directly.
        </p>

        <a
          href="https://instagram.com/ebelesworld"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-ebele-brass px-8 py-3 font-ebele-sans font-medium text-ebele-plum transition-colors hover:bg-ebele-rose"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
          </svg>
          Message @ebelesworld
        </a>
      </div>
    </section>
  );
}