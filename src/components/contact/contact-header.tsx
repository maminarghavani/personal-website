import { ArrowUpLeft, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";
import { getContactContent } from "@/lib/contact";
import { siteConfig } from "@/lib/site";

interface ContactHeaderProps {
  locale?: Locale;
}

export function ContactHeader({ locale = "en" }: ContactHeaderProps) {
  const content = getContactContent(locale);
  const isPersian = locale === "fa";
  const ArrowIcon = isPersian ? ArrowUpLeft : ArrowUpRight;

  return (
    <section
      dir={isPersian ? "rtl" : "ltr"}
      className="border-b border-border/60"
    >
      <Container>
        <header className="max-w-3xl py-20 sm:py-24 lg:py-28">
          <p className="text-sm font-medium tracking-wide text-primary">
            {content.eyebrow}
          </p>

          <h1
            className={`mt-4 text-balance text-4xl font-semibold sm:text-5xl lg:text-6xl ${
              isPersian
                ? "font-persian leading-normal tracking-normal"
                : "font-heading tracking-[-0.035em]"
            }`}
          >
            {content.title}
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
            {content.description}
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-8 inline-flex min-h-10 items-center gap-2 rounded-sm text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
          >
            <span>{content.emailLabel}</span>
            <ArrowIcon aria-hidden="true" className="size-4" />
          </a>
        </header>
      </Container>
    </section>
  );
}
