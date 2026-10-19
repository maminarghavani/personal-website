"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { MobileNavigation } from "@/components/navigation/mobile-navigation";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { getNavigation } from "@/lib/i18n/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/fa" || pathname.startsWith("/fa/") ? "fa" : "en";
}

export function SiteHeader() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const navigation = getNavigation(locale);

  const isActive = (href: string) => {
    if (href === "/" || href === "/fa") {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const localeName = isLocale(locale) ? locale : "en";
  const isRtl = localeName === "fa";

  return (
    <header
      className="sticky top-0 z-50 px-3 pt-3 sm:px-5 lg:px-6"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="glass-strong glass-edge mx-auto flex h-14 max-w-6xl items-center rounded-2xl px-2 sm:h-16 sm:px-3">
        {/* Brand */}
        <Link
          href={isRtl ? "/fa" : "/"}
          aria-label={isRtl ? "محمدامین ارغوانی" : siteConfig.name}
          className={cn(
            "group flex min-w-0 items-center rounded-xl px-3 py-2",
            "font-heading text-base font-semibold tracking-tight sm:text-lg",
            "text-foreground",
            "transition-colors duration-200",
            "hover:text-foreground/80",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          )}
        >
          <span className="truncate">
            {isRtl ? "محمدامین ارغوانی" : siteConfig.name}
          </span>

          <span
            aria-hidden="true"
            className={cn(
              "ms-2 h-1.5 w-1.5 shrink-0 rounded-full",
              "bg-primary/70",
              "transition-all duration-200",
              "group-hover:scale-125 group-hover:bg-primary",
            )}
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label={isRtl ? "منو اصلی" : "Main Menu"}
          className="ms-auto hidden items-center gap-1 md:flex"
        >
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-xl px-3 py-2 text-sm font-medium",
                  "transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  active
                    ? ["bg-foreground/[0.07]", "text-foreground", "shadow-sm"]
                    : [
                        "text-muted-foreground",
                        "hover:bg-foreground/4.5",
                        "hover:text-foreground",
                      ],
                )}
              >
                {item.label}

                {active && (
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute bottom-1 inset-s-1/2 h-px w-4",
                      "-translate-x-1/2",
                      "bg-foreground/45",
                    )}
                  />
                )}
              </Link>
            );
          })}

          <div aria-hidden="true" className="mx-2 h-5 w-px bg-border/70" />

          <div className="flex items-center gap-1">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="ms-auto flex items-center gap-0.5 md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <MobileNavigation navigation={navigation} locale={locale} />
        </div>
      </div>
    </header>
  );
}
