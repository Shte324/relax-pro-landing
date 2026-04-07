import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

// Настройка шрифтов
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-open-sans",
  weight: ["400", "600"],
  display: "swap",
});

// Метаданные для SEO (без viewport)
export const metadata = {
  title: "Relax Pro | Массаж в [Город] — снимите боль и напряжение",
  description:
    "Профессиональный массаж от дипломированных специалистов. Классический, спортивный, антицеллюлитный. Запишитесь онлайн!",
  keywords:
    "массаж, студия массажа, классический массаж, спортивный массаж, антицеллюлитный массаж",
  authors: [{ name: "Relax Pro" }],
  robots: "index, follow",
  openGraph: {
    title: "Relax Pro | Массаж в [Город]",
    description: "Профессиональный массаж от дипломированных специалистов",
    type: "website",
    locale: "ru_RU",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// Viewport выносим в отдельный экспорт (требование Next.js 14+)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  themeColor: "#2e7d64",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Relax Pro",
      "image": "https://relax-pro-landing.vercel.app/logo.jpg",
      "telephone": "+71234567890",
      "email": "info@relaxpro.ru",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "[Город]",
        "streetAddress": "ул. Центральная, д. 15, офис 304"
      },
      "priceRange": "₽₽"
    })
  }}
/>
      </head>
      <body className="font-sans antialiased">
        {children}

        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j=0; j<document.scripts.length; j++) {if (document.scripts[j].src === r) {return;}}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      ym(108280270, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true });
    `,
          }}
        />
         <Analytics />
      </body>
    </html>
  );
}
