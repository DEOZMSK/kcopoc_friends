import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "mr.Kcopoc — консультации";
const siteDescription =
  "Начни своё дело из дома. Помогаю собрать систему — сайт, бот и витрину без бюджета и опыта.";
const siteUrl = "https://systema-samozapuska.example";

const openGraphSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FFD580" />
        <stop offset="100%" stop-color="#C7FFDB" />
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="#111827" />
    <rect width="1200" height="630" fill="url(#gradient)" opacity="0.35" />
    <text x="80" y="280" font-family="'Segoe UI', system-ui, -apple-system, sans-serif" font-size="72" font-weight="700" fill="#F6F3ED">
      mr.Kcopoc
    </text>
    <text x="80" y="350" font-family="'Segoe UI', system-ui, -apple-system, sans-serif" font-size="52" font-weight="600" fill="#C7FFDB">
      консультации
    </text>
    <text x="80" y="430" font-family="'Segoe UI', system-ui, -apple-system, sans-serif" font-size="30" fill="#E5E7EB" opacity="0.9">
      Начни своё дело из дома. Помогаю собрать систему — сайт, бот и витрину
    </text>
    <text x="80" y="470" font-family="'Segoe UI', system-ui, -apple-system, sans-serif" font-size="30" fill="#E5E7EB" opacity="0.85">
      без бюджета и опыта.
    </text>
  </svg>
`;

const openGraphImage = `data:image/svg+xml,${encodeURIComponent(openGraphSvg)}`;

const faviconDataUri =
  "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22><rect width=%2232%22 height=%2232%22 rx=%228%22 fill=%22%23111827%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22central%22 font-size=%2218%22 fill=%22%23E5E7EB%22>K</text></svg>";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "mr.Kcopoc",
    images: [
      {
        url: openGraphImage,
        width: 1200,
        height: 630,
        alt: siteTitle
      }
    ],
    locale: "ru_RU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [openGraphImage],
    creator: "@artemiy_xoros"
  },
  icons: [
    {
      rel: "icon",
      url: faviconDataUri
    }
  ],
  themeColor: "#111827"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="font-sans">
        <div className="relative overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
