import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Locale } from "@/lib/i18n/config";
import type { Project } from "@/lib/projects";
interface ProjectCardProps {
  project: Project;
  locale?: Locale;
}
export function ProjectCard({ project, locale = "en" }: ProjectCardProps) {
  const href =
    locale === "fa"
      ? `/fa/projects/${project.slug}`
      : `/projects/${project.slug}`;
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 transition-colors hover:border-foreground/20 sm:p-8"
    >
      {" "}
      <div className="flex items-start justify-between gap-6">
        {" "}
        <div>
          {" "}
          <Badge variant="secondary">{project.category}</Badge>{" "}
          <h2 className="mt-6 font-heading text-2xl font-semibold tracking-tight">
            {" "}
            {project.title}{" "}
          </h2>{" "}
        </div>{" "}
        <ArrowUpRight
          className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
          aria-hidden="true"
        />{" "}
      </div>{" "}
      <p className="mt-4 flex-1 leading-7 text-muted-foreground">
        {" "}
        {project.description}{" "}
      </p>{" "}
      <div className="mt-8 flex flex-wrap gap-2">
        {" "}
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-border/70 px-2.5 py-1 text-xs text-muted-foreground"
          >
            {" "}
            {technology}{" "}
          </span>
        ))}{" "}
      </div>{" "}
      <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-5 text-xs text-muted-foreground">
        {" "}
        <span>{project.year}</span> <span>{project.status}</span>{" "}
      </div>{" "}
    </Link>
  );
}
