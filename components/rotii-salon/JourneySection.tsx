import PaperTexture from "./PaperTexture";
import JournalHeader from "./JournalHeader";
import FeaturedStory from "./FeaturedStory";
import EditorialStoryList from "./EditorialStylist";
import EditorialQuote from "./EditorialQuote";
import MagazineGrid from "./MagazineGrid";
import NewsletterInvitation from "./NewsletterInvitation";
import BotanicalIllustration from "./BotanicalIllustration";
import { featuredStory, editorialList, magazineGrid } from "./blogData";

export default function JournalSection() {
  return (
    <section id="journal" className="relative overflow-hidden bg-rotii-blush/5 py-20 md:py-28">
      <PaperTexture />
      <BotanicalIllustration className="absolute right-0 top-0 hidden opacity-70 lg:block" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-16">
        <JournalHeader />

        <div className="grid gap-10 lg:grid-cols-[1.7fr_1fr] lg:gap-16">
          <FeaturedStory story={featuredStory} />
          <EditorialStoryList stories={editorialList} />
        </div>

        {/* <div className="my-16 md:my-24">
          <EditorialQuote />
        </div> */}

        <MagazineGrid articles={magazineGrid} />

        <div className="relative mt-20">
          <NewsletterInvitation />
        </div>
      </div>
    </section>
  );
}