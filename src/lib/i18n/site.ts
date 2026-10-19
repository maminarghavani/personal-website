import type { Locale } from "@/lib/i18n/config";

export interface SiteDictionary {
  nav: {
    home: string;
    about: string;
    projects: string;
    experience: string;
    blog: string;
    contact: string;
  };
  actions: {
    changeTheme: string;
    switchToEnglish: string;
    switchToPersian: string;
    openMenu: string;
    closeMenu: string;
  };
  accessibility: {
    skipToContent: string;
  };
  footer: {
    builtWith: string;
  };
}

export const siteDictionary: Record<Locale, SiteDictionary> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      experience: "Experience",
      blog: "Blog",
      contact: "Contact",
    },
    actions: {
      changeTheme: "Change theme",
      switchToEnglish: "Switch to English",
      switchToPersian: "Switch to Persian",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    accessibility: {
      skipToContent: "Skip to main content",
    },
    footer: {
      builtWith: "Built with Next.js, TypeScript, and care.",
    },
  },

  fa: {
    nav: {
      home: "خانه",
      about: "درباره من",
      projects: "پروژه‌ها",
      experience: "تجربه کاری",
      blog: "وبلاگ",
      contact: "تماس",
    },
    actions: {
      changeTheme: "تغییر پوسته",
      switchToEnglish: "تغییر زبان به انگلیسی",
      switchToPersian: "تغییر زبان به فارسی",
      openMenu: "باز کردن منو",
      closeMenu: "بستن منو",
    },
    accessibility: {
      skipToContent: "پرش به محتوای اصلی",
    },
    footer: {
      builtWith: "ساخته‌شده با Next.js، TypeScript و دقت.",
    },
  },
};
