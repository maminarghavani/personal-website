"use client";

import { Languages } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function getPersianPath(pathname: string): string {
  if (pathname === "/") {
    return "/fa";
  }

  if (pathname === "/fa" || pathname.startsWith("/fa/")) {
    return pathname;
  }

  return `/fa${pathname}`;
}

function getEnglishPath(pathname: string): string {
  if (pathname === "/fa") {
    return "/";
  }

  if (pathname.startsWith("/fa/")) {
    return pathname.slice(3) || "/";
  }

  return pathname;
}

export function LanguageSwitcher() {
  const pathname = usePathname();
  const isPersian = pathname === "/fa" || pathname.startsWith("/fa/");

  const targetPath = isPersian
    ? getEnglishPath(pathname)
    : getPersianPath(pathname);

  const label = isPersian ? "English" : "فارسی";
  const ariaLabel = isPersian ? "Switch to English" : "تغییر زبان به فارسی";

  return (
    <Link
      href={targetPath}
      aria-label={ariaLabel}
      title={ariaLabel}
      hrefLang={isPersian ? "en" : "fa"}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size: "sm",
        }),
        "gap-2 rounded-xl text-muted-foreground hover:text-foreground",
      )}
    >
      <Languages className="size-4" aria-hidden="true" />
      <span>{label}</span>
    </Link>
  );
}
