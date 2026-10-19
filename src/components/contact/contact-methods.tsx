import { ArrowUpLeft, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";
import { getContactContent } from "@/lib/contact";

interface ContactMethodsProps {
  locale?: Locale;
}

export function ContactMethods({ locale = "en" }: ContactMethodsProps) {
  const content = getContactContent(locale);
  const isPersian = locale === "fa";
  const ArrowIcon = isPersian ? ArrowUpLeft : ArrowUpRight;

  return (
    <section dir={isPersian ? "rtl" : "ltr"}>
      <Container>
        <div className="grid gap-4 py-12 sm:grid-cols-2 sm:gap-5 sm:py-16 lg:gap-6 lg:py-20">
          {content.methods.map((method) => (
            <a
              key={method.href}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="group flex min-w-0 flex-col rounded-2xl border border-border/60 bg-card p-5 transition-colors hover:border-border hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:p-6"
            >
              <div className="flex items-start justify-between gap-6">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background font-mono text-xs font-medium uppercase"
                >
                  {method.label.slice(0, 2)}
                </span>

                <ArrowIcon
                  aria-hidden="true"
                  className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                />
              </div>

              <h2
                className={`mt-7 text-lg font-semibold ${
                  isPersian
                    ? "font-persian leading-8 tracking-normal"
                    : "font-heading"
                }`}
              >
                {method.label}
              </h2>

              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {method.description}
              </p>

              {method.external && (
                <span className="sr-only"> {content.externalLinkLabel}</span>
              )}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
