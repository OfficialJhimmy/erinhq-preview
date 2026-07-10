"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Impact", href: "#impact" },
  { label: "Ventures", href: "#ventures" },
  { label: "Global Stages", href: "#global-stages" },
  { label: "Press", href: "#press" },
  { label: "Academic", href: "#academic" },
  { label: "Travel", href: "#travel" },
  { label: "Contact", href: "#contact" },
];

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      className="flex h-9 w-9 items-center justify-center rounded-full border border-damilola-bronze-light/40 text-damilola-graphite transition-colors dark:border-damilola-gold-dark/40 dark:text-damilola-bone"
    >
      {theme === "dark" ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8l1.8-1.8M18 6l1.8-1.8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

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
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-damilola-bronze-light/10 bg-damilola-bone/95 dark:border-damilola-gold-dark/10 dark:bg-damilola-graphite/95">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-16">
          <Link
            href="#hero"
            className="font-damilola-display text-xl font-medium tracking-wide text-damilola-graphite dark:text-damilola-bone"
          >
            DHB
          </Link>

          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-damilola-sans text-sm text-damilola-graphite/70 transition-colors hover:text-damilola-bronze-light dark:text-damilola-bone/70 dark:hover:text-damilola-gold-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-damilola-graphite px-5 py-2 font-damilola-sans text-sm font-medium text-damilola-bone transition-colors hover:bg-damilola-bronze-light dark:bg-damilola-gold-dark dark:text-damilola-graphite dark:hover:bg-damilola-bone lg:inline-flex"
            >
              Get In Touch
            </a>
            <div className="hidden lg:block">
              <ThemeButton />
            </div>
            <button
              className="relative z-50 h-6 w-6 lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`absolute left-0 top-1 h-0.5 w-6 bg-damilola-graphite transition-transform duration-300 motion-reduce:transition-none dark:bg-damilola-bone ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-6 bg-damilola-graphite transition-opacity duration-300 motion-reduce:transition-none dark:bg-damilola-bone ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-5 h-0.5 w-6 bg-damilola-graphite transition-transform duration-300 motion-reduce:transition-none dark:bg-damilola-bone ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Backdrop and drawer are siblings of <header>, not children, on
          purpose. <header> uses backdrop-blur, which creates a new
          containing block for fixed-position descendants and would trap
          a nested drawer inside header's own small box instead of the
          full viewport. */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        style={{ backgroundColor: "rgba(28, 26, 24, 0.6)" }}
        className={`fixed inset-0 z-40 transition-opacity duration-300 motion-reduce:transition-none lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-72 max-w-[80%] flex-col gap-2 bg-damilola-bone px-6 py-8 font-damilola-sans transition-transform duration-300 ease-out motion-reduce:transition-none dark:bg-damilola-graphite lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <ThemeButton />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-damilola-graphite dark:text-damilola-bone"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <ul className="mt-10 flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-lg text-damilola-graphite/90 dark:text-damilola-bone/90"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}