import { siteConfig } from "@/lib/site";

import { JsonLd } from "./json-ld";

interface ProjectJsonLdProps {
  title: string;
  description: string;
  slug: string;
  technologies: string[];
  year: string;
  role: string;
}

function normalizePath(path: string): string {
  const cleanPath = path.replace(/^\/+|\/+$/g, "");
  return `/${cleanPath}`;
}

export function ProjectJsonLd({
  title,
  description,
  slug,
  technologies,
  year,
  role,
}: ProjectJsonLdProps) {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const projectPath = normalizePath(slug);
  const projectUrl = `${baseUrl}${projectPath}`;
  const isPersian = projectPath.startsWith("/fa/");
  const projectsPath = isPersian ? "/fa/projects" : "/projects";
  const projectsUrl = `${baseUrl}${projectsPath}`;

  const personId = `${baseUrl}/#person`;
  const projectId = `${projectUrl}#project`;
  const websiteId = `${baseUrl}/#website`;

  const data = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": projectId,

    name: title,
    headline: title,
    description,
    url: projectUrl,
    inLanguage: isPersian ? "fa" : "en",

    dateCreated: `${year}-01-01`,

    author: {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      url: baseUrl,
    },

    creator: {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      url: baseUrl,
    },

    keywords: technologies,

    about: technologies.map((technology) => ({
      "@type": "Thing",
      name: technology,
    })),

    abstract: `${role} on ${title}. ${description}`,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": projectUrl,
      url: projectUrl,
      isPartOf: {
        "@id": websiteId,
      },
    },

    isPartOf: {
      "@type": "CollectionPage",
      "@id": `${projectsUrl}#collection`,
      name: `${siteConfig.name} Projects`,
      url: projectsUrl,
      inLanguage: isPersian ? "fa" : "en",
    },
  };

  return <JsonLd data={data} />;
}
