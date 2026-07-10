import { AudioLines, Target } from "lucide-react";
import EditorialCTA from "./EditorialCTA";
import Quote from "./Quote";
import Signature from "./Signature";
import ContactSectionHeader from "./ContactSectionHeader";
import ContactPath from "./ContactPath";

const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

// Simple three-overlapping-circles motif for Partnerships, since no
// standard Lucide icon matches it.
function PartnershipIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="15" cy="9" r="6" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="14" r="6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 md:px-16 lg:min-h-[110vh] lg:px-24"
      style={{ backgroundColor: "#0D1014" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
      />

      <div className="relative mx-auto max-w-[1600px]">
        <ContactSectionHeader />

        <div className="mt-20 grid gap-14 divide-y divide-white/10 sm:grid-cols-3 sm:gap-8 sm:divide-x sm:divide-y-0">
          <div className="sm:pr-8">
            <ContactPath
              number="01"
              icon={<AudioLines size={22} strokeWidth={1.3} />}
              heading={
                <>
                  Speaking
                  <br />
                  Engagements
                </>
              }
              copy="From boardrooms to global summits, conversations that inspire action."
            />
          </div>

          <div className="pt-14 sm:px-8 sm:pt-0">
            <ContactPath
              number="02"
              icon={<PartnershipIcon />}
              heading="Partnerships"
              copy="Working with organisations building a more sustainable future."
            />
          </div>

          <div className="pt-14 sm:pl-8 sm:pt-0">
            <ContactPath
              number="03"
              icon={<Target size={22} strokeWidth={1.3} />}
              heading={
                <>
                  Media &amp;
                  <br />
                  Interviews
                </>
              }
              copy="Sharing insights on climate, entrepreneurship and systems change."
            />
          </div>
        </div>

        <div className="mt-24">
          <EditorialCTA />
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
          <Quote />

          <div className="relative hidden h-px flex-1 bg-damilola-gold-dark/25 sm:block">
            <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-damilola-gold-dark" />
          </div>

          <Signature />
        </div>
      </div>
    </section>
  );
}