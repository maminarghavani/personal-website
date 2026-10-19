import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ProjectContent } from "@/components/projects/project-content";
import { ProjectHeader } from "@/components/projects/project-header";
import { ProjectNavigation } from "@/components/projects/project-navigation";
import { getProjectMdxComponents } from "@/components/projects/mdx-components";
import { ProjectJsonLd } from "@/components/seo/project-json-ld";
import {
  getLocalizedAdjacentProjects,
  getLocalizedProject,
  getProjectSlugs,
} from "@/lib/projects";
import { siteConfig } from "@/lib/site";
interface PersianProjectPageProps {
  params: Promise<{ slug: string }>;
}
export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PersianProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  let project;

  try {
    project = getLocalizedProject("fa", slug);
  } catch {
    return {};
  }

  const canonicalUrl = `${siteConfig.url}/fa/projects/${project.slug}`;
  const englishUrl = `${siteConfig.url}/projects/${project.slug}`;
  const title = `${project.title} | ${siteConfig.name}`;
  const description = project.description;

  return {
    title: project.title,
    description,

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
    },

    twitter: {
      card: "summary",
      title,
      description,
    },

    keywords: project.technologies,
  };
}

export default async function PersianProjectPage({
  params,
}: PersianProjectPageProps) {
  const { slug } = await params;
  let project;
  try {
    project = getLocalizedProject("fa", slug);
  } catch {
    notFound();
  }
  const { previous, next } = getLocalizedAdjacentProjects("fa", slug);
  return (
    <div dir="rtl">
      {" "}
      <ProjectJsonLd
        title={project.title}
        description={project.description}
        slug={`fa/projects/${project.slug}`}
        technologies={project.technologies}
        year={project.year}
        role={project.role}
      />{" "}
      <ProjectHeader project={project} locale="fa" />{" "}
      <ProjectContent>
        {" "}
        <MDXRemote
          source={project.content}
          components={getProjectMdxComponents()}
        />{" "}
      </ProjectContent>{" "}
      <div className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        {" "}
        {(previous || next) && (
          <ProjectNavigation previous={previous} next={next} locale="fa" />
        )}{" "}
      </div>{" "}
    </div>
  );
}
