import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { BlogContent } from "@/components/blog/blog-content";
import { BlogHeader } from "@/components/blog/blog-header";
import { getBlogMdxComponents } from "@/components/blog/mdx-components";
import { BlogJsonLd } from "@/components/seo/blog-json-ld";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  const canonicalUrl = `${siteConfig.url}/blog/${post.slug}`;
  const persianUrl = `${siteConfig.url}/fa/blog/${post.slug}`;
  const title = `${post.title} | ${siteConfig.name}`;
  const description = post.description;

  return {
    title: post.title,
    description,
    keywords: post.tags,

    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: canonicalUrl,
        fa: persianUrl,
        "x-default": canonicalUrl,
      },
    },

    openGraph: {
      type: "article",
      url: canonicalUrl,
      title,
      description,
      siteName: siteConfig.name,
      locale: "en_US",
      publishedTime: post.publishedAt,
      ...(post.updatedAt ? { modifiedTime: post.updatedAt } : {}),
      authors: [siteConfig.name],
      section: post.category,
      tags: post.tags,
    },

    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogJsonLd
        title={post.title}
        description={post.description}
        slug={`blog/${post.slug}`}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        category={post.category}
        tags={post.tags}
      />

      <BlogHeader post={post} />

      <BlogContent>
        <MDXRemote source={post.content} components={getBlogMdxComponents()} />
      </BlogContent>
    </>
  );
}
