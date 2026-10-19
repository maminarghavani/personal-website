import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Locale } from "@/lib/i18n/config";
export interface BlogFrontmatter {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  readingTime: string;
  featured: boolean;
}
export interface BlogPost extends BlogFrontmatter {
  slug: string;
  content: string;
}
const blogDirectory = path.join(process.cwd(), "src", "content", "blog");
const localizedBlogDirectory = path.join(blogDirectory, "fa");
function parseBlogFile(filePath: string, slug: string): BlogPost {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Blog post "${slug}" was not found.`);
  }
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    publishedAt: String(data.publishedAt),
    updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
    category: String(data.category),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingTime: String(data.readingTime),
    featured: Boolean(data.featured),
    content,
  };
}
function readBlogFile(slug: string): BlogPost {
  return parseBlogFile(path.join(blogDirectory, `${slug}.mdx`), slug);
}
function readLocalizedBlogFile(locale: Locale, slug: string): BlogPost {
  if (locale === "en") {
    return readBlogFile(slug);
  }
  return parseBlogFile(path.join(localizedBlogDirectory, `${slug}.mdx`), slug);
}
function sortBlogPosts(posts: BlogPost[], locale: Locale): BlogPost[] {
  return posts.sort((a, b) => {
    const dateDifference =
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    if (dateDifference !== 0) {
      return dateDifference;
    }
    return a.title.localeCompare(b.title, locale);
  });
}
export function getBlogSlugs(): string[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }
  return fs
    .readdirSync(blogDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}
export function getBlogPost(slug: string): BlogPost {
  return readBlogFile(slug);
}
export function getBlogPosts(): BlogPost[] {
  return sortBlogPosts(getBlogSlugs().map(readBlogFile), "en");
}
export function getFeaturedBlogPosts(): BlogPost[] {
  return getBlogPosts().filter((post) => post.featured);
}
export function getAdjacentBlogPosts(slug: string): {
  previous: BlogPost | null;
  next: BlogPost | null;
} {
  const posts = getBlogPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }
  return { previous: posts[index + 1] ?? null, next: posts[index - 1] ?? null };
}
export function getLocalizedBlogPost(locale: Locale, slug: string): BlogPost {
  return readLocalizedBlogFile(locale, slug);
}
export function getLocalizedBlogPosts(locale: Locale): BlogPost[] {
  const posts = getBlogSlugs().map((slug) =>
    readLocalizedBlogFile(locale, slug),
  );
  return sortBlogPosts(posts, locale);
}
export function getLocalizedFeaturedBlogPosts(locale: Locale): BlogPost[] {
  return getLocalizedBlogPosts(locale).filter((post) => post.featured);
}
export function getLocalizedAdjacentBlogPosts(
  locale: Locale,
  slug: string,
): { previous: BlogPost | null; next: BlogPost | null } {
  const posts = getLocalizedBlogPosts(locale);
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }
  return { previous: posts[index + 1] ?? null, next: posts[index - 1] ?? null };
}
