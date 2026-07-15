import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat, Knewave } from "next/font/google";
import "./globals.css";
import { PWAServiceWorker } from "@/components/PWAServiceWorker";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

const knewave = Knewave({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-knewave",
});

export const metadata: Metadata = {
  title: "GoDropa - PWA",
  description: "GoDropa mobile PWA",
  manifest: "/manifest.json",
  themeColor: "#FF6B00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${geistMono.variable} ${knewave.variable}`}>
        <PWAServiceWorker />
        {children}
      </body>
    </html>
  );
}
