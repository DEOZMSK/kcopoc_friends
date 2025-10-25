import type { Metadata } from "next";
import { Playfair_Display, Unbounded } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body"
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-vogue"
});

export const metadata: Metadata = {
  title: "Система самозапуска — манифест",
  description:
    "Манифест живой системы самозапуска mr.Kcopoc: пространство доверия и взаимной экономики, где человек начинает путь заново.",
  openGraph: {
    title: "Система самозапуска — манифест",
    description:
      "Пространство доверия, где человек начинает путь заново и поддерживает систему взаимной экономикой.",
    type: "website",
    locale: "ru_RU"
  },
  twitter: {
    card: "summary_large_image",
    title: "Система самозапуска — манифест",
    description:
      "Пространство доверия, где человек начинает путь заново и поддерживает систему взаимной экономикой."
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${unbounded.className} ${unbounded.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
