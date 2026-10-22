import type { MetadataRoute } from "next";

import { getBlogPosts, getLocalizedBlogPosts } from "@/lib/blog";
import { getProjects, getLocalizedProjects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const baseUrl = siteConfig.url.replace(/\/$/, "");

function absoluteUrl(path: string): string {
  return `${baseUrl}${path}`;
}

function languageAlternates(englishPath: string, persianPath: string) {
  const englishUrl = absoluteUrl(englishPath);

  return {
    languages: {
      en: englishUrl,
      fa: absoluteUrl(persianPath),
      "x-default": englishUrl,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { en: "/", fa: "/fa", frequency: "monthly", priority: 1 },
    { en: "/about", fa: "/fa/about", frequency: "monthly", priority: 0.8 },
    {
      en: "/projects",
      fa: "/fa/projects",
      frequency: "monthly",
      priority: 0.9,
    },
    {
      en: "/experience",
      fa: "/fa/experience",
      frequency: "monthly",
      priority: 0.8,
    },
    {
      en: "/blog",
      fa: "/fa/blog",
      frequency: "weekly",
      priority: 0.9,
    },
    {
      en: "/contact",
      fa: "/fa/contact",
      frequency: "monthly",
      priority: 0.7,
    },
  ] as const;

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: absoluteUrl(page.en),
    changeFrequency: page.frequency,
    priority: page.priority,
    alternates: languageAlternates(page.en, page.fa),
  }));

  const persianStaticRoutes: MetadataRoute.Sitemap = staticPages.map(
    (page) => ({
      url: absoluteUrl(page.fa),
      changeFrequency: page.frequency,
      priority: page.priority,
      alternates: languageAlternates(page.en, page.fa),
    }),
  );

  const englishProjects = getProjects();
  const persianProjects = getLocalizedProjects("fa");

  const englishProjectSlugs = new Set(
    englishProjects.map((project) => project.slug),
  );
  const persianProjectSlugs = new Set(
    persianProjects.map((project) => project.slug),
  );

  const projectRoutes: MetadataRoute.Sitemap = [
    ...englishProjects.map((project) => {
      const englishPath = `/projects/${project.slug}`;
      const persianPath = `/fa/projects/${project.slug}`;
      const hasTranslation = persianProjectSlugs.has(project.slug);

      return {
        url: absoluteUrl(englishPath),
        changeFrequency: "monthly" as const,
        priority: 0.8,
        ...(hasTranslation
          ? {
              alternates: languageAlternates(englishPath, persianPath),
            }
          : {}),
      };
    }),

    ...persianProjects.map((project) => {
      const englishPath = `/projects/${project.slug}`;
      const persianPath = `/fa/projects/${project.slug}`;
      const hasTranslation = englishProjectSlugs.has(project.slug);

      return {
        url: absoluteUrl(persianPath),
        changeFrequency: "monthly" as const,
        priority: 0.8,
        ...(hasTranslation
          ? {
              alternates: languageAlternates(englishPath, persianPath),
            }
          : {}),
      };
    }),
  ];

  const englishPosts = getBlogPosts();
  const persianPosts = getLocalizedBlogPosts("fa");

  const englishPostSlugs = new Set(englishPosts.map((post) => post.slug));
  const persianPostSlugs = new Set(persianPosts.map((post) => post.slug));

  const blogRoutes: MetadataRoute.Sitemap = [
    ...englishPosts.map((post) => {
      const englishPath = `/blog/${post.slug}`;
      const persianPath = `/fa/blog/${post.slug}`;
      const hasTranslation = persianPostSlugs.has(post.slug);

      return {
        url: absoluteUrl(englishPath),
        lastModified: new Date(post.updatedAt ?? post.publishedAt),
        changeFrequency: "monthly" as const,
        priority: post.featured ? 0.8 : 0.7,
        ...(hasTranslation
          ? {
              alternates: languageAlternates(englishPath, persianPath),
            }
          : {}),
      };
    }),

    ...persianPosts.map((post) => {
      const englishPath = `/blog/${post.slug}`;
      const persianPath = `/fa/blog/${post.slug}`;
      const hasTranslation = englishPostSlugs.has(post.slug);

      return {
        url: absoluteUrl(persianPath),
        lastModified: new Date(post.updatedAt ?? post.publishedAt),
        changeFrequency: "monthly" as const,
        priority: post.featured ? 0.8 : 0.7,
        ...(hasTranslation
          ? {
              alternates: languageAlternates(englishPath, persianPath),
            }
          : {}),
      };
    }),
  ];

  return [
    ...staticRoutes,
    ...persianStaticRoutes,
    ...projectRoutes,
    ...blogRoutes,
  ];
}
