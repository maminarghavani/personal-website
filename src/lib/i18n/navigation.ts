import type { Locale } from "@/lib/i18n/config";
import { siteDictionary } from "@/lib/i18n/site";

export interface LocalizedNavigationItem {
  label: string;
  href: string;
}

export function getNavigation(
  locale: Locale,
): readonly LocalizedNavigationItem[] {
  const dictionary = siteDictionary[locale];

  if (locale === "fa") {
    return [
      { label: dictionary.nav.home, href: "/fa" },
      { label: dictionary.nav.about, href: "/fa/about" },
      { label: dictionary.nav.projects, href: "/fa/projects" },
      { label: dictionary.nav.experience, href: "/fa/experience" },
      { label: dictionary.nav.blog, href: "/fa/blog" },
      { label: dictionary.nav.contact, href: "/fa/contact" },
    ];
  }

  return [
    { label: dictionary.nav.home, href: "/" },
    { label: dictionary.nav.about, href: "/about" },
    { label: dictionary.nav.projects, href: "/projects" },
    { label: dictionary.nav.experience, href: "/experience" },
    { label: dictionary.nav.blog, href: "/blog" },
    { label: dictionary.nav.contact, href: "/contact" },
  ];
}
