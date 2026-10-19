import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { ProjectContent } from "@/components/projects/project-content";
import { ProjectHeader } from "@/components/projects/project-header";
import { ProjectJsonLd } from "@/components/seo/project-json-ld";
import { getProjectMdxComponents } from "@/components/projects/mdx-components";
import {
  getAdjacentProjects,
  getProject,
  getProjectSlugs,
} from "@/lib/projects";
import { siteConfig } from "@/lib/site";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  const canonicalUrl = `${siteConfig.url}/projects/${project.slug}`;
  const persianUrl = `${siteConfig.url}/fa/projects/${project.slug}`;
  const title = `${project.title} | ${siteConfig.name}`;
  const description = project.description;

  return {
    title: project.title,
    description,

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
    },

    twitter: {
      card: "summary",
      title,
      description,
    },

    keywords: project.technologies,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(slug);

  return (
    <>
      <ProjectJsonLd
        title={project.title}
        description={project.description}
        slug={`projects/${project.slug}`}
        technologies={project.technologies}
        year={project.year}
        role={project.role}
      />

      <ProjectHeader project={project} />

      <ProjectContent>
        <MDXRemote
          source={project.content}
          components={getProjectMdxComponents()}
        />
      </ProjectContent>

      {(previous || next) && (
        <div className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <div className="grid gap-4 sm:grid-cols-2">
            {previous && (
              <a
                href={`/projects/${previous.slug}`}
                className="rounded-xl border border-border/60 p-5 transition-colors hover:bg-accent/40"
              >
                <span className="text-xs text-muted-foreground">
                  Previous project
                </span>

                <span className="mt-2 block font-heading font-semibold">
                  {previous.title}
                </span>
              </a>
            )}

            {next && (
              <a
                href={`/projects/${next.slug}`}
                className="rounded-xl border border-border/60 p-5 transition-colors hover:bg-accent/40 sm:text-right"
              >
                <span className="text-xs text-muted-foreground">
                  Next project
                </span>

                <span className="mt-2 block font-heading font-semibold">
                  {next.title}
                </span>
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}
