import { Badge } from "@/components/ui/badge";
import type { Locale } from "@/lib/i18n/config";
import type { Project } from "@/lib/projects";

interface ProjectHeaderProps {
  project: Project;
  locale?: Locale;
}

export function ProjectHeader({ project, locale = "en" }: ProjectHeaderProps) {
  const isPersian = locale === "fa";

  return (
    <header
      dir={isPersian ? "rtl" : "ltr"}
      className="mx-auto w-full max-w-4xl border-b border-border/60 px-5 pb-10 sm:px-8 sm:pb-12 lg:px-10"
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary">{project.category}</Badge>
        <Badge variant="outline">{project.status}</Badge>
      </div>

      <h1 className="mt-6 max-w-4xl text-balance font-heading text-4xl font-semibold tracking-[-0.035em] sm:text-6xl lg:text-7xl">
        {project.title}
      </h1>

      <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
        {project.description}
      </p>

      <dl className="mt-10 grid gap-6 border-t border-border/60 pt-8 sm:grid-cols-3">
        <div>
          <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {isPersian ? "نقش" : "Role"}
          </dt>
          <dd className="mt-2 text-sm font-medium">{project.role}</dd>
        </div>

        <div>
          <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {isPersian ? "بازه زمانی" : "Timeline"}
          </dt>
          <dd className="mt-2 text-sm font-medium">{project.year}</dd>
        </div>

        <div>
          <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {isPersian ? "فناوری‌ها" : "Stack"}
          </dt>
          <dd className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
            {project.technologies.map((technology) => (
              <span key={technology} className="text-sm text-muted-foreground">
                {technology}
              </span>
            ))}
          </dd>
        </div>
      </dl>
    </header>
  );
}
