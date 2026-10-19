import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { BlogContent } from "@/components/blog/blog-content";
import { BlogHeader } from "@/components/blog/blog-header";
import { getBlogMdxComponents } from "@/components/blog/mdx-components";
import { BlogJsonLd } from "@/components/seo/blog-json-ld";
import { getBlogSlugs, getLocalizedBlogPost } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

interface PersianBlogPostPageProps {
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
}: PersianBlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  let post;

  try {
    post = getLocalizedBlogPost("fa", slug);
  } catch {
    return {};
  }

  const canonicalUrl = `${siteConfig.url}/fa/blog/${post.slug}`;
  const englishUrl = `${siteConfig.url}/blog/${post.slug}`;
  const title = `${post.title} | ${siteConfig.name}`;
  const description = post.description;

  return {
    title: post.title,
    description,
    keywords: post.tags,

    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: englishUrl,
        fa: canonicalUrl,
        "x-default": englishUrl,
      },
    },

    openGraph: {
      type: "article",
      url: canonicalUrl,
      title,
      description,
      siteName: siteConfig.name,
      locale: "fa_IR",
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

export default async function PersianBlogPostPage({
  params,
}: PersianBlogPostPageProps) {
  const { slug } = await params;

  let post;

  try {
    post = getLocalizedBlogPost("fa", slug);
  } catch {
    notFound();
  }

  return (
    <div dir="rtl">
      <BlogJsonLd
        title={post.title}
        description={post.description}
        slug={`fa/blog/${post.slug}`}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        category={post.category}
        tags={post.tags}
      />

      <BlogHeader post={post} locale="fa" />

      <BlogContent>
        <MDXRemote source={post.content} components={getBlogMdxComponents()} />
      </BlogContent>
    </div>
  );
}
