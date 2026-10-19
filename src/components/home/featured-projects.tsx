import Link from "next/link";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";

import type { Locale } from "@/lib/i18n/config";
import { getHomeContent } from "@/lib/home";
import { getLocalizedProjects } from "@/lib/projects";
import { SectionHeading } from "@/components/home/section-heading";
import { Button } from "@/components/ui/button";

interface FeaturedProjectsProps {
  locale?: Locale;
}

export function FeaturedProjects({ locale = "en" }: FeaturedProjectsProps) {
  const content = getHomeContent(locale).projects;
  const isPersian = locale === "fa";

  const projects = getLocalizedProjects(locale)
    .filter((project) => project.featured)
    .slice(0, 3);

  const projectsHref = isPersian ? "/fa/projects" : "/projects";

  return (
    <section
      className="border-t border-border/60 py-24 sm:py-32"
      dir={isPersian ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`${projectsHref}/${project.slug}`}
              className="group flex min-h-72 flex-col rounded-2xl border border-border/70 bg-card/40 p-6 transition-colors duration-200 hover:border-foreground/25 hover:bg-muted/30 sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {isPersian ? (
                  <ArrowUpLeft
                    aria-hidden="true"
                    className="size-4 text-muted-foreground transition-all duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  />
                ) : (
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  />
                )}
              </div>

              <div className="mt-8">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {project.category}
                </p>

                <h3
                  className={`mt-3 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-foreground/80 ${
                    isPersian ? "font-persian leading-relaxed" : ""
                  }`}
                >
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {project.technologies.length > 0 && (
                <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md border border-border/70 px-2 py-1 font-mono text-[10px] text-muted-foreground"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              )}
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-start">
          <Button
            render={
              <Link
                href={projectsHref}
                className="inline-flex items-center gap-2"
              >
                <span>{content.viewAll}</span>
                {isPersian ? (
                  <ArrowUpLeft aria-hidden="true" className="size-4" />
                ) : (
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                )}
              </Link>
            }
            variant="outline"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
