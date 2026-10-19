import type { Locale } from "@/lib/i18n/config";

import { getHomeContent } from "@/lib/home";
import { SectionHeading } from "@/components/home/section-heading";

interface EngineeringFocusProps {
  locale?: Locale;
}

export function EngineeringFocus({ locale = "en" }: EngineeringFocusProps) {
  const content = getHomeContent(locale).engineering;
  const isPersian = locale === "fa";

  return (
    <section
      className="border-t border-border/70 py-24 sm:py-32"
      dir={isPersian ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 sm:grid-cols-2 lg:mt-16">
          {content.areas.map((area, index) => (
            <article
              key={area.title}
              className="bg-background p-6 transition-colors duration-200 hover:bg-muted/30 sm:p-8 lg:p-10"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {area.number}
                </span>

                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-foreground/25"
                />
              </div>

              <h3
                className={`text-lg font-semibold tracking-tight text-foreground sm:text-xl ${
                  isPersian ? "font-persian leading-relaxed" : ""
                }`}
              >
                {area.title}
              </h3>

              <p className="mt-3 max-w-prose text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
