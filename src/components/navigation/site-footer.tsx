"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { getNavigation } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site";

function getLocale(pathname: string): Locale {
  return pathname === "/fa" || pathname.startsWith("/fa/") ? "fa" : "en";
}

const footerCopy = {
  en: {
    homeLabel: "Go to homepage",
    description: siteConfig.description,
    navigationLabel: "Footer navigation",
    copyright: "All rights reserved.",
  },
  fa: {
    homeLabel: "رفتن به صفحه اصلی",
    description:
      "مهندسی نرم‌افزار، ساخت محصولات قابل اعتماد و حل مسائل پیچیده.",
    navigationLabel: "پیوندهای پایین صفحه",
    copyright: "تمامی حقوق محفوظ است.",
  },
} as const;

export function SiteFooter() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const navigation = getNavigation(locale);
  const copy = footerCopy[locale];
  const isPersian = locale === "fa";

  return (
    <footer
      className="border-t border-border/70 bg-background"
      dir={isPersian ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xl">
            <Link
              href={isPersian ? "/fa" : "/"}
              aria-label={`${copy.homeLabel} — ${siteConfig.name}`}
              className="inline-flex rounded-sm font-heading text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {isPersian ? "محمدامین ارغوانی" : siteConfig.name}
            </Link>

            <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
              {copy.description}
            </p>
          </div>

          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
        </div>

        <div className="mt-8 border-t border-border/60 pt-6">
          <nav
            aria-label={copy.navigationLabel}
            className="flex flex-wrap gap-x-5 gap-y-3"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-border/60 pt-5 text-xs leading-6 text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {copy.copyright}
          </p>

          <p>
            {isPersian
              ? "ساخته‌شده با دقت و توجه به جزئیات."
              : "Built with care and attention to detail."}
          </p>
        </div>
      </div>
    </footer>
  );
}
