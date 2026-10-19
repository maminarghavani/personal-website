import Link from "next/link";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Locale } from "@/lib/i18n/config";
import type { BlogPost } from "@/lib/blog";
interface BlogCardProps {
  post: BlogPost;
  locale?: Locale;
}
export function BlogCard({ post, locale = "en" }: BlogCardProps) {
  const isPersian = locale === "fa";
  const href = isPersian ? `/fa/blog/${post.slug}` : `/blog/${post.slug}`;
  const ArrowIcon = isPersian ? ArrowUpLeft : ArrowUpRight;
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 transition-colors hover:border-foreground/20 sm:p-8"
    >
      {" "}
      <div className="flex items-start justify-between gap-6">
        {" "}
        <Badge variant="secondary">{post.category}</Badge>{" "}
        <ArrowIcon
          className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
          aria-hidden="true"
        />{" "}
      </div>{" "}
      <h2 className="mt-6 font-heading text-2xl font-semibold tracking-tight">
        {" "}
        {post.title}{" "}
      </h2>{" "}
      <p className="mt-4 flex-1 leading-7 text-muted-foreground">
        {" "}
        {post.description}{" "}
      </p>{" "}
      <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
        {" "}
        <time dateTime={post.publishedAt}>
          {" "}
          {new Date(post.publishedAt).toLocaleDateString(
            isPersian ? "fa-IR" : "en",
            { year: "numeric", month: "short", day: "numeric" },
          )}{" "}
        </time>{" "}
        <span aria-hidden="true">·</span> <span>{post.readingTime}</span>{" "}
      </div>{" "}
    </Link>
  );
}
