"use client";

import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function AuthLayout({ children, className = "" }: AuthLayoutProps) {
  return (
    <main
      className={`min-h-[100svh] flex flex-col overscroll-contain bg-white ${className}`}
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {children}
    </main>
  );
}
