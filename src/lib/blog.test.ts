import { describe, expect, it } from "vitest";

import {
  getAdjacentBlogPosts,
  getBlogPost,
  getBlogPosts,
  getBlogSlugs,
  getFeaturedBlogPosts,
} from "@/lib/blog";

describe("blog content layer", () => {
  it("discovers MDX blog slugs", () => {
    const slugs = getBlogSlugs();

    expect(slugs).toContain("building-a-gps-platform");
  });

  it("loads a blog post from its slug", () => {
    const post = getBlogPost("building-a-gps-platform");

    expect(post.slug).toBe("building-a-gps-platform");
    expect(post.title).toBe(
      "Building a GPS Platform: From Devices to Real-Time Maps",
    );
    expect(post.description).toBeTruthy();
    expect(post.publishedAt).toBe("2026-09-24");
    expect(post.category).toBe("Engineering");
    expect(post.tags).toEqual([
      "GPS",
      "Backend",
      "Go",
      "NestJS",
      "PostgreSQL",
      "PostGIS",
      "Redis",
      "MapLibre",
    ]);
    expect(post.readingTime).toBe("10 min read");
    expect(post.featured).toBe(true);
    expect(post.content.trim()).not.toBe("");
  });

  it("returns posts sorted by publication date", () => {
    const posts = getBlogPosts();

    expect(posts.length).toBeGreaterThan(0);

    for (let index = 1; index < posts.length; index += 1) {
      const previousDate = new Date(posts[index - 1].publishedAt).getTime();
      const currentDate = new Date(posts[index].publishedAt).getTime();

      expect(previousDate).toBeGreaterThanOrEqual(currentDate);
    }
  });

  it("returns only featured posts", () => {
    const featuredPosts = getFeaturedBlogPosts();

    expect(featuredPosts.length).toBeGreaterThan(0);
    expect(featuredPosts.every((post) => post.featured)).toBe(true);
  });

  it("returns adjacent posts for an existing post", () => {
    const posts = getBlogPosts();

    const { previous, next } = getAdjacentBlogPosts(posts[0].slug);

    expect(previous).toBeNull();
    expect(next).toBeNull();
  });

  it("returns null neighbors for an unknown slug", () => {
    const result = getAdjacentBlogPosts("does-not-exist");

    expect(result).toEqual({
      previous: null,
      next: null,
    });
  });

  it("throws when requesting a missing blog post", () => {
    expect(() => getBlogPost("does-not-exist")).toThrow(
      'Blog post "does-not-exist" was not found.',
    );
  });
});
