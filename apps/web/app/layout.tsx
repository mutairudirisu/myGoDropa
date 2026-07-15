import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playwrite_NZ, Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/contexts/ThemeContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const brotherSignature = localFont({
  src: "./fonts/Brother Signature.otf",
  variable: "--font-brother-signature",
});

export const metadata: Metadata = {
  title: "GoDropa - Logistics Evolved",
  description: "The fastest way to send and track packages across Nigeria. AI-powered routing, real-time tracking, and verified local drivers.",
  manifest: "/manifest.json",
  themeColor: "#FF6B00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${jetBrainsMono.variable} ${brotherSignature.variable} transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
