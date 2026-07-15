import EditorialStoryItem from "./EditorialStoryItem";
import type { Article } from "./blogData";

export default function EditorialStoryList({ stories }: { stories: Article[] }) {
  return (
    <div>
      {stories.map((story, i) => (
        <EditorialStoryItem
          key={story.slug}
          story={story}
          index={i}
          isLast={i === stories.length - 1}
        />
      ))}
    </div>
  );
}