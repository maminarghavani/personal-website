import type { Metadata } from "next";

import { ContactHeader } from "@/components/contact/contact-header";
import { ContactMethods } from "@/components/contact/contact-methods";

export const metadata: Metadata = {
  title: "تماس",
  description:
    "برای گفتگو درباره مهندسی نرم‌افزار، توسعه محصول و همکاری‌های فنی با من در ارتباط باشید.",
  alternates: {
    canonical: "/fa/contact",
    languages: {
      en: "/contact",
      fa: "/fa/contact",
    },
  },
  openGraph: {
    locale: "fa_IR",
    url: "/fa/contact",
  },
};

export default function PersianContactPage() {
  return (
    <>
      <ContactHeader locale="fa" />
      <ContactMethods locale="fa" />
    </>
  );
}
