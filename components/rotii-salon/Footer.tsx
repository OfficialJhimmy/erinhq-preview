import Image from "next/image";
import { contact, address, hours } from "./locationData";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Booking", href: "#booking" },
  { label: "Journal", href: "#journal" },
  { label: "Location", href: "#location" },
];

// Condensed from the same real Tue–Sat/Sun pattern used in
// OpeningHours.tsx, not a separate invented schedule.
const condensedHours = [
  { label: "Mon – Thu", time: hours[0].time },
  { label: "Fri – Sat", time: hours[4].time },
  { label: "Sunday", time: hours[6].time },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-rotii-ink px-6 pt-16 md:px-16">
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-center">
          <Image
            src="/images/rotii-salon/rotti-logo.png"
            alt="Rotii Salon & Spa"
            width={160}
            height={48}
            className="h-14 w-auto brightness-0 invert md:h-16"
          />

          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-rotii-sans text-sm text-white/55 transition-colors hover:text-rotii-blush"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#hero"
            className="group flex items-center gap-2 font-rotii-sans text-sm text-white/55 transition-colors hover:text-rotii-blush"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-rotii-blush/60">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 19V5M12 5l-6 6M12 5l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>

        <div className="grid gap-10 divide-y divide-white/10 py-12 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="sm:pr-10">
            <p className="font-rotii-sans text-xs uppercase tracking-widest text-rotii-blush">
              Our Location
            </p>
            <p className="mt-4 font-rotii-sans text-sm leading-relaxed text-white/75">
              {address.line1}
              <br />
              {address.line2}
              <br />
              {address.line3}
            </p>
          </div>

          <div className="pt-10 sm:px-10 sm:pt-0">
            <p className="font-rotii-sans text-xs uppercase tracking-widest text-rotii-blush">
              Get In Touch
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="font-rotii-sans text-sm text-white/75 transition-colors hover:text-rotii-blush"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-rotii-sans text-sm text-white/75 transition-colors hover:text-rotii-blush"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-rotii-sans text-sm text-white/75 transition-colors hover:text-rotii-blush"
                >
                  {contact.instagram}
                </a>
              </li>
            </ul>
          </div>

          <div className="pt-10 sm:pl-10 sm:pt-0">
            <p className="font-rotii-sans text-xs uppercase tracking-widest text-rotii-blush">
              Opening Hours
            </p>
            <ul className="mt-4 space-y-2">
              {condensedHours.map((entry) => (
                <li key={entry.label} className="flex justify-between gap-4 font-rotii-sans text-sm">
                  <span className="text-white/55">{entry.label}</span>
                  <span className="text-white/75">{entry.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 font-rotii-sans text-xs text-white/35">
              Hours shown are illustrative, grand opening coming soon.
            </p>
          </div>
        </div>

        <div className="relative flex justify-center overflow-hidden border-t border-white/10 py-4">
          <p
            aria-hidden="true"
            className="select-none whitespace-nowrap font-rotii-display leading-none"
            style={{
              fontSize: "clamp(3rem, 14vw, 10rem)",
              WebkitTextStroke: "1px rgba(189, 118, 109, 0.4)",
              color: "transparent",
            }}
          >
            Rotii
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-8 sm:flex-row sm:items-center">
          <p className="font-rotii-sans text-xs text-white/40">
            {`© ${year} Rotii Salon & Spa. All rights reserved.`}
          </p>
          <p className="font-rotii-sans text-xs uppercase tracking-widest text-rotii-blush">
            Luxury Beauty Studio in Lekki
          </p>
        </div>
      </div>
    </footer>
  );
}