"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Booking", href: "#booking" },
  { label: "Journal", href: "#journal" },
  { label: "Location", href: "#location" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed left-1/2 top-4 z-50 w-[94%] max-w-6xl -translate-x-1/2 rounded-2xl border border-rotii-ink/10 bg-rotii-blush/50 px-6 py-3 shadow-sm backdrop-blur-md">
        <nav className="flex items-center justify-between gap-4">
          <Link href="#hero" className="flex items-center">
            <Image
              src="/images/rotii-salon/rotti-logo.png"
              alt="Rotii Salon & Spa"
              width={160}
              height={48}
              priority
              className="h-9 w-auto md:h-14"
            />
          </Link>

          <ul className="hidden items-center gap-6 rounded-full border border-rotii-ink/15 px-6 py-2 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-rotii-sans text-sm text-rotii-ink/75 transition-colors hover:text-rotii-rosewood"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#booking"
            className="hidden rounded-full bg-rotii-rosewood px-5 py-2.5 font-rotii-sans text-sm font-medium text-white transition-colors hover:bg-rotii-ink lg:inline-block"
          >
            Book Now
          </a>

          <button
            className="relative z-50 h-6 w-6 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`absolute left-0 top-1 h-0.5 w-6 bg-rotii-ink transition-transform duration-300 motion-reduce:transition-none ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-6 bg-rotii-ink transition-opacity duration-300 motion-reduce:transition-none ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-5 h-0.5 w-6 bg-rotii-ink transition-transform duration-300 motion-reduce:transition-none ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        style={{ backgroundColor: "rgba(43, 34, 34, 0.5)" }}
        className={`fixed inset-0 z-40 transition-opacity duration-300 motion-reduce:transition-none lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-72 max-w-[80%] flex-col gap-2 bg-white px-6 py-8 font-rotii-sans shadow-lg transition-transform duration-300 ease-out motion-reduce:transition-none lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="ml-auto text-rotii-ink"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <ul className="mt-10 flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-lg text-rotii-ink/90"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#booking"
          onClick={() => setMenuOpen(false)}
          className="mt-auto rounded-full bg-rotii-rosewood px-6 py-3 text-center font-rotii-sans text-sm font-medium text-white"
        >
          Book Now
        </a>
      </div>
    </>
  );
}