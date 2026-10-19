import type { Locale } from "@/lib/i18n/config";

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  highlights: readonly string[];
  technologies: readonly string[];
}

const englishExperience: readonly Experience[] = [
  {
    company: "GPSTech",
    role: "Software Engineer",
    period: "2025–Present",
    description:
      "Building a connected-device and GPS platform spanning device communication, backend services, real-time telemetry, geospatial data, web administration, and mobile applications.",
    highlights: [
      "Designed and implemented backend services for devices, users, vendors, vehicles, access control, alarms, geofences, and platform operations.",
      "Built device communication and telemetry processing with Go and integrated it with the backend and data infrastructure.",
      "Worked with PostgreSQL, PostGIS, TimescaleDB, and Redis for relational, geospatial, time-series, and real-time workloads.",
      "Built web administration interfaces with Next.js and mobile experiences with Flutter and MapLibre.",
    ],
    technologies: [
      "NestJS",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "PostGIS",
      "Redis",
      "Next.js",
      "Flutter",
      "MapLibre",
    ],
  },
];

const persianExperience: readonly Experience[] = [
  {
    company: "GPSTech",
    role: "مهندس نرم‌افزار",
    period: "۲۰۲۵–اکنون",
    description:
      "توسعه یک پلتفرم GPS و دستگاه‌های متصل که ارتباط با دستگاه‌ها، سرویس‌های بک‌اند، تله‌متری بلادرنگ، داده‌های مکانی، پنل مدیریت وب و اپلیکیشن‌های موبایل را در بر می‌گیرد.",
    highlights: [
      "طراحی و پیاده‌سازی سرویس‌های بک‌اند برای دستگاه‌ها، کاربران، فروشندگان، خودروها، کنترل دسترسی، هشدارها، ژئوفنس‌ها و عملیات پلتفرم.",
      "پیاده‌سازی ارتباط با دستگاه‌ها و پردازش تله‌متری با Go و یکپارچه‌سازی آن با بک‌اند و زیرساخت داده.",
      "کار با PostgreSQL، PostGIS، TimescaleDB و Redis برای بارهای رابطه‌ای، مکانی، سری زمانی و بلادرنگ.",
      "ساخت رابط‌های مدیریت وب با Next.js و تجربه‌های موبایل با Flutter و MapLibre.",
    ],
    technologies: [
      "NestJS",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "PostGIS",
      "Redis",
      "Next.js",
      "Flutter",
      "MapLibre",
    ],
  },
];

export const experience: Record<Locale, readonly Experience[]> = {
  en: englishExperience,
  fa: persianExperience,
};

export function getExperience(locale: Locale): readonly Experience[] {
  return experience[locale];
}
