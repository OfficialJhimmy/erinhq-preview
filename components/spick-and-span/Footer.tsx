import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "Blog", href: "#blog" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

const hours = [
  { day: "Mon", time: "Closed" },
  { day: "Tue – Sat", time: "9:00 AM – 6:30 PM" },
  { day: "Sun", time: "2:00 PM – 6:30 PM" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/spicknspan_beauty_studio",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="17.3" cy="6.7" r="1" fill="currentColor" />
      </>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2348144468102",
    icon: (
      <>
        <path
          d="M12 3a9 9 0 00-7.5 13.9L3 21l4.3-1.4A9 9 0 1012 3z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M8.7 8.8c-.3.6-.4 1.4-.1 2.4.5 1.7 2.4 3.6 4.1 4.1 1 .3 1.8.2 2.4-.1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@spicknspanbeautystudio_",
    icon: (
      <>
        <path
          d="M13.5 3v11.2a3.3 3.3 0 11-2.8-3.3"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M13.5 3c.5 2.1 2.1 3.6 4.2 3.9"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-spicknspan-dark px-6 pt-16 md:px-16">
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-spicknspan-bg/10 pb-10 sm:flex-row sm:items-center">
          <Image
            src="/images/spick-and-span/spick-logo.png"
            alt="Spick & Span Beauty Studio"
            width={160}
            height={48}
            className="brightness-0 invert h-16 w-auto md:h-32"
          />

          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-spicknspan-sans text-sm text-spicknspan-bg/55 transition-colors hover:text-spicknspan-oxblood-bright"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#hero"
            className="group flex items-center gap-2 font-spicknspan-sans text-sm text-spicknspan-bg/55 transition-colors hover:text-spicknspan-oxblood-bright"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-spicknspan-bg/20 transition-colors group-hover:border-spicknspan-oxblood-bright/60">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 19V5M12 5l-6 6M12 5l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>

        <div className="grid gap-10 divide-y divide-spicknspan-bg/10 py-12 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="sm:pr-10">
            <p className="font-spicknspan-sans text-xs uppercase tracking-widest text-spicknspan-oxblood-bright">
              Opening Hours
            </p>
            <ul className="mt-4 max-w-[220px] space-y-2">
              {hours.map((entry) => (
                <li key={entry.day} className="flex items-baseline gap-4 font-spicknspan-sans text-sm">
                  <span className="w-16 shrink-0 text-spicknspan-bg/55">{entry.day}</span>
                  <span className="text-spicknspan-bg/85">{entry.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-10 sm:px-10 sm:pt-0">
            <p className="font-spicknspan-sans text-xs uppercase tracking-widest text-spicknspan-oxblood-bright">
              Get in Touch
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+2348144468102"
                  className="flex items-center gap-2.5 font-spicknspan-sans text-sm text-spicknspan-bg/85 transition-colors hover:text-spicknspan-oxblood-bright"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4 5c0 8 7 15 15 15l3-4-6-2-2 2c-2-1-4-3-5-5l2-2-2-6-4 2z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                  +234 814 446 8102
                </a>
              </li>
              <li>
                <a
                  href="mailto:spickandspanunisex@gmail.com"
                  className="flex items-center gap-2.5 font-spicknspan-sans text-sm text-spicknspan-bg/85 transition-colors hover:text-spicknspan-oxblood-bright"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M4 6.5l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                  spickandspanunisex@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="pt-10 sm:pl-10 sm:pt-0">
            <p className="font-spicknspan-sans text-xs uppercase tracking-widest text-spicknspan-oxblood-bright">
              Follow Us
            </p>
            <div className="mt-4 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-spicknspan-bg/20 text-spicknspan-bg/70 transition-colors hover:border-spicknspan-oxblood-bright/60 hover:text-spicknspan-oxblood-bright"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex justify-center overflow-hidden border-t border-spicknspan-bg/10 py-4">
          <p
            aria-hidden="true"
            className="select-none whitespace-nowrap font-spicknspan-display leading-none"
            style={{
              fontSize: "clamp(2.5rem, 11vw, 8rem)",
              WebkitTextStroke: "1px rgba(141, 74, 40, 0.35)",
              color: "transparent",
            }}
          >
            Spick &amp; Span
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-spicknspan-bg/10 py-8 sm:flex-row sm:items-center">
          <p className="font-spicknspan-sans text-xs text-spicknspan-bg/40">
            {`© ${year} Spick & Span Beauty Studio. All rights reserved.`}
          </p>
          <p className="font-spicknspan-sans text-xs uppercase tracking-widest text-spicknspan-oxblood-bright">
            Premium Beauty &amp; Wellness Services
          </p>
        </div>
      </div>
    </footer>
  );
}