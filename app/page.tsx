import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  title: "Preview Builds",
};

const previews = [
  {
    name: "BEYOND Fitness",
    slug: "beyond-fitness",
    description: "Boutique fitness studio, Victoria Island, Lagos.",
  },
  {
    name: "Ebele's World",
    slug: "ebeles-world",
    description: "Health, Fitness, Beauty, and Style, from Ebele Ezeamakam.",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 py-24">
      <h1 className="text-2xl font-semibold text-neutral-900">
        Preview Builds
      </h1>
      <p className="mt-2 text-sm text-neutral-500">
        Internal index. Not meant to be shared, each business's own route
        is the actual deliverable.
      </p>

      <ul className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
        {previews.map((preview) => (
          <li key={preview.slug}>
            <Link
              href={`/${preview.slug}`}
              className="flex items-center justify-between py-5 transition-colors hover:bg-neutral-50"
            >
              <span>
                <span className="block font-medium text-neutral-900">
                  {preview.name}
                </span>
                <span className="mt-1 block text-sm text-neutral-500">
                  {preview.description}
                </span>
              </span>
              <span className="text-sm text-neutral-400">
                /{preview.slug} →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}