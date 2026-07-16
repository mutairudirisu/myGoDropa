import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat, Bevan, Permanent_Marker, Bricolage_Grotesque, Quicksand } from "next/font/google";
import "./globals.css";
import { PWAServiceWorker } from "@/components/PWAServiceWorker";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const bevan = Bevan({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bevan",
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-permanent-marker",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bricolage-grotesque",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
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
    <html lang="en" className={`${quicksand.variable} ${montserrat.variable} ${bevan.variable} ${permanentMarker.variable} ${bricolageGrotesque.variable} ${geistMono.variable}`}>
      <body className={`${quicksand.variable} ${geistMono.variable}`}>
        <PWAServiceWorker />
        {children}
      </body>
    </html>
  );
}
