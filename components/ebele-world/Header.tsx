"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Pillars", href: "#pillars" },
  { label: "Founder", href: "#founder" },
  { label: "A New Dawn", href: "#new-dawn" },
  { label: "Contact", href: "#contact" },
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-ebele-plum/70 backdrop-blur-md font-ebele-sans">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="#hero"
            className="font-ebele-display text-2xl italic text-ebele-parchment"
          >
            Ebele&apos;s World
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ebele-parchment/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-full bg-ebele-brass px-6 py-2 text-sm font-medium text-ebele-plum transition-colors hover:bg-ebele-rose md:inline-block"
          >
            Get In Touch
          </a>

          <button
            className="relative z-50 h-6 w-6 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`absolute left-0 top-1 h-0.5 w-6 bg-ebele-parchment transition-transform duration-300 motion-reduce:transition-none ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-6 bg-ebele-parchment transition-opacity duration-300 motion-reduce:transition-none ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-5 h-0.5 w-6 bg-ebele-parchment transition-transform duration-300 motion-reduce:transition-none ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Backdrop and drawer are siblings of <header>, not children.
          <header> uses backdrop-blur, and backdrop-filter on an ancestor
          creates a new containing block for fixed-position descendants,
          which would confine these to header's own small box instead of
          the full viewport. */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        style={{ backgroundColor: "rgba(46, 31, 43, 0.7)" }}
        className={`fixed inset-0 z-40 font-ebele-sans transition-opacity duration-300 motion-reduce:transition-none md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
        style={{ backgroundColor: "#2E1F2B" }}
        className={`fixed right-0 top-0 z-50 flex h-full w-72 max-w-[80%] flex-col gap-2 px-6 py-8 font-ebele-sans transition-transform duration-300 ease-out motion-reduce:transition-none md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="ml-auto text-ebele-parchment transition-colors hover:text-ebele-brass"
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
                className="text-lg text-ebele-parchment/90 transition-colors hover:text-ebele-brass"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-auto rounded-full bg-ebele-brass px-6 py-3 text-center text-sm font-medium text-ebele-plum transition-colors hover:bg-ebele-rose"
        >
          Get In Touch
        </a>
      </div>
    </>
  );
}