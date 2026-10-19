import type { Metadata } from "next";

import { AboutIntro } from "@/components/about/about-intro";
import { EngineeringPhilosophy } from "@/components/about/engineering-philosophy";
import { TechnicalAreas } from "@/components/about/technical-areas";
import { getAboutContent } from "@/lib/about";

export const metadata: Metadata = {
  title: "درباره من",
  description:
    "درباره مسیر حرفه‌ای، رویکرد مهندسی و حوزه‌های تخصصی من در توسعه نرم‌افزار.",
  alternates: {
    canonical: "/fa/about",
    languages: {
      en: "/about",
      fa: "/fa/about",
    },
  },
  openGraph: {
    locale: "fa_IR",
    url: "/fa/about",
  },
};

export default function PersianAboutPage() {
  const about = getAboutContent("fa");

  return (
    <div dir="rtl">
      <AboutIntro locale="fa" />
      <EngineeringPhilosophy locale="fa" />
      <TechnicalAreas locale="fa" />

      {/* <section>
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-3xl border-r-2 border-foreground/20 pr-6 sm:pr-8">
            <p className="text-sm font-medium text-muted-foreground">
              {about.currentFocus.eyebrow}
            </p>

            <h2 className="mt-3 text-balance font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {about.currentFocus.title}
            </h2>

            <p className="mt-4 text-pretty leading-7 text-muted-foreground">
              {about.currentFocus.description}
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
}
