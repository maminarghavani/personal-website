import type { Metadata } from "next";

import { BlogGrid } from "@/components/blog/blog-grid";
import { Container } from "@/components/layout/container";
import { getLocalizedBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "وبلاگ",
  description:
    "یادداشت‌های فنی درباره سیستم‌های بک‌اند، دستگاه‌های متصل، پلتفرم‌های مکانی، معماری نرم‌افزار و مهندسی محصول.",
  alternates: {
    canonical: "/fa/blog",
    languages: {
      en: "/blog",
      fa: "/fa/blog",
    },
  },
  openGraph: {
    locale: "fa_IR",
    url: "/fa/blog",
  },
};

export default function PersianBlogPage() {
  const posts = getLocalizedBlogPosts("fa");

  return (
    <div className="border-b border-border/60" dir="rtl">
      <Container>
        <section className="py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">
              نوشته‌ها
            </p>

            <h1 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">
              یادداشت‌هایی از مسیر ساخت نرم‌افزار.
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
              یادداشت‌های فنی، درس‌های معماری و تجربه‌های عملی حاصل از کار روی
              سیستم‌های بک‌اند، دستگاه‌های متصل، اپلیکیشن‌های مکانی و مهندسی
              محصول.
            </p>
          </div>

          <div className="mt-16">
            <BlogGrid
              posts={posts}
              locale="fa"
              emptyMessage="هنوز مقاله‌ای منتشر نشده است."
            />
          </div>
        </section>
      </Container>
    </div>
  );
}
