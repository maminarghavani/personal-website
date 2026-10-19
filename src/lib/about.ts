import type { Locale } from "@/lib/i18n/config";

export interface AboutContent {
  intro: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
  };

  philosophy: {
    eyebrow: string;
    title: string;
    principles: readonly {
      number: string;
      title: string;
      description: string;
    }[];
  };

  technicalAreas: readonly {
    title: string;
    description: string;
    technologies: readonly string[];
  }[];

  currentFocus: {
    eyebrow: string;
    title: string;
    description: string;
  };
}

const englishAbout: AboutContent = {
  intro: {
    eyebrow: "About",
    title: "I build software across systems, platforms, and products.",
    paragraphs: [
      "I’m a software engineer focused on building reliable products and the systems behind them. My work spans backend architecture, artificial intelligence, real-time data, geospatial systems, mobile applications, and web platforms.",
      "I enjoy working on problems where multiple parts of a system have to operate together reliably — from device communication and data pipelines to APIs, databases, maps, and user-facing applications.",
      "My approach is practical and engineering-driven: understand the problem, design the right boundaries, keep the system understandable, and build for reliability from the beginning.",
    ],
  },

  philosophy: {
    eyebrow: "Engineering philosophy",
    title: "Good engineering is about making complexity manageable.",
    principles: [
      {
        number: "00",
        title: "Understand the system",
        description:
          "Before optimizing individual features, I try to understand how data, state, infrastructure, and users move through the entire system.",
      },
      {
        number: "01",
        title: "Keep boundaries clear",
        description:
          "Well-defined responsibilities make systems easier to reason about, test, evolve, and operate as they grow.",
      },
      {
        number: "10",
        title: "Build for reality",
        description:
          "Production systems have unreliable networks, unexpected input, changing requirements, and operational constraints. Software should account for those conditions.",
      },
      {
        number: "11",
        title: "Prefer useful complexity",
        description:
          "I avoid adding infrastructure or abstractions simply because they are available. Complexity should exist because it solves a real problem.",
      },
    ],
  },

  technicalAreas: [
    {
      title: "Backend & APIs",
      description:
        "Designing backend services, APIs, authentication, authorization, domain logic, and integrations.",
      technologies: ["TypeScript", "NestJS", "Node.js", "Go"],
    },
    {
      title: "Data & Infrastructure",
      description:
        "Working with relational, geospatial, real-time, and distributed data systems.",
      technologies: [
        "PostgreSQL",
        "PostGIS",
        "TimescaleDB",
        "Redis",
        "MongoDB",
      ],
    },
    {
      title: "Connected Systems",
      description:
        "Building systems that communicate with physical devices and process real-time telemetry and commands.",
      technologies: ["TCP", "Telemetry", "Real-time systems"],
    },
    {
      title: "Web Applications",
      description:
        "Building maintainable web interfaces and administration platforms around complex backend systems.",
      technologies: ["Next.js", "React", "TypeScript", "MapLibre"],
    },
    {
      title: "Mobile Applications",
      description:
        "Developing cross-platform applications with real-time data, maps, device state, and responsive interfaces.",
      technologies: ["Flutter", "Dart", "Riverpod", "GoRouter"],
    },
    {
      title: "Geospatial Systems",
      description:
        "Working with maps, coordinates, spatial queries, routes, geofences, and location history.",
      technologies: ["PostGIS", "MapLibre", "GeoJSON", "GPS"],
    },
  ],

  currentFocus: {
    eyebrow: "Currently focused on",
    title: "Building reliable connected-device platforms.",
    description:
      "My current work is centered around GPS and connected-device systems, with a particular focus on backend architecture, real-time telemetry, geospatial data, mobile experiences, and the infrastructure that connects them.",
  },
};

const persianAbout: AboutContent = {
  intro: {
    eyebrow: "درباره من",
    title: "ساخت نرم‌افزار در مرز میان سیستم‌ها، پلتفرم‌ها و محصولات.",
    paragraphs: [
      "من یک مهندس نرم‌افزار هستم که روی ساخت محصولات قابل اعتماد و سیستم‌های زیربنایی آن‌ها تمرکز دارم. حوزه کاری من معماری بک‌اند، هوش مصنوعی، داده‌های بلادرنگ، سیستم‌های مکانی، اپلیکیشن‌های موبایل و پلتفرم‌های وب را در بر می‌گیرد.",
      "از حل مسائلی لذت می‌برم که در آن بخش‌های مختلف یک سیستم باید در کنار یکدیگر به‌صورت قابل اعتماد کار کنند؛ از ارتباط با دستگاه‌ها و پایپ‌لاین‌های داده گرفته تا APIها، پایگاه‌های داده، نقشه‌ها و اپلیکیشن‌هایی که کاربر مستقیماً با آن‌ها تعامل دارد.",
      "رویکرد من عملی و مبتنی بر مهندسی است: ابتدا مسئله را به‌درستی درک می‌کنم، مرزهای مناسب سیستم را طراحی می‌کنم، ساختار آن را قابل فهم نگه می‌دارم و از ابتدا برای قابلیت اطمینان طراحی می‌کنم.",
    ],
  },

  philosophy: {
    eyebrow: "فلسفه مهندسی",
    title: "مهندسی خوب یعنی قابل مدیریت کردن پیچیدگی.",
    principles: [
      {
        number: "00",
        title: "درک کل سیستم",
        description:
          "پیش از بهینه‌سازی ویژگی‌های منفرد، تلاش می‌کنم درک کنم داده، وضعیت، زیرساخت و کاربران چگونه در کل سیستم جریان پیدا می‌کنند.",
      },
      {
        number: "01",
        title: "مرزهای شفاف",
        description:
          "مسئولیت‌های مشخص باعث می‌شوند سیستم‌ها ساده‌تر قابل درک، تست، توسعه و نگهداری باشند.",
      },
      {
        number: "10",
        title: "ساختن برای دنیای واقعی",
        description:
          "سیستم‌های production با شبکه‌های ناپایدار، ورودی‌های غیرمنتظره، نیازمندی‌های متغیر و محدودیت‌های عملیاتی روبه‌رو هستند. نرم‌افزار باید این شرایط را از ابتدا در نظر بگیرد.",
      },
      {
        number: "11",
        title: "پیچیدگیِ مفید",
        description:
          "صرفاً به این دلیل که یک زیرساخت یا abstraction در دسترس است، از آن استفاده نمی‌کنم. پیچیدگی باید به خاطر حل یک مسئله واقعی وجود داشته باشد.",
      },
    ],
  },

  technicalAreas: [
    {
      title: "بک‌اند و API",
      description:
        "طراحی سرویس‌های بک‌اند، APIها، احراز هویت، مجوزها، منطق دامنه و یکپارچه‌سازی‌ها.",
      technologies: ["TypeScript", "NestJS", "Node.js", "Go"],
    },
    {
      title: "داده و زیرساخت",
      description:
        "کار با سیستم‌های داده رابطه‌ای، مکانی، بلادرنگ و توزیع‌شده.",
      technologies: [
        "PostgreSQL",
        "PostGIS",
        "TimescaleDB",
        "Redis",
        "MongoDB",
      ],
    },
    {
      title: "سیستم‌های متصل",
      description:
        "ساخت سیستم‌هایی که با دستگاه‌های فیزیکی ارتباط دارند و تله‌متری و فرمان‌های بلادرنگ را پردازش می‌کنند.",
      technologies: ["TCP", "Telemetry", "Real-time systems"],
    },
    {
      title: "اپلیکیشن‌های وب",
      description:
        "ساخت رابط‌های وب قابل نگهداری و پلتفرم‌های مدیریتی برای سیستم‌های بک‌اند پیچیده.",
      technologies: ["Next.js", "React", "TypeScript", "MapLibre"],
    },
    {
      title: "اپلیکیشن‌های موبایل",
      description:
        "توسعه اپلیکیشن‌های چندسکویی با داده‌های بلادرنگ، نقشه، وضعیت دستگاه و رابط‌های واکنش‌گرا.",
      technologies: ["Flutter", "Dart", "Riverpod", "GoRouter"],
    },
    {
      title: "سیستم‌های مکانی",
      description:
        "کار با نقشه‌ها، مختصات، کوئری‌های مکانی، مسیرها، ژئوفنس‌ها و تاریخچه موقعیت.",
      technologies: ["PostGIS", "MapLibre", "GeoJSON", "GPS"],
    },
  ],

  currentFocus: {
    eyebrow: "تمرکز فعلی",
    title: "ساخت پلتفرم‌های قابل اعتماد برای دستگاه‌های متصل.",
    description:
      "تمرکز فعلی من روی سیستم‌های GPS و دستگاه‌های متصل است؛ با تأکید ویژه بر معماری بک‌اند، تله‌متری بلادرنگ، داده‌های مکانی، تجربه موبایل و زیرساختی که همه این بخش‌ها را به یکدیگر متصل می‌کند.",
  },
};

export const about: Record<Locale, AboutContent> = {
  en: englishAbout,
  fa: persianAbout,
};

export function getAboutContent(locale: Locale): AboutContent {
  return about[locale];
}
