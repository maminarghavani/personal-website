"use client";

import type { ReactNode } from "react";

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

interface ThemeProviderPropsExtended extends Omit<
  ThemeProviderProps,
  "children"
> {
  children: ReactNode;
}

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderPropsExtended) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
