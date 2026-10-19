import { Badge } from "@/components/ui/badge";
import type { Locale } from "@/lib/i18n/config";
import type { BlogPost } from "@/lib/blog";

interface BlogHeaderProps {
  post: BlogPost;
  locale?: Locale;
}

function formatDate(date: Date, locale: Locale, includeMonthShort = false) {
  return date.toLocaleDateString(locale === "fa" ? "fa-IR" : "en-US", {
    year: "numeric",
    month: includeMonthShort ? "short" : "long",
    day: "numeric",
  });
}

export function BlogHeader({ post, locale = "en" }: BlogHeaderProps) {
  const isPersian = locale === "fa";
  const publishedDate = new Date(post.publishedAt);
  const updatedDate = post.updatedAt ? new Date(post.updatedAt) : null;

  return (
    <header
      dir={isPersian ? "rtl" : "ltr"}
      className="mx-auto w-full max-w-4xl border-b border-border/60 px-5 pb-10 sm:px-8 sm:pb-12 lg:px-10"
    >
      <Badge variant="secondary">{post.category}</Badge>

      <h1 className="mt-6 max-w-4xl text-balance font-heading text-4xl font-semibold tracking-[-0.035em] sm:text-6xl lg:text-7xl">
        {post.title}
      </h1>

      <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
        {post.description}
      </p>

      <dl className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <dt className="sr-only">
            {isPersian ? "تاریخ انتشار" : "Published"}
          </dt>
          <dd>
            <time dateTime={post.publishedAt}>
              {formatDate(publishedDate, locale)}
            </time>
          </dd>
        </div>

        <span aria-hidden="true">·</span>

        <div className="flex items-center gap-2">
          <dt className="sr-only">
            {isPersian ? "زمان مطالعه" : "Reading time"}
          </dt>
          <dd>{post.readingTime}</dd>
        </div>

        {updatedDate && (
          <>
            <span aria-hidden="true">·</span>

            <div className="flex items-center gap-2">
              <dt>{isPersian ? "به‌روزرسانی:" : "Updated"}</dt>
              <dd>
                <time dateTime={post.updatedAt}>
                  {formatDate(updatedDate, locale, true)}
                </time>
              </dd>
            </div>
          </>
        )}
      </dl>

      {post.tags.length > 0 && (
        <ul
          aria-label={isPersian ? "برچسب‌ها" : "Article tags"}
          className="mt-7 flex flex-wrap gap-2"
        >
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-border/70 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
