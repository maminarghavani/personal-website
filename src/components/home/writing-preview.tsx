import Link from "next/link";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";

import type { Locale } from "@/lib/i18n/config";
import { getHomeContent } from "@/lib/home";
import { getLocalizedBlogPosts } from "@/lib/blog";
import { SectionHeading } from "@/components/home/section-heading";
import { Button } from "@/components/ui/button";

interface WritingPreviewProps {
  locale?: Locale;
}

export function WritingPreview({ locale = "en" }: WritingPreviewProps) {
  const content = getHomeContent(locale).writing;
  const isPersian = locale === "fa";

  const posts = getLocalizedBlogPosts(locale).slice(0, 2);
  const blogHref = isPersian ? "/fa/blog" : "/blog";

  return (
    <section
      className="border-t border-border/60 py-24 sm:py-32"
      dir={isPersian ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`${blogHref}/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-border/70 bg-card/40 p-6 transition-colors duration-200 hover:border-foreground/25 hover:bg-muted/30 sm:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-xs text-muted-foreground">
                  {post.category}
                </span>
              </div>

              <h3
                className={`mt-8 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-foreground/80 sm:text-2xl ${
                  isPersian ? "font-persian leading-relaxed" : ""
                }`}
              >
                {post.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                {post.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/70 px-2 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-foreground">
                <span>{isPersian ? "ادامه مطلب" : "Read article"}</span>

                {isPersian ? (
                  <ArrowUpLeft
                    aria-hidden="true"
                    className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                ) : (
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-start">
          <Button
            render={
              <Link href={blogHref} className="inline-flex items-center gap-2">
                <span>{content.viewAll}</span>

                {isPersian ? (
                  <ArrowUpLeft aria-hidden="true" className="size-4" />
                ) : (
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                )}
              </Link>
            }
            variant="outline"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
