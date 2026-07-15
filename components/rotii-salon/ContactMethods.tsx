import { contact } from "./locationData";

const methods = [
  {
    label: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, "")}`,
    icon: (
      <path d="M4 5c0 8 7 15 15 15l3-4-6-2-2 2c-2-1-4-3-5-5l2-2-2-6-4 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    label: contact.whatsapp,
    href: contact.whatsappHref,
    icon: (
      <path d="M12 3a9 9 0 00-7.5 13.9L3 21l4.3-1.4A9 9 0 1012 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    label: contact.email,
    href: `mailto:${contact.email}`,
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <path d="M4 6.5l8 6 8-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
  {
    label: contact.instagram,
    href: contact.instagramHref,
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" fill="none" />
      </>
    ),
  },
];

export default function ContactMethods() {
  return (
    <div>
      <p className="font-rotii-sans text-xs uppercase tracking-widest text-rotii-rosewood">
        Get In Touch
      </p>

      <ul className="mt-5 space-y-4">
        {methods.map((method) => (
          <li key={method.label}>
            <a
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 font-rotii-sans text-sm text-rotii-ink/80 transition-colors hover:text-rotii-rosewood"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-rotii-rosewood/25 text-rotii-rosewood">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  {method.icon}
                </svg>
              </span>
              {method.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-3">
        <a
          href="#booking"
          className="rounded-full bg-rotii-rosewood px-6 py-3 text-center font-rotii-sans text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          Reserve Your Experience
        </a>
        <a
          href={contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full border border-rotii-ink/15 px-6 py-3 font-rotii-sans text-sm font-medium text-rotii-ink transition-colors hover:border-rotii-rosewood/40"
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  );
}