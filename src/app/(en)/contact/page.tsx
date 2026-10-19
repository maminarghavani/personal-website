import type { Metadata } from "next";

import { ContactHeader } from "@/components/contact/contact-header";
import { ContactMethods } from "@/components/contact/contact-methods";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss software engineering, product development, technical collaborations, and interesting problems worth solving.",
  alternates: {
    canonical: "/contact",
    languages: {
      en: "/contact",
      fa: "/fa/contact",
    },
  },
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description:
      "Get in touch to discuss software engineering, product development, technical collaborations, and interesting problems worth solving.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHeader locale="en" />
      <ContactMethods locale="en" />
    </>
  );
}
