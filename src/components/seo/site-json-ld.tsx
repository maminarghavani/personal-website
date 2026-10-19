import { siteConfig } from "@/lib/site";

import { JsonLd } from "./json-ld";

export function SiteJsonLd() {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const personId = `${baseUrl}/#person`;
  const websiteId = `${baseUrl}/#website`;

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: siteConfig.name,
    url: baseUrl,
    jobTitle: "Software Engineer",
    description: siteConfig.description,
    email: `mailto:${siteConfig.email}`,
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.telegram,
    ].filter(Boolean),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    url: baseUrl,
    description: siteConfig.description,
    inLanguage: ["en", "fa"],
    publisher: {
      "@id": personId,
    },
  };

  return (
    <>
      <JsonLd data={person} />
      <JsonLd data={website} />
    </>
  );
}
