import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web2Go",
  description: "Páginas web rápidas y de calidad, hechas a tu medida.",
  keywords: [
    "Páginas web",
    "Web",
    "Performance",
    "Velocidad",
    "Eficicencia",
    "Carga rápida",
    "Optimización",
    "SEO",
    "Diseño web",
    "Desarrollo web",
    "Web2Go",
  ],
  icons: {
    icon: "/web2go.svg",
  },
  openGraph: {
    type: "website",
    url: "https://www.web2go.com.mx/",
    title: "Web2Go",
    description: "Páginas web rápidas y de calidad, hechas a tu medida.",
    siteName: "Web2Go",
    images: [
      {
        url: "https://www.web2go.com.mx/img/web2go.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
