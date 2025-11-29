import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Zen_Kaku_Gothic_New, Varela_Round } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-zen-kaku",
  display: "swap",
});

const varelaRound = Varela_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-varela-round",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio ayutaso",
  description: "Portfolio of ayutaso - プログラミングが趣味の学生のポートフォリオサイト",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${zenKaku.variable} ${varelaRound.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
