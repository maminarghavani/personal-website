import type { Locale } from "@/lib/i18n/config";
import type { Project } from "@/lib/projects";
import { ProjectCard } from "./project-card";
interface ProjectGridProps {
  projects: Project[];
  locale?: Locale;
  emptyMessage?: string;
}
export function ProjectGrid({
  projects,
  locale = "en",
  emptyMessage = "No projects have been published yet.",
}: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border/70 p-10 text-center">
        {" "}
        <p className="text-sm text-muted-foreground">{emptyMessage}</p>{" "}
      </div>
    );
  }
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {" "}
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} locale={locale} />
      ))}{" "}
    </div>
  );
}
