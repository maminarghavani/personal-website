import type { Metadata } from "next";

import { BlogGrid } from "@/components/blog/blog-grid";
import { Container } from "@/components/layout/container";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Engineering notes on backend systems, connected devices, geospatial platforms, software architecture, and product engineering.",
  alternates: {
    canonical: "/blog",
    languages: {
      en: "/blog",
      fa: "/fa/blog",
    },
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="border-b border-border/60">
      <Container>
        <section className="py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">Writing</p>

            <h1 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">
              Notes from building software.
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
              Technical notes, architectural lessons, and practical observations
              from working on backend systems, connected devices, geospatial
              applications, and product engineering.
            </p>
          </div>

          <div className="mt-16">
            <BlogGrid posts={posts} />
          </div>
        </section>
      </Container>
    </div>
  );
}
