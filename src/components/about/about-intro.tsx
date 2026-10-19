import type { Locale } from "@/lib/i18n/config";
import { getAboutContent } from "@/lib/about";

interface AboutIntroProps {
  locale?: Locale;
}

export function AboutIntro({ locale = "en" }: AboutIntroProps) {
  const about = getAboutContent(locale);

  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-medium text-muted-foreground">
            {about.intro.eyebrow}
          </p>

          <h1 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-[-0.035em] sm:text-6xl lg:text-7xl">
            {about.intro.title}
          </h1>

          <div className="mt-8 max-w-3xl space-y-5">
            {about.intro.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-pretty text-base leading-8 text-muted-foreground sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
