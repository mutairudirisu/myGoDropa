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

const skSeren = localFont({
  src: [
    { path: "./fonts/SKSeren-Regular-iF66051341ab20b.ttf", weight: "400", style: "normal" },
    { path: "./fonts/SKSeren-Italic-iF660513414f035.ttf", weight: "400", style: "italic" },
    { path: "./fonts/SKSeren-Medium-iF660513419956b.ttf", weight: "500", style: "normal" },
    { path: "./fonts/SKSeren-MediumItalic-iF660513413f7e9.ttf", weight: "500", style: "italic" },
    { path: "./fonts/SKSeren-SemiBold-iF6605134185ec2.ttf", weight: "600", style: "normal" },
    { path: "./fonts/SKSeren-SemiBoldItalic-iF660513412b60e.ttf", weight: "600", style: "italic" },
    { path: "./fonts/SKSeren-Bold-iF6605134170a3f.ttf", weight: "700", style: "normal" },
    { path: "./fonts/SKSeren-BoldItalic-iF6605134117ccd.ttf", weight: "700", style: "italic" },
    { path: "./fonts/SKSeren-ExtraBold-iF660513415eabf.ttf", weight: "800", style: "normal" },
    { path: "./fonts/SKSeren-ExtraBoldItalic-iF66051340f113a.ttf", weight: "800", style: "italic" },
  ],
  variable: "--font-sk-seren",
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
    <html lang="en" className={`${quicksand.variable} ${montserrat.variable} ${bevan.variable} ${permanentMarker.variable} ${bricolageGrotesque.variable} ${geistMono.variable} ${skSeren.variable}`}>
      <body className={` ${skSeren.className}`}>
        <PWAServiceWorker />
        {children}
      </body>
    </html>
  );
}
