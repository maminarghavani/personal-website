import Link from "next/link";
import { ArrowDown, ArrowUpLeft, ArrowUpRight } from "lucide-react";

import type { Locale } from "@/lib/i18n/config";
import { Button } from "@/components/ui/button";
import { getHomeContent } from "@/lib/home";

interface HeroProps {
  locale?: Locale;
}

export function Hero({ locale = "en" }: HeroProps) {
  const content = getHomeContent(locale).hero;
  const isPersian = locale === "fa";

  return (
    <section
      className="hero-glow relative isolate overflow-hidden"
      dir={isPersian ? "rtl" : "ltr"}
    >
      {/* Technical background */}
      <div
        aria-hidden="true"
        className="site-grid pointer-events-none absolute inset-0 -z-20 opacity-70"
      />

      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-168 overflow-hidden"
      >
        <div
          className={`absolute top-64 size-152 rounded-full bg-[radial-gradient(circle,var(--glow-blue),transparent_68%)] blur-3xl ${
            isPersian
              ? "right-1/2 translate-x-1/2"
              : "left-1/2 -translate-x-1/2"
          }`}
        />

        <div
          className={`absolute top-32 size-96 rounded-full bg-[radial-gradient(circle,var(--glow-violet),transparent_68%)] opacity-70 blur-3xl ${
            isPersian ? "-right-48" : "-left-48"
          }`}
        />
      </div>

      {/* Hero content */}
      <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-center px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="w-full max-w-5xl">
          <div className="mb-8 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-10 shrink-0 bg-foreground/30"
            />

            <p className="eyebrow">{content.eyebrow}</p>
          </div>

          <h1
            className={`max-w-5xl text-balance text-[clamp(2.75rem,7vw,7.5rem)] font-semibold tracking-tight text-foreground ${
              isPersian
                ? "font-persian leading-[1.4] sm:leading-[1.35]"
                : "font-heading leading-[0.98] tracking-[-0.055em]"
            }`}
          >
            {content.title}
          </h1>

          <p className="mt-8 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:mt-9 sm:text-lg sm:leading-9 lg:text-xl">
            {content.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row">
            <Button
              render={
                <Link
                  href={content.primaryAction.href}
                  className="group inline-flex items-center justify-center gap-2"
                >
                  <span>{content.primaryAction.label}</span>

                  {isPersian ? (
                    <ArrowUpLeft
                      aria-hidden="true"
                      className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  ) : (
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  )}
                </Link>
              }
              size="lg"
              className="h-11 rounded-xl px-5 shadow-lg shadow-foreground/5"
            />

            <Button
              render={
                <Link
                  href={content.secondaryAction.href}
                  className="inline-flex items-center justify-center"
                >
                  {content.secondaryAction.label}
                </Link>
              }
              variant="outline"
              size="lg"
              className="h-11 rounded-xl border-border/70 bg-background/35 px-5 backdrop-blur-sm"
            />
          </div>

          <div className="mt-12 border-t border-border/60 pt-5 sm:mt-14 sm:pt-6">
            <p className="technical-label mb-4">{content.specialtiesLabel}</p>

            <ul className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8">
              {content.specialties.map((specialty) => (
                <li
                  key={specialty}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-foreground/40"
                  />

                  <span>{specialty}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 hidden items-center gap-4 sm:flex lg:mt-16">
            <div className="flex size-8 items-center justify-center rounded-full border border-border/70 bg-background/35 backdrop-blur-sm">
              <ArrowDown
                aria-hidden="true"
                className="size-3.5 text-muted-foreground"
              />
            </div>

            <div className="h-px w-10 bg-border/70" />

            <span className="technical-label">{content.selectedWorkLabel}</span>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent"
      />
    </section>
  );
}
