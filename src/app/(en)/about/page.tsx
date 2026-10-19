import type { Metadata } from "next";

import { AboutIntro } from "@/components/about/about-intro";
import { EngineeringPhilosophy } from "@/components/about/engineering-philosophy";
import { TechnicalAreas } from "@/components/about/technical-areas";
import { getAboutContent } from "@/lib/about";

export const metadata: Metadata = {
  title: {
    absolute: "Software Engineer & Systems Builder",
  },
  description:
    "Explore my software engineering work across backend systems, connected devices, real-time geospatial platforms, web applications, and mobile products.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      fa: "/fa",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
  },
};

export default function AboutPage() {
  const about = getAboutContent("en");

  return (
    <>
      <AboutIntro />
      <EngineeringPhilosophy />
      <TechnicalAreas />

      <section>
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-3xl border-l-2 border-foreground/20 pl-6 sm:pl-8">
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
      </section>
    </>
  );
}
