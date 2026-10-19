import type { ReactNode } from "react";

import { SiteFooter } from "@/components/navigation/site-footer";
import { SiteHeader } from "@/components/navigation/site-header";

export default function PersianSiteLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only z-100 rounded-md bg-background px-4 py-2 text-sm font-medium shadow-lg focus:not-sr-only focus:fixed focus:right-4 focus:top-4"
      >
        پرش به محتوای اصلی
      </a>

      <SiteHeader />

      <main id="main-content">{children}</main>

      <SiteFooter />
    </div>
  );
}
