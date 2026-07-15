import MagazineCard from "./MagazineCard";
import type { Article } from "./blogData";

export default function MagazineGrid({
  articles,
}: {
  articles: (Article & { size: "large" | "medium" | "small" })[];
}) {
  return (
    <div className="mt-16 md:mt-24">
      <div className="flex items-center justify-between">
        <p className="font-rotii-sans text-xs font-medium uppercase tracking-widest text-rotii-rosewood">
          More Stories
        </p>
        <a
          href="#"
          className="font-rotii-sans text-xs font-medium uppercase tracking-widest text-rotii-ink/60 hover:text-rotii-rosewood"
        >
          View All Articles →
        </a>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <MagazineCard key={article.slug} article={article} index={i} />
        ))}
      </div>
    </div>
  );
}