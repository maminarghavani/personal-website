import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";

import { siteDictionary } from "@/lib/i18n/site";

export function getDictionary(locale: string): (typeof siteDictionary)[Locale] {
  if (isLocale(locale)) {
    return siteDictionary[locale];
  }

  return siteDictionary[defaultLocale];
}
