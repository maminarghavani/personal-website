"use client";

import { useSyncExternalStore } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const themeIcons = {
  light: Sun,
  dark: Moon,
  system: Monitor,
} as const;

const nextThemes = {
  light: "dark",
  dark: "system",
  system: "light",
} as const;

type Theme = keyof typeof themeIcons;

function isTheme(value: string | undefined): value is Theme {
  return value === "light" || value === "dark" || value === "system";
}

function subscribe() {
  return () => {};
}

function getServerSnapshot() {
  return false;
}

function getClientSnapshot() {
  return true;
}

export function ThemeToggle() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const isPersian = pathname === "/fa" || pathname.startsWith("/fa/");
  const currentTheme: Theme = isTheme(theme) ? theme : "system";
  const nextTheme = nextThemes[currentTheme];

  const labels = {
    light: isPersian ? "روشن" : "light",
    dark: isPersian ? "تیره" : "dark",
    system: isPersian ? "سیستم" : "system",
  };

  const actionLabel = isPersian
    ? `تغییر پوسته به حالت ${labels[nextTheme]}`
    : `Switch to ${nextTheme} theme`;

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        aria-label={isPersian ? "تغییر پوسته" : "Change theme"}
        title={isPersian ? "تغییر پوسته" : "Change theme"}
        disabled
        className="size-9 rounded-xl text-muted-foreground"
      >
        <Monitor className="size-4" aria-hidden="true" />
      </Button>
    );
  }

  const Icon = themeIcons[currentTheme];

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(nextTheme)}
      aria-label={actionLabel}
      title={actionLabel}
      className="size-9 rounded-xl text-muted-foreground hover:text-foreground"
    >
      <Icon className="size-4" aria-hidden="true" />
    </Button>
  );
}
