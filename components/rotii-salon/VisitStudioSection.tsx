import VisitHero from "./VisitHero";
import StudioInfo from "./StudioInfo";
import MapPreview from "./MapPreview";
import TravelInfo from "./TravelInfo";
import AmenitiesStrip from "./AmenitiesStrip";
import EditorialQuote from "./EditorialQuote";
import BookingInvitation from "./BookingInvitation";

export default function VisitStudioSection() {
  return (
    <section id="location" className="bg-white">
      <VisitHero />
      <StudioInfo />

      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 md:px-16 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-16">
        <MapPreview />
        <TravelInfo />
      </div>

      <AmenitiesStrip />
      <EditorialQuote />

      <div className="mx-auto max-w-6xl px-6 pb-20 md:px-16">
        <BookingInvitation />
      </div>
    </section>
  );
}