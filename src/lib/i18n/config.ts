export const locales = ["en", "fa"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeConfig = {
  en: {
    label: "English",
    shortLabel: "EN",
    dir: "ltr",
    lang: "en",
  },
  fa: {
    label: "فارسی",
    shortLabel: "FA",
    dir: "rtl",
    lang: "fa",
  },
} as const satisfies Record<
  Locale,
  {
    label: string;
    shortLabel: string;
    dir: "ltr" | "rtl";
    lang: string;
  }
>;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
