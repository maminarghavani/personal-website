import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ProjectGrid } from "@/components/projects/project-grid";
import { getLocalizedProjects } from "@/lib/projects";
export const metadata: Metadata = {
  title: "پروژه‌ها",
  description:
    "مجموعه‌ای از پروژه‌های نرم‌افزاری در حوزه سیستم‌های بک‌اند، دستگاه‌های متصل، اپلیکیشن‌های موبایل، سامانه‌های مکانی و محصولات وب.",
  alternates: {
    canonical: "/fa/projects",
    languages: {
      en: "/projects",
      fa: "/fa/projects",
    },
  },
  openGraph: { locale: "fa_IR", url: "/fa/projects" },
};
export default function PersianProjectsPage() {
  const projects = getLocalizedProjects("fa");
  return (
    <div className="border-b border-border/60" dir="rtl">
      {" "}
      <Container>
        {" "}
        <section className="py-24 sm:py-32">
          {" "}
          <div className="max-w-3xl">
            {" "}
            <p className="text-sm font-medium text-muted-foreground">
              {" "}
              پروژه‌های منتخب{" "}
            </p>{" "}
            <h1 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
              {" "}
              پروژه‌هایی که ساخته‌ام.{" "}
            </h1>{" "}
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {" "}
              مجموعه‌ای از محصولات، پلتفرم‌ها و پروژه‌های مهندسی در حوزه
              سیستم‌های بک‌اند، اپلیکیشن‌های موبایل، دستگاه‌های متصل، داده‌های
              مکانی و تجربه‌های وب.{" "}
            </p>{" "}
          </div>{" "}
          <div className="mt-16">
            {" "}
            <ProjectGrid
              projects={projects}
              locale="fa"
              emptyMessage="هنوز پروژه‌ای منتشر نشده است."
            />{" "}
          </div>{" "}
        </section>{" "}
      </Container>{" "}
    </div>
  );
}
