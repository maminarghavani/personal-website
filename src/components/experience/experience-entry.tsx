import type { Locale } from "@/lib/i18n/config";
import type { Experience } from "@/lib/experience";

interface ExperienceEntryProps {
  experience: Experience;
  locale?: Locale;
}

export function ExperienceEntry({
  experience,
  locale = "en",
}: ExperienceEntryProps) {
  const isPersian = locale === "fa";

  return (
    <article
      dir={isPersian ? "rtl" : "ltr"}
      className="relative grid gap-5 border-t border-border/70 py-8 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-10 sm:py-10"
    >
      <div>
        <p className="text-sm font-medium text-muted-foreground">
          {experience.period}
        </p>

        {experience.location && (
          <p className="mt-2 text-xs leading-6 text-muted-foreground/80">
            {experience.location}
          </p>
        )}
      </div>

      <div className="min-w-0">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h2 className="font-heading text-xl font-semibold tracking-tight">
            {experience.role}
          </h2>

          <p className="text-sm font-medium text-muted-foreground">
            {experience.company}
          </p>
        </div>

        <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
          {experience.description}
        </p>

        {experience.highlights.length > 0 && (
          <ul className="mt-6 max-w-3xl space-y-3">
            {experience.highlights.map((highlight) => (
              <li
                key={highlight}
                className="relative ps-5 text-sm leading-7 text-muted-foreground"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-s-0 top-[0.7rem] size-1.5 rounded-full bg-foreground/50"
                />

                {highlight}
              </li>
            ))}
          </ul>
        )}

        {experience.technologies.length > 0 && (
          <ul
            aria-label={isPersian ? "فناوری‌ها" : "Technologies"}
            className="mt-7 flex flex-wrap gap-2"
          >
            {experience.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-md border border-border/70 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {technology}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
