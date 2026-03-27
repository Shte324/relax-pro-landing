import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';

// Настройка шрифтов
const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-open-sans',
  weight: ['400', '600'],
  display: 'swap',
});

// Метаданные для SEO (без viewport)
export const metadata = {
  title: 'Relax Pro | Массаж в [Город] — снимите боль и напряжение',
  description: 'Профессиональный массаж от дипломированных специалистов. Классический, спортивный, антицеллюлитный. Запишитесь онлайн!',
  keywords: 'массаж, студия массажа, классический массаж, спортивный массаж, антицеллюлитный массаж',
  authors: [{ name: 'Relax Pro' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Relax Pro | Массаж в [Город]',
    description: 'Профессиональный массаж от дипломированных специалистов',
    type: 'website',
    locale: 'ru_RU',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

// Viewport выносим в отдельный экспорт (требование Next.js 14+)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  themeColor: '#2e7d64',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}