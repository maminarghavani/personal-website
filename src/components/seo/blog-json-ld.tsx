import { siteConfig } from "@/lib/site";

import { JsonLd } from "./json-ld";

interface BlogJsonLdProps {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
}

function normalizePath(path: string): string {
  const cleanPath = path.replace(/^\/+|\/+$/g, "");
  return `/${cleanPath}`;
}

export function BlogJsonLd({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
  category,
  tags,
}: BlogJsonLdProps) {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const articlePath = normalizePath(slug);
  const articleUrl = `${baseUrl}${articlePath}`;
  const isPersian = articlePath.startsWith("/fa/");
  const blogPath = isPersian ? "/fa/blog" : "/blog";
  const blogUrl = `${baseUrl}${blogPath}`;

  const personId = `${baseUrl}/#person`;
  const articleId = `${articleUrl}#article`;
  const websiteId = `${baseUrl}/#website`;

  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": articleId,

    headline: title,
    description,
    url: articleUrl,
    inLanguage: isPersian ? "fa" : "en",

    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,

    author: {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      url: baseUrl,
    },

    publisher: {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      url: baseUrl,
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
      url: articleUrl,
      isPartOf: {
        "@id": websiteId,
      },
    },

    articleSection: category,
    keywords: tags,

    isPartOf: {
      "@type": "Blog",
      "@id": `${blogUrl}#blog`,
      name: `${siteConfig.name} Blog`,
      url: blogUrl,
      inLanguage: isPersian ? "fa" : "en",
    },
  };

  return <JsonLd data={data} />;
}
