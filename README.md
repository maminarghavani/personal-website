# Amin — Personal Website

**Senior Software Developer · Software Engineer · Builder**

A bilingual personal portfolio and technical blog showcasing my work, engineering experience, selected projects, and technical writing.

[English](#english) · [فارسی](#فارسی)

---

## English

### About

This repository contains the source code for my personal website and portfolio.

As a software engineer, I focus on designing and building scalable systems, backend architectures, and reliable software products. My work spans backend development, distributed systems, real-time data processing, and mobile applications.

The website brings together my professional background, selected projects, and technical writing in a clean, accessible, and responsive experience.

### Features

- **Bilingual content** — English and Persian, with dedicated routes and right-to-left (RTL) support.
- **Personal portfolio** — Professional background, experience, and selected projects.
- **Technical blog** — Articles and technical notes authored with MDX.
- **Responsive design** — Optimized layouts for mobile, tablet, and desktop.
- **SEO-focused architecture** — Page metadata and search-friendly content structure.
- **Reusable UI components** — Consistent design patterns and maintainable components.
- **Localized typography** — Dedicated font support for Persian content.
- **Modern frontend architecture** — Type-safe development with a component-driven approach.

### Tech Stack

| Technology                                    | Purpose                                 |
| --------------------------------------------- | --------------------------------------- |
| [Next.js](https://nextjs.org/)                | React framework, routing, and rendering |
| [React](https://react.dev/)                   | Component-based UI development          |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe application development       |
| [Tailwind CSS](https://tailwindcss.com/)      | Utility-first styling                   |
| [MDX](https://mdxjs.com/)                     | Content-driven technical articles       |
| [shadcn/ui](https://ui.shadcn.com/)           | UI component patterns                   |
| [Base UI](https://base-ui.com/)               | Accessible UI primitives                |
| [Lucide](https://lucide.dev/)                 | Icon library                            |

### Getting Started

#### Prerequisites

- Node.js compatible with the project's Next.js version
- pnpm

#### Installation

```bash
git clone https://github.com/maminarghavani/personal-website
cd personal-website
pnpm install
```

#### Development

Start the local development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Production Build

Build and run the production version:

```bash
pnpm build
pnpm start
```

#### Code Quality

Run the checks configured in `package.json`. If the corresponding scripts are available:

```bash
pnpm lint
pnpm exec tsc --noEmit
```

### Project Structure

The application uses Next.js App Router with separate route groups for English and Persian pages.

```text
src/
├── app/
│   ├── (en)/          # English routes
│   └── (fa)/          # Persian routes
├── components/        # Shared UI components
└── lib/               # Configuration and utilities
```

The exact structure may evolve as the project grows. Refer to the repository for the current implementation.

### Development Principles

- Write readable, maintainable, and type-safe code.
- Keep components focused and reusable.
- Prioritize performance, accessibility, and responsive behavior.
- Treat SEO and metadata as part of the development process.
- Avoid unnecessary dependencies and architectural complexity.
- Introduce backend services only when a feature genuinely requires them.

### Roadmap

- [ ] Continue refining the visual design and responsive layouts.
- [ ] Improve SEO metadata and social sharing previews.
- [ ] Expand project case studies and technical articles.
- [ ] Review accessibility and performance.
- [ ] Continue improving the Persian and English experiences.

### License

This project is currently provided without a formal open-source license.

You are welcome to use, copy, modify, and distribute the code. No formal license has been applied to this project.

---

## فارسی

### معرفی

این مخزن شامل کد منبع وب‌سایت شخصی و پورتفولیوی من است.

به‌عنوان یک مهندس نرم‌افزار، بر طراحی و توسعه سیستم‌های مقیاس‌پذیر، معماری بک‌اند و ساخت محصولات نرم‌افزاری قابل اعتماد تمرکز دارم. حوزه فعالیت من توسعه بک‌اند، سیستم‌های توزیع‌شده، پردازش داده‌های بلادرنگ و اپلیکیشن‌های موبایل را در بر می‌گیرد.

این وب‌سایت بستری برای معرفی مسیر حرفه‌ای، تجربه مهندسی نرم‌افزار، پروژه‌های منتخب و نوشته‌های فنی من است که با طراحی واکنش‌گرا و تجربه کاربری یکپارچه ارائه می‌شوند.

### امکانات

- **پشتیبانی از دو زبان** — محتوای فارسی و انگلیسی با مسیرهای مجزا و پشتیبانی از چیدمان راست‌به‌چپ (RTL).
- **پورتفولیوی شخصی** — معرفی سوابق حرفه‌ای، تجربه کاری و پروژه‌های منتخب.
- **وبلاگ فنی** — انتشار مقاله‌ها و نوشته‌های تخصصی با استفاده از MDX.
- **طراحی واکنش‌گرا** — نمایش مناسب در موبایل، تبلت و دسکتاپ.
- **معماری سازگار با سئو** — ساختار مناسب صفحات و فراداده‌های مورد نیاز موتورهای جست‌وجو.
- **کامپوننت‌های قابل استفاده مجدد** — طراحی یکپارچه و کد قابل نگه‌داری.
- **تایپوگرافی فارسی** — پشتیبانی از فونت اختصاصی برای محتوای فارسی.
- **معماری مدرن فرانت‌اند** — توسعه مبتنی بر کامپوننت با استفاده از TypeScript.

### فناوری‌ها

| فناوری                                        | کاربرد                                         |
| --------------------------------------------- | ---------------------------------------------- |
| [Next.js](https://nextjs.org/)                | فریم‌ورک React، مسیریابی و رندر صفحات          |
| [React](https://react.dev/)                   | توسعه رابط کاربری مبتنی بر کامپوننت            |
| [TypeScript](https://www.typescriptlang.org/) | توسعه کد با قابلیت بررسی نوع                   |
| [Tailwind CSS](https://tailwindcss.com/)      | استایل‌دهی مبتنی بر کلاس‌های کاربردی           |
| [MDX](https://mdxjs.com/)                     | نگارش و انتشار مقاله‌های فنی                   |
| [shadcn/ui](https://ui.shadcn.com/)           | الگوها و کامپوننت‌های رابط کاربری              |
| [Base UI](https://base-ui.com/)               | اجزای پایه رابط کاربری با تمرکز بر دسترس‌پذیری |
| [Lucide](https://lucide.dev/)                 | کتابخانه آیکون‌ها                              |

### شروع کار

#### پیش‌نیازها

- نسخه‌ای از Node.js که با نسخه Next.js پروژه سازگار باشد
- pnpm

#### نصب

```bash
git clone https://github.com/maminarghavani/personal-website
cd personal-website
pnpm install
```

#### اجرای محیط توسعه

برای اجرای سرور توسعه:

```bash
pnpm dev
```

سپس آدرس [http://localhost:3000](http://localhost:3000) را در مرورگر باز کنید.

#### ساخت نسخه Production

برای ساخت و اجرای نسخه نهایی:

```bash
pnpm build
pnpm start
```

#### بررسی کیفیت کد

از دستورات تعریف‌شده در `package.json` برای بررسی کیفیت کد استفاده کنید. در صورت وجود اسکریپت‌های مربوطه:

```bash
pnpm lint
pnpm exec tsc --noEmit
```

### ساختار پروژه

این پروژه از App Router در Next.js استفاده می‌کند و مسیرهای زبان انگلیسی و فارسی را در گروه‌های جداگانه نگه می‌دارد.

```text
src/
├── app/
│   ├── (en)/          # مسیرهای انگلیسی
│   └── (fa)/          # مسیرهای فارسی
├── components/        # کامپوننت‌های مشترک رابط کاربری
└── lib/               # تنظیمات و توابع کمکی
```

ساختار دقیق پروژه ممکن است در طول توسعه تغییر کند. برای مشاهده ساختار فعلی، به فایل‌های مخزن مراجعه کنید.

### اصول توسعه

- نوشتن کد خوانا، قابل نگه‌داری و دارای نوع‌بندی مشخص.
- طراحی کامپوننت‌های مستقل و قابل استفاده مجدد.
- توجه به عملکرد، دسترس‌پذیری و طراحی واکنش‌گرا.
- در نظر گرفتن سئو و فراداده‌ها از مراحل اولیه توسعه.
- پرهیز از وابستگی‌های غیرضروری و پیچیدگی معماری.
- افزودن سرویس‌های بک‌اند فقط در صورت نیاز واقعی محصول.

### برنامه توسعه

- [ ] بهبود طراحی بصری و چیدمان صفحات در اندازه‌های مختلف.
- [ ] تکمیل فراداده‌های سئو و پیش‌نمایش اشتراک‌گذاری در شبکه‌های اجتماعی.
- [ ] گسترش معرفی پروژه‌ها و مقاله‌های فنی.
- [ ] بررسی و بهبود دسترس‌پذیری و عملکرد.
- [ ] ارتقای مستمر تجربه فارسی و انگلیسی.

### مجوز استفاده

این پروژه در حال حاضر فاقد مجوز رسمی نرم‌افزار متن‌باز است.

استفاده، کپی، تغییر و انتشار کد برای همه آزاد است. با این حال، هیچ مجوز رسمی برای این پروژه تعریف نشده است.
