import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playwrite_NZ, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/contexts/ThemeContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${jetBrainsMono.variable} ${brotherSignature.variable} transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
