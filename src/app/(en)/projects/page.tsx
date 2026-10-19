import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { ProjectGrid } from "@/components/projects/project-grid";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software projects spanning backend systems, connected devices, mobile applications, geospatial platforms, and web products.",
  alternates: {
    canonical: "/projects",
    languages: {
      en: "/projects",
      fa: "/fa/projects",
    },
  },
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="border-b border-border/60">
      <Container>
        <section className="py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">
              Selected work
            </p>

            <h1 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
              Projects I&apos;ve built.
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              A collection of products, platforms, and engineering projects
              covering backend systems, mobile applications, connected devices,
              geospatial data, and web experiences.
            </p>
          </div>

          <div className="mt-16">
            <ProjectGrid projects={projects} />
          </div>
        </section>
      </Container>
    </div>
  );
}
