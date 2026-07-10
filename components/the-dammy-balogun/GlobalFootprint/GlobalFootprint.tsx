import WorldMap from "./WorldMap";
import FloatingCard from "./FloatingCard";
import Timeline from "./Timeline";
import FooterCTA from "./FooterCTA";
import { footprintLocations } from "../data";
import SectionHeader from "../SectionHeader";
import GlobalSectionHeader from "./GlobalSectionHeader";

const featuredLocation = footprintLocations.find((l) => l.id === "usa")!;

// Subtle grain, no image file.
const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export default function GlobalFootprint() {
  return (
    <section
      id="travel"
      className="relative overflow-hidden px-6 py-24 md:px-16 lg:min-h-[130vh] lg:px-24"
      style={{ backgroundColor: "#0D1014" }}
    >
      {/* Background texture layers: grain, radial spotlight behind the
          map. Contour/lat-long lines are deferred to a later pass, since
          getting the map itself right matters more than decorative
          linework right now. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(197,154,67,0.15), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1600px]">
        <GlobalSectionHeader/>

        <div className="relative mt-16 grid gap-8 lg:grid-cols-[1fr_360px]">
          <WorldMap />
          <div className="flex items-start justify-center lg:justify-end">
            <FloatingCard location={featuredLocation} />
          </div>
        </div>

        <Timeline />
        <FooterCTA />
      </div>
    </section>
  );
}