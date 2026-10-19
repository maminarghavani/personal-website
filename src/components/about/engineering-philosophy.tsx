import type { Locale } from "@/lib/i18n/config";
import { getAboutContent } from "@/lib/about";

interface EngineeringPhilosophyProps {
  locale?: Locale;
}

export function EngineeringPhilosophy({
  locale = "en",
}: EngineeringPhilosophyProps) {
  const about = getAboutContent(locale);

  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              {about.philosophy.eyebrow}
            </p>

            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              {about.philosophy.title}
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {about.philosophy.principles.map((principle, index) => (
              <article
                key={principle.title}
                className="border-t border-border/70 pt-5"
              >
                <p className="font-mono text-xs text-muted-foreground">
                  {principle.number}
                </p>

                <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
