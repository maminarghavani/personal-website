import Link from "next/link";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";

import type { Locale } from "@/lib/i18n/config";
import { getHomeContent } from "@/lib/home";
import { Button } from "@/components/ui/button";

interface ContactCtaProps {
  locale?: Locale;
}

export function ContactCta({ locale = "en" }: ContactCtaProps) {
  const content = getHomeContent(locale).contact;
  const isPersian = locale === "fa";
  const contactHref = isPersian ? "/fa/contact" : "/contact";

  return (
    <section
      className="border-t border-border/60 py-24 sm:py-32"
      dir={isPersian ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl border border-border/70 bg-card/50 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="site-grid pointer-events-none absolute inset-0 -z-10 opacity-50"
          />

          <div
            aria-hidden="true"
            className={`pointer-events-none absolute -top-32 -z-10 size-96 rounded-full bg-[radial-gradient(circle,var(--glow-blue),transparent_68%)] blur-3xl ${
              isPersian ? "-left-24" : "-right-24"
            }`}
          />

          <div className="max-w-3xl">
            <p className="eyebrow">{content.eyebrow}</p>

            <h2
              className={`mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl ${
                isPersian
                  ? "font-persian leading-normal"
                  : "font-heading leading-tight tracking-[-0.04em]"
              }`}
            >
              {content.title}
            </h2>

            <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
              {content.description}
            </p>

            <div className="mt-8">
              <Button
                render={
                  <Link
                    href={contactHref}
                    className="inline-flex items-center gap-2"
                  >
                    <span>{content.action}</span>

                    {isPersian ? (
                      <ArrowUpLeft aria-hidden="true" className="size-4" />
                    ) : (
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    )}
                  </Link>
                }
                size="lg"
                className="h-11 rounded-xl px-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
