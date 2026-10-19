import { ContactCta } from "@/components/home/contact-cta";
import { EngineeringFocus } from "@/components/home/engineering-focus";
import { ExperiencePreview } from "@/components/home/experience-preview";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Hero } from "@/components/home/hero";
import { WritingPreview } from "@/components/home/writing-preview";

export default function HomePage() {
  return (
    <>
      <Hero locale="en" />
      <FeaturedProjects locale="en" />
      <EngineeringFocus locale="en" />
      <ExperiencePreview locale="en" />
      <WritingPreview locale="en" />
      <ContactCta locale="en" />
    </>
  );
}
