// app/layout.js
import Script from 'next/script';
import "./globals.css";

// Data for the JSON-LD script
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Вайб-кодинг с AI: Создание сайтов и Telegram-ботов",
  "description": "3-недельный практический интенсив по созданию веб-сайтов и Telegram-ботов с помощью AI инструментов",
  "provider": { "@type": "Person", "name": "Сережа Рис", "url": "https://t.me/r1iiis" },
  "instructor": { "@type": "Person", "name": "Сережа Рис" },
  "courseMode": "online",
  "educationalLevel": "Beginner",
  "teaches": ["Создание сайтов с помощью AI", "Разработка Telegram-ботов", "Работа с ChatGPT и Claude", "Промпт-инжиниринг"],
  "startDate": "2024-05-30",
  "duration": "P21D",
  "offers": [
    { "@type": "Offer", "price": "2990", "priceCurrency": "RUB", "name": "Самостоятельный" },
    { "@type": "Offer", "price": "12000", "priceCurrency": "RUB", "name": "Стандартный" },
    { "@type": "Offer", "price": "24000", "priceCurrency": "RUB", "name": "VIP" }
  ]
};

export const metadata = {
  title: "Вайб-кодинг с AI: Создавай сайты и Telegram-ботов в чате с ИИ | Сережа Рис",
  description: "3-недельный интенсив с Сережей Рисом. Создавай сайты и Telegram-ботов через чат с AI. Старт 30 мая. 3 практические лекции. Без опыта программирования.",
  keywords: ["AI", "вайб-кодинг", "создание сайтов", "telegram бот", "ChatGPT", "Claude", "веб-разработка", "без кода", "Сережа Рис", "интенсив"],
  author: [{ name: "Сережа Рис" }],
  robots: "index, follow",
  themeColor: "#0071e3",
  appleWebApp: { capable: "yes", statusBarStyle: "default", title: "Вайб-кодинг с AI" },
  alternates: { canonical: "https://school.hsl.sh/" },
  openGraph: {
    type: "website",
    url: "https://school.hsl.sh/",
    title: "Вайб-кодинг с AI: Создавай сайты и Telegram-ботов в чате с ИИ",
    description: "3-недельный интенсив с Сережей Рисом. Создавай сайты и Telegram-ботов через чат с AI. Старт 30 мая. Без опыта программирования.",
    images: [{ url: "https://school.hsl.sh/og-image.jpg", width: 1200, height: 630 }],
    siteName: "Вайб-кодинг с AI",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://school.hsl.sh/",
    title: "Вайб-кодинг с AI: Создавай сайты и Telegram-ботов в чате с ИИ",
    description: "3-недельный интенсив с Сережей Рисом. Создавай сайты и Telegram-ботов через чат с AI. Старт 30 мая.",
    images: ["https://school.hsl.sh/og-image.jpg"],
    creator: "@r1iiis",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-apple text-apple-black bg-white overflow-x-hidden">
        {children}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FMC7N45N42" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FMC7N45N42');
          `}
        </Script>
      </body>
    </html>
  );
}