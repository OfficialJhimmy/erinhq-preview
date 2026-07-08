"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Classes", href: "#classes" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gift Cards", href: "#gift-cards" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock background scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-beyond-dark/40 backdrop-blur-md font-beyond-sans">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="#hero" className="relative h-10 w-32">
            <Image
              src="/beyond-fitness/beyond-logo.png"
              alt="BEYOND Fitness"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#book-now"
            className="hidden rounded-full bg-beyond-gold px-6 py-2 text-sm font-semibold text-beyond-dark transition-colors hover:bg-beyond-olive hover:text-white md:inline-block"
          >
            Book Now
          </a>

          {/* Hamburger, animates into an X when the drawer is open */}
          <button
            className="relative z-50 h-6 w-6 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`absolute left-0 top-1 h-0.5 w-6 bg-white transition-transform duration-300 motion-reduce:transition-none ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-6 bg-white transition-opacity duration-300 motion-reduce:transition-none ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-5 h-0.5 w-6 bg-white transition-transform duration-300 motion-reduce:transition-none ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Backdrop and drawer are rendered outside <header> on purpose.
          <header> has backdrop-blur-md, and backdrop-filter on an
          ancestor creates a new containing block for fixed-position
          descendants, which was confining these to header's own
          72px-tall box instead of the full viewport. Keeping them as
          siblings of header, not children, restores true viewport-fixed
          positioning. */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        style={{ backgroundColor: "rgba(42, 32, 13, 0.7)" }}
        className={`fixed inset-0 z-40 font-beyond-sans transition-opacity duration-300 motion-reduce:transition-none md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
        style={{ backgroundColor: "#2A200D" }}
        className={`fixed right-0 top-0 z-50 flex h-full w-72 max-w-[80%] flex-col gap-2 px-6 py-8 font-beyond-sans transition-transform duration-300 ease-out motion-reduce:transition-none md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="mt-16 flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-lg text-white/90 transition-colors hover:text-beyond-gold"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#book-now"
          onClick={() => setMenuOpen(false)}
          className="mt-auto rounded-full bg-beyond-gold px-6 py-3 text-center text-sm font-semibold text-beyond-dark transition-colors hover:bg-beyond-olive hover:text-white"
        >
          Book Now
        </a>
      </div>
    </>
  );
}