import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  { label: "Classes", href: "#classes" },
  { label: "Workouts", href: "#workouts" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gift Cards", href: "#gift-cards" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-beyond-olive/20 bg-beyond-dark px-6 py-16 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link href="#hero" className="relative block h-10 w-32">
              <Image
                src="/images/beyond-fitness/beyond.jpeg"
                alt="BEYOND Fitness"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="mt-4 max-w-xs font-beyond-sans text-sm text-white/60">
              Personalised fitness solutions for individuals and
              corporations alike, based in Victoria Island, Lagos.
            </p>
          </div>

          <div>
            <h3 className="font-beyond-sans text-xs uppercase tracking-widest text-white/40">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-beyond-sans text-sm text-white/70 hover:text-beyond-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-beyond-sans text-xs uppercase tracking-widest text-white/40">
              Visit
            </h3>
            <p className="mt-4 font-beyond-sans text-sm text-white/70">
              18 Amodu Ojikutu Street
              <br />
              Victoria Island, Lagos
            </p>
            <a
              href="tel:+2349074366425"
              className="mt-3 block font-beyond-sans text-sm text-white/70 hover:text-beyond-gold"
            >
              +234 907 436 6425
            </a>
            <a
              href="mailto:info@beyondng.com"
              className="mt-1 block font-beyond-sans text-sm text-white/70 hover:text-beyond-gold"
            >
              info@beyondng.com
            </a>
            <a
              href="https://instagram.com/beyondfitnessng"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block font-beyond-sans text-sm text-white/70 hover:text-beyond-gold"
            >
              @beyondfitnessng
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-beyond-olive/20 pt-6">
          <p className="font-beyond-sans text-xs text-white/40">
            © {year} BEYOND Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}