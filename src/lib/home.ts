import type { Locale } from "@/lib/i18n/config";

const homeContent = {
  en: {
    hero: {
      eyebrow: "Senior Software Engineer",
      title: "I turn ideas into software that solves real-world problems.",
      description:
        "From backend architecture and distributed services to connected devices, real-time location data, and mobile applications, I build reliable products that solve practical problems end to end.",
      primaryAction: {
        label: "Explore my projects",
        href: "/projects",
      },
      secondaryAction: {
        label: "Get in touch",
        href: "/contact",
      },
      specialtiesLabel: "AREAS OF ENGINEERING",
      specialties: [
        "Backend & APIs",
        "AI & Machine Learning",
        "Real-time Data",
        "Web & Mobile",
      ],
      selectedWorkLabel: "Selected work",
    },
    engineering: {
      eyebrow: "How I work",
      title: "Engineering with the whole system in mind.",
      description:
        "As a software engineer, I specialize in designing and building scalable systems, backend architectures, and reliable software products—from solving complex technical challenges to delivering practical solutions that perform in the real world.",
      areas: [
        {
          number: "00",
          title: "Backend & APIs",
          description:
            "Designing maintainable APIs, authentication systems, domain logic, background processing, and distributed services.",
        },
        {
          number: "01",
          title: "Product Engineering",
          description:
            "Turning product requirements into reliable, maintainable software across web and mobile.",
        },
        {
          number: "10",
          title: "Data & Infrastructure",
          description:
            "Working with relational databases, geospatial data, caching, queues, observability, and production infrastructure.",
        },
        {
          number: "11",
          title: "Mobile & Maps",
          description:
            "Building responsive mobile applications with real-time location, maps, telemetry, and device interaction.",
        },
      ],
    },
    projects: {
      eyebrow: "Selected work",
      title: "Things I've built.",
      description:
        "A selection of products and systems spanning backend infrastructure , mobile applications, and web platforms.",
      viewAll: "View all projects",
    },
    writing: {
      eyebrow: "Writing",
      title: "Notes from building software.",
      viewAll: "View all writing",
    },
    contact: {
      eyebrow: "Have something in mind?",
      title: "Let's build something useful.",
      description:
        "Whether it's a product, a technical challenge, or simply an interesting problem, I'm always interested in thoughtful conversations.",
      action: "Get in touch",
    },
  },
  fa: {
    hero: {
      eyebrow: "توسعه دهنده ارشد نرم افزار",
      title:
        "ایده‌ها را به نرم‌افزارهایی تبدیل می‌کنم که مسائل واقعی را حل می‌کنند.",
      description:
        "به‌عنوان یک مهندس نرم‌افزار، بر طراحی و توسعه سیستم‌های مقیاس‌پذیر، معماری بک‌اند و ساخت محصولات نرم‌افزاری قابل اعتماد تمرکز دارم؛ از حل مسائل پیچیده فنی تا پیاده‌سازی راهکارهایی که در دنیای واقعی عملکرد مؤثری دارند.",
      primaryAction: {
        label: "مشاهده پروژه‌ها",
        href: "/fa/projects",
      },
      secondaryAction: {
        label: "ارتباط با من",
        href: "/fa/contact",
      },
      specialtiesLabel: "حوزه‌های تخصصی",
      specialties: [
        "بک‌اند و API",
        "هوش مصنوعی",
        "داده‌های بلادرنگ",
        "وب و موبایل",
      ],
      selectedWorkLabel: "پروژه‌های منتخب",
    },
    engineering: {
      eyebrow: "رویکرد کاری",
      title: "مهندسی با درنظرگرفتن تمام اجزای سیستم.",
      description:
        "از شناخت نیازهای محصول و طراحی معماری تا هماهنگ‌کردن اجزای مختلف، به ساخت سیستم‌هایی یکپارچه و قابل اعتماد علاقه‌مندم.",
      areas: [
        {
          number: "00",
          title: "بک‌اند و API",
          description:
            "طراحی APIهای قابل نگهداری، سیستم‌های احراز هویت، منطق کسب‌وکار، پردازش‌های پس‌زمینه و سرویس‌های توزیع‌شده.",
        },
        {
          number: "01",
          title: "مهندسی محصول",
          description:
            "تبدیل نیازهای محصول به نرم‌افزاری قابل اعتماد و قابل نگهداری در پلتفرم‌های وب و موبایل.",
        },
        {
          number: "10",
          title: "داده و زیرساخت",
          description:
            "کار با پایگاه‌های داده رابطه‌ای، داده‌های مکانی، کش، صف‌ها، پایش سیستم و زیرساخت عملیاتی.",
        },
        {
          number: "11",
          title: "موبایل و نقشه",
          description:
            "ساخت اپلیکیشن‌های موبایل با قابلیت مکان‌یابی بلادرنگ، نقشه، تله‌متری و تعامل با دستگاه‌ها.",
        },
      ],
    },
    projects: {
      eyebrow: "پروژه‌های منتخب",
      title: "چیزهایی که ساخته‌ام.",
      description:
        "مجموعه‌ای از محصولات و سیستم‌ها در حوزه زیرساخت بک‌اند، اپلیکیشن‌های موبایل و پلتفرم‌های وب.",
      viewAll: "مشاهده همه پروژه‌ها",
    },
    writing: {
      eyebrow: "نوشته‌ها",
      title: "یادداشت‌هایی از تجربه ساخت نرم‌افزار.",
      viewAll: "مشاهده همه نوشته‌ها",
    },
    contact: {
      eyebrow: "ایده‌ای برای همکاری دارید؟",
      title: "بیایید چیزی کاربردی بسازیم.",
      description:
        "چه یک محصول باشد، چه یک چالش فنی یا مسئله‌ای جذاب، از گفت‌وگوهای سازنده درباره ایده‌ها و راه‌حل‌ها استقبال می‌کنم.",
      action: "ارتباط با من",
    },
  },
} as const;

export function getHomeContent(locale: Locale) {
  return homeContent[locale];
}

export function getEngineeringAreas(locale: Locale) {
  return homeContent[locale].engineering.areas;
}
