"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Locale } from "@/lib/i18n/config";
import type { LocalizedNavigationItem } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  navigation: readonly LocalizedNavigationItem[];
  locale: Locale;
}

export function MobileNavigation({
  navigation,
  locale,
}: MobileNavigationProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isPersian = locale === "fa";

  const isActive = (href: string) => {
    if (href === "/" || href === "/fa") {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label={isPersian ? "باز کردن منو" : "Open menu"}
            className="size-9 rounded-xl text-muted-foreground hover:text-foreground"
          />
        }
      >
        <Menu className="size-5" aria-hidden="true" />
      </SheetTrigger>

      <SheetContent
        side={isPersian ? "right" : "left"}
        className="w-[min(85vw,360px)] border-border/70 bg-background/95 px-5 backdrop-blur-2xl"
      >
        <SheetTitle className="sr-only">
          {isPersian ? "منوی اصلی" : "Main menu"}
        </SheetTitle>

        <div className="mb-6 mt-8 border-b border-border/70 pb-5">
          <p className="font-heading text-lg font-semibold tracking-tight text-foreground">
            {isPersian ? "منو" : "Navigation"}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {isPersian ? "بخش موردنظر را انتخاب کنید" : "Explore the website"}
          </p>
        </div>

        <nav
          aria-label={isPersian ? "منو اصلی" : "Main navigation"}
          className="flex flex-col gap-1.5"
          dir={isPersian ? "rtl" : "ltr"}
        >
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "relative flex min-h-11 items-center rounded-xl px-4 py-3",
                  "text-sm font-medium",
                  "transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  active
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-2 inset-s-0 w-0.5 rounded-full bg-primary"
                  />
                )}

                {item.label}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
