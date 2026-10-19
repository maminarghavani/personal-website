import type { Locale } from "@/lib/i18n/config";
import { getAboutContent } from "@/lib/about";

interface TechnicalAreasProps {
  locale?: Locale;
}

export function TechnicalAreas({ locale = "en" }: TechnicalAreasProps) {
  const about = getAboutContent(locale);

  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground">
            {about.technicalAreas.length > 0
              ? locale === "fa"
                ? "حوزه‌های فنی"
                : "Technical areas"
              : null}
          </p>

          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            {locale === "fa"
              ? "حوزه‌هایی که بیشتر زمان مهندسی خود را در آن‌ها صرف می‌کنم."
              : "Where I spend most of my engineering time."}
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-3">
          {about.technicalAreas.map((area) => (
            <article key={area.title} className="bg-card p-6 sm:p-7">
              <h3 className="font-heading text-lg font-semibold tracking-tight">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {area.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {area.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-border/70 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
