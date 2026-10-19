import type { Metadata } from "next";

import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { getExperience } from "@/lib/experience";

export const metadata: Metadata = {
  title: "تجربه کاری",
  description:
    "تجربه حرفه‌ای در ساخت سیستم‌های بک‌اند، پلتفرم‌های متصل به دستگاه، سامانه‌های مکانی، محصولات وب و اپلیکیشن‌های موبایل.",
  alternates: {
    canonical: "/fa/experience",
    languages: {
      en: "/experience",
      fa: "/fa/experience",
    },
  },
  openGraph: {
    locale: "fa_IR",
    url: "/fa/experience",
  },
};

export default function PersianExperiencePage() {
  const experiences = getExperience("fa");

  return (
    <div className="border-b border-border/60" dir="rtl">
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <header className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground">
            تجربه کاری
          </p>

          <h1 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-normal sm:text-6xl">
            ساخت سیستم‌هایی که باید در دنیای واقعی کار کنند.
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
            تجربه من شامل مهندسی بک‌اند، دستگاه‌های متصل، داده‌های بلادرنگ،
            سامانه‌های مکانی، پلتفرم‌های وب و اپلیکیشن‌های موبایل است.
          </p>
        </header>

        <div className="mt-16">
          <ExperienceTimeline experiences={experiences} locale="fa" />
        </div>
      </section>
    </div>
  );
}
