import type { Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site";

export interface ContactMethod {
  label: string;
  description: string;
  href: string;
  external?: boolean;
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  description: string;
  emailLabel: string;
  externalLinkLabel: string;
  methods: ContactMethod[];
}

const contactContent: Record<Locale, ContactContent> = {
  en: {
    eyebrow: "Contact",
    title: "Let’s build something meaningful.",
    description:
      "I’m open to discussing software engineering, product development, technical collaborations, and interesting problems worth solving.",
    emailLabel: "Send me an email",
    externalLinkLabel: "(opens in a new tab)",
    methods: [
      // {
      //   label: "GitHub",
      //   description: "Explore my code, projects, and technical work.",
      //   href: siteConfig.social.github,
      //   external: true,
      // },
      // {
      //   label: "LinkedIn",
      //   description: "Connect with me professionally.",
      //   href: siteConfig.social.linkedin,
      //   external: true,
      // },
      {
        label: "Telegram",
        description: "Reach out to me directly on Telegram.",
        href: siteConfig.social.telegram,
        external: true,
      },
      {
        label: "Gmail",
        description: "Email me about projects, collaborations, or new ideas.",
        href: `mailto:${siteConfig.email}`,
      },
    ],
  },
  fa: {
    eyebrow: "تماس",
    title: "بیایید چیزی ارزشمند بسازیم.",
    description:
      "برای گفتگو درباره مهندسی نرم‌افزار، توسعه محصول، همکاری‌های فنی و ایده‌های جالبی که ارزش حل کردن دارند، آماده‌ام.",
    emailLabel: "ارسال ایمیل",
    externalLinkLabel: "(در زبانه جدید باز می‌شود)",
    methods: [
      {
        label: "گیت‌هاب",
        description: "کدها، پروژه‌ها و فعالیت‌های فنی من را ببینید.",
        href: siteConfig.social.github,
        external: true,
      },
      {
        label: "لینکدین",
        description: "از طریق لینکدین با من در ارتباط حرفه‌ای باشید.",
        href: siteConfig.social.linkedin,
        external: true,
      },
      {
        label: "تلگرام",
        description: "از طریق تلگرام مستقیماً با من در ارتباط باشید.",
        href: siteConfig.social.telegram,
        external: true,
      },
      {
        label: "جیمیل",
        description:
          "برای گفتگو درباره پروژه‌ها، همکاری‌ها یا ایده‌های جدید ایمیل بزنید.",
        href: `mailto:${siteConfig.email}`,
      },
    ],
  },
};

export function getContactContent(locale: Locale = "en"): ContactContent {
  return contactContent[locale];
}

// Keep the existing English configuration available for any other consumers.
export const contactConfig = {
  title: contactContent.en.title,
  description: contactContent.en.description,
  methods: contactContent.en.methods,
} as const;
