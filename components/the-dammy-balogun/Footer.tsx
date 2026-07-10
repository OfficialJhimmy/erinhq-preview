import Link from "next/link";

const navLinks = [
  { label: "Impact", href: "#impact" },
  { label: "Ventures", href: "#ventures" },
  { label: "Academic", href: "#academic" },
  { label: "Global Footprint", href: "#footprint" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden px-6 pt-20 md:px-16 lg:px-24"
      style={{ backgroundColor: "#0D1014" }}
    >
      <div className="relative mx-auto max-w-[1600px]">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-center">
          <Link
            href="#hero"
            className="font-damilola-display text-xl font-medium text-damilola-bone"
          >
            DHB
          </Link>

          <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-damilola-sans text-sm text-white/55 transition-colors hover:text-damilola-gold-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#hero"
            className="group flex items-center gap-2 font-damilola-sans text-sm text-white/55 transition-colors hover:text-damilola-gold-dark"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-damilola-gold-dark/60">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 19V5M12 5l-6 6M12 5l6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* Ghost wordmark, the one closing "wow" moment, reused sparingly
            rather than piling on something new. */}
        <div className="relative flex justify-center overflow-hidden py-6">
          <p
            aria-hidden="true"
            className="select-none whitespace-nowrap font-damilola-display text-[16vw] font-medium leading-none"
            style={{
              WebkitTextStroke: "1px rgba(197, 154, 67, 0.25)",
              color: "transparent",
            }}
          >
            BALOGUN
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-8 sm:flex-row sm:items-center">
          <p className="font-damilola-sans text-xs text-white/40">
            © {year} Damilola Hamid Balogun. All rights reserved.
          </p>
          <p className="font-damilola-display text-sm font-medium text-damilola-gold-dark">
            Fortune Favors The Bold
          </p>
        </div>
      </div>
    </footer>
  );
}