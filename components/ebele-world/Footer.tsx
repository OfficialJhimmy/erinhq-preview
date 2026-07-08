const exploreLinks = [
  { label: "Pillars", href: "#pillars" },
  { label: "Founder", href: "#founder" },
  { label: "A New Dawn", href: "#new-dawn" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ebele-parchment/10 bg-ebele-plum px-6 py-16 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-ebele-display text-3xl italic text-ebele-parchment">
              Ebele&apos;s World
            </p>
            <p className="mt-3 max-w-xs font-ebele-sans text-sm text-ebele-parchment/60">
              Health, Fitness, Beauty, and Style, from Ebele Ezeamakam.
            </p>
          </div>

          <div>
            <h3 className="font-ebele-sans text-xs uppercase tracking-widest text-ebele-parchment/40">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-ebele-sans text-sm text-ebele-parchment/70 transition-colors hover:text-ebele-brass"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-ebele-sans text-xs uppercase tracking-widest text-ebele-parchment/40">
              Connect
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#contact"
                  className="font-ebele-sans text-sm text-ebele-parchment/70 transition-colors hover:text-ebele-brass"
                >
                  Message Us
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/ebelesworld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ebele-sans text-sm text-ebele-parchment/70 transition-colors hover:text-ebele-brass"
                >
                  @ebelesworld
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ebele-parchment/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-ebele-sans text-xs text-ebele-parchment/40">
            © {year} Ebele&apos;s World. All rights reserved.
          </p>
          <a
            href="#hero"
            className="font-ebele-sans text-xs text-ebele-parchment/40 transition-colors hover:text-ebele-brass"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}