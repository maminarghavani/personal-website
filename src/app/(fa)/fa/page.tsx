import { ContactCta } from "@/components/home/contact-cta";
import { EngineeringFocus } from "@/components/home/engineering-focus";
import { ExperiencePreview } from "@/components/home/experience-preview";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Hero } from "@/components/home/hero";
import { WritingPreview } from "@/components/home/writing-preview";

export default function PersianHomePage() {
  return (
    <>
      <Hero locale="fa" />
      <FeaturedProjects locale="fa" />
      <EngineeringFocus locale="fa" />
      <ExperiencePreview locale="fa" />
      <WritingPreview locale="fa" />
      <ContactCta locale="fa" />
    </>
  );
}
