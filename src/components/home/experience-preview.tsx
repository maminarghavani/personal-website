import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { type Locale } from "@/lib/i18n/config";
import { getExperience } from "@/lib/experience";

interface ExperiencePreviewProps {
  locale?: Locale;
}

export function ExperiencePreview({ locale = "en" }: ExperiencePreviewProps) {
  const currentExperience = getExperience(locale)[0];

  if (!currentExperience) {
    return null;
  }

  const isPersian = locale === "fa";

  return (
    <section className="section-rule py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          {/* Section introduction */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-foreground/30"
              />

              <p className="eyebrow">{isPersian ? "تجربه" : "Experience"}</p>
            </div>

            <h2 className="max-w-xl text-balance font-heading text-3xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-4xl">
              {isPersian
                ? "ساخت نرم‌افزار در تمام لایه‌های سیستم."
                : "Building software across the stack."}
            </h2>
          </div>

          {/* Current experience */}
          <div>
            <article className="group relative border-t border-border/70 pt-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div>
                  <h3 className="font-heading text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
                    {currentExperience.role}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {currentExperience.company}
                  </p>
                </div>

                <p className="technical-label shrink-0">
                  {currentExperience.period}
                </p>
              </div>

              <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
                {currentExperience.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {currentExperience.technologies
                  .slice(0, 6)
                  .map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-border/60 bg-background/30 px-2.5 py-1 font-mono text-[0.68rem] text-muted-foreground transition-colors group-hover:border-border"
                    >
                      {technology}
                    </span>
                  ))}
              </div>

              <span
                aria-hidden="true"
                className="absolute start-0 top-0 h-px w-0 bg-foreground/40 transition-all duration-300 group-hover:w-16"
              />
            </article>

            <Link
              href={isPersian ? "/fa/experience" : "/experience"}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>
                {isPersian ? "مشاهده سوابق کامل" : "View full experience"}
              </span>

              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
