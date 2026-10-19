import type { Locale } from "@/lib/i18n/config";
import type { BlogPost } from "@/lib/blog";
import { BlogCard } from "./blog-card";
interface BlogGridProps {
  posts: BlogPost[];
  locale?: Locale;
  emptyMessage?: string;
}
export function BlogGrid({
  posts,
  locale = "en",
  emptyMessage = "No articles have been published yet.",
}: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border/70 p-10 text-center">
        {" "}
        <p className="text-sm text-muted-foreground">{emptyMessage}</p>{" "}
      </div>
    );
  }
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {" "}
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} locale={locale} />
      ))}{" "}
    </div>
  );
}
