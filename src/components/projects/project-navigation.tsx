import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import type { Locale } from "@/lib/i18n/config";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

interface ProjectNavigationProps {
  previous: Project | null;
  next: Project | null;
  locale?: Locale;
}

export function ProjectNavigation({
  previous,
  next,
  locale = "en",
}: ProjectNavigationProps) {
  const isPersian = locale === "fa";

  const getHref = (slug: string) =>
    isPersian ? `/fa/projects/${slug}` : `/projects/${slug}`;

  const linkClassName = cn(
    "group flex min-h-28 flex-col justify-center rounded-xl",
    "border border-border/70 p-5",
    "transition-colors duration-200",
    "hover:border-foreground/20 hover:bg-muted/40",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  );

  return (
    <nav
      aria-label={isPersian ? "ناوبری پروژه‌ها" : "Project navigation"}
      dir={isPersian ? "rtl" : "ltr"}
      className="mx-auto mt-16 grid w-full max-w-4xl gap-4 border-t border-border/60 px-5 pt-8 sm:mt-20 sm:grid-cols-2 sm:px-8 lg:px-10"
    >
      {previous ? (
        <Link href={getHref(previous.slug)} className={linkClassName}>
          <span className="flex items-center gap-2 text-xs text-muted-foreground">
            {isPersian ? (
              <>
                <ArrowRight className="size-3.5" aria-hidden="true" />
                پروژه قبلی
              </>
            ) : (
              <>
                <ArrowLeft className="size-3.5" aria-hidden="true" />
                Previous project
              </>
            )}
          </span>

          <span className="mt-3 font-heading font-medium transition-colors group-hover:text-foreground">
            {previous.title}
          </span>
        </Link>
      ) : (
        <div aria-hidden="true" />
      )}

      {next ? (
        <Link href={getHref(next.slug)} className={linkClassName}>
          <span className="flex items-center gap-2 text-xs text-muted-foreground">
            {isPersian ? (
              <>
                پروژه بعدی
                <ArrowLeft className="size-3.5" aria-hidden="true" />
              </>
            ) : (
              <>
                Next project
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </>
            )}
          </span>

          <span className="mt-3 font-heading font-medium transition-colors group-hover:text-foreground">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
