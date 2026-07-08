// Real contact details confirmed from BEYOND's own pages.
const ADDRESS = "18 Amodu Ojikutu Street, Victoria Island, Lagos";
const PHONE = "+234 907 436 6425";
const EMAIL = "info@beyondng.com";
const INSTAGRAM_HANDLE = "@beyondfitnessng";
const INSTAGRAM_URL = "https://instagram.com/beyondfitnessng";

// Built from the real address above. This is a genuine, working Google
// Maps link, not a placeholder, even though the map itself is an
// illustration rather than an embedded map.
const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=18%20Amodu%20Ojikutu%20Street%2C%20Victoria%20Island%2C%20Lagos";

export default function ContactLocation() {
  return (
    <section id="contact" className="bg-beyond-dark px-6 py-24 md:px-16">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 font-beyond-sans text-sm uppercase tracking-widest text-beyond-gold">
            Visit Us
          </p>
          <h2 className="font-beyond-display text-3xl text-white md:text-5xl">
            One Studio. Victoria Island.
          </h2>
          <p className="mt-4 max-w-md font-beyond-sans text-white/70">
            No locator, no franchise map, just one address worth knowing.
          </p>

          <dl className="mt-10 space-y-6 font-beyond-sans">
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/40">
                Address
              </dt>
              <dd className="mt-1 text-lg text-white">{ADDRESS}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/40">
                Phone
              </dt>
              <dd className="mt-1 text-lg text-white">
                <a href={`tel:${PHONE.replace(/\s+/g, "")}`} className="hover:text-beyond-gold">
                  {PHONE}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/40">
                Email
              </dt>
              <dd className="mt-1 text-lg text-white">
                <a href={`mailto:${EMAIL}`} className="hover:text-beyond-gold">
                  {EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/40">
                Instagram
              </dt>
              <dd className="mt-1 text-lg text-white">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-beyond-gold"
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </dd>
            </div>
          </dl>

          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-beyond-gold px-8 py-3 font-beyond-sans font-semibold text-beyond-dark transition-colors hover:bg-beyond-olive hover:text-white"
          >
            Get Directions
          </a>
        </div>

        <div className="relative aspect-square overflow-hidden rounded-2xl border border-beyond-olive/30 bg-beyond-dark">
          {/* Abstract illustrated street grid, not a real map tile, since
              this is a stylistic single-pin illustration rather than an
              embedded map. */}
          <svg
            viewBox="0 0 400 400"
            className="absolute inset-0 h-full w-full opacity-20"
            aria-hidden="true"
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 45 + 10}
                x2="400"
                y2={i * 45 + 10}
                stroke="#E8D083"
                strokeWidth="1"
              />
            ))}
            {Array.from({ length: 9 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 45 + 10}
                y1="0"
                x2={i * 45 + 10}
                y2="400"
                stroke="#E8D083"
                strokeWidth="1"
              />
            ))}
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="relative flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-beyond-gold opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-beyond-gold" />
            </span>
          </div>

          <p className="absolute bottom-6 left-1/2 w-max -translate-x-1/2 rounded-full border border-beyond-gold/40 bg-beyond-dark px-4 py-1.5 font-beyond-sans text-xs uppercase tracking-widest text-white/70">
            Victoria Island, Lagos
          </p>
        </div>
      </div>
    </section>
  );
}