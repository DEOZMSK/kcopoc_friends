import type { Metadata } from "next";
import "./globals.css";
import { Jura, Manrope, Rubik_Glitch } from "next/font/google";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope"
});

const jura = Jura({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jura"
});

const rubikGlitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubik-glitch"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://systema-samozapuska.example"),
  title: "Система Самозапуска — Манифест взаимной экономики",
  description:
    "Начни своё дело из дома. Помогаю собрать систему — сайт, бот и витрину без бюджета и опыта.",
  openGraph: {
    title: "Система Самозапуска — Манифест взаимной экономики",
    description:
      "Начни своё дело из дома. Сайт, бот, витрина — без бюджета и опыта.",
    url: "https://systema-samozapuska.example",
    siteName: "Система Самозапуска",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Система Самозапуска — Манифест взаимной экономики"
      }
    ],
    locale: "ru_RU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Система Самозапуска — Манифест взаимной экономики",
    description:
      "Начни своё дело из дома. Сайт, бот, витрина — без бюджета и опыта.",
    images: ["/images/og-image.png"],
    creator: "@artemiy_xoros"
  },
  icons: {
    icon: "/favicon.ico"
  },
  manifest: "/manifest.json"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${jura.variable} ${rubikGlitch.variable}`}
    >
      <body className="font-sans">
        <div className="relative overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
