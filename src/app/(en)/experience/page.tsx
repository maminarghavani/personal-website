import type { Metadata } from "next";

import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { getExperience } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience building backend systems, connected-device platforms, geospatial applications, web products, and mobile applications.",
  alternates: {
    canonical: "/experience",
    languages: {
      en: "/experience",
      fa: "/fa/experience",
    },
  },
};

export default function ExperiencePage() {
  const experiences = getExperience("en");

  return (
    <div className="border-b border-border/60">
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <header className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground">
            Experience
          </p>

          <h1 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">
            Building systems that have to work in the real world.
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
            My experience spans backend engineering, connected devices,
            real-time data, geospatial systems, web platforms, and mobile
            applications.
          </p>
        </header>

        <div className="mt-16">
          <ExperienceTimeline experiences={experiences} />
        </div>
      </section>
    </div>
  );
}
