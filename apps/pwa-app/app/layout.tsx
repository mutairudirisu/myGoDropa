"use client";

import localFont from "next/font/local";
import { Montserrat, Knewave } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("SW registered: ", registration);
          })
          .catch((registrationError) => {
            console.log("SW registration failed: ", registrationError);
          });
      });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>GoDropa - PWA</title>
        <meta name="description" content="GoDropa mobile PWA" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF6B00" />
      </head>
      <body className={`${montserrat.variable} ${geistMono.variable} ${knewave.variable}`}>
        {children}
      </body>
    </html>
  );
}
