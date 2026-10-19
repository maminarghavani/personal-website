import type { Locale } from "@/lib/i18n/config";
import type { Experience } from "@/lib/experience";

import { ExperienceEntry } from "./experience-entry";

interface ExperienceTimelineProps {
  experiences: readonly Experience[];
  locale?: Locale;
}

export function ExperienceTimeline({
  experiences,
  locale = "en",
}: ExperienceTimelineProps) {
  const isPersian = locale === "fa";

  if (experiences.length === 0) {
    return (
      <div
        dir={isPersian ? "rtl" : "ltr"}
        className="rounded-2xl border border-dashed border-border/70 px-5 py-10 text-center sm:px-8"
      >
        <p className="text-sm leading-7 text-muted-foreground">
          {isPersian
            ? "هنوز سابقه کاری منتشر نشده است."
            : "No experience entries have been published yet."}
        </p>
      </div>
    );
  }

  return (
    <div
      dir={isPersian ? "rtl" : "ltr"}
      className="flex flex-col gap-10 sm:gap-12"
    >
      {experiences.map((item) => (
        <ExperienceEntry
          key={`${item.company}-${item.role}-${item.period}`}
          experience={item}
          locale={locale}
        />
      ))}
    </div>
  );
}
