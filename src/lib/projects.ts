import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import type { Locale } from "@/lib/i18n/config";

export interface ProjectFrontmatter {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  status: string;
  featured: boolean;
  year: string;
  role: string;
}

export interface Project extends ProjectFrontmatter {
  slug: string;
  content: string;
}

const projectsDirectory = path.join(
  process.cwd(),
  "src",
  "content",
  "projects",
);

const localizedProjectsDirectory = path.join(projectsDirectory, "fa");

function parseProjectFile(filePath: string, slug: string): Project {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Project "${slug}" was not found.`);
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    category: String(data.category),
    technologies: Array.isArray(data.technologies)
      ? data.technologies.map(String)
      : [],
    status: String(data.status),
    featured: Boolean(data.featured),
    year: String(data.year),
    role: String(data.role),
    content,
  };
}

function readProjectFile(slug: string): Project {
  return parseProjectFile(path.join(projectsDirectory, `${slug}.mdx`), slug);
}

function readLocalizedProjectFile(locale: Locale, slug: string): Project {
  if (locale === "en") {
    return readProjectFile(slug);
  }

  return parseProjectFile(
    path.join(localizedProjectsDirectory, `${slug}.mdx`),
    slug,
  );
}

export function getProjectSlugs(): string[] {
  return fs
    .readdirSync(projectsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export function getProject(slug: string): Project {
  return readProjectFile(slug);
}

export function getProjects(): Project[] {
  return getProjectSlugs()
    .map(readProjectFile)
    .sort((a, b) => {
      if (a.featured !== b.featured) {
        return a.featured ? -1 : 1;
      }

      return a.title.localeCompare(b.title);
    });
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((project) => project.featured);
}

export function getAdjacentProjects(slug: string): {
  previous: Project | null;
  next: Project | null;
} {
  const projects = getProjects();
  const index = projects.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return {
      previous: null,
      next: null,
    };
  }

  return {
    previous: projects[index - 1] ?? null,
    next: projects[index + 1] ?? null,
  };
}

export function getLocalizedProject(locale: Locale, slug: string): Project {
  return readLocalizedProjectFile(locale, slug);
}

export function getLocalizedProjects(locale: Locale): Project[] {
  return getProjectSlugs()
    .map((slug) => readLocalizedProjectFile(locale, slug))
    .sort((a, b) => {
      if (a.featured !== b.featured) {
        return a.featured ? -1 : 1;
      }

      return a.title.localeCompare(b.title, locale);
    });
}

export function getLocalizedAdjacentProjects(
  locale: Locale,
  slug: string,
): {
  previous: Project | null;
  next: Project | null;
} {
  const projects = getLocalizedProjects(locale);
  const index = projects.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return {
      previous: null,
      next: null,
    };
  }

  return {
    previous: projects[index - 1] ?? null,
    next: projects[index + 1] ?? null,
  };
}
