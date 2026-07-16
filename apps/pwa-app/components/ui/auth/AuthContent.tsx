"use client";

import { ReactNode } from "react";

interface AuthContentProps {
  children: ReactNode;
  className?: string;
}

export default function AuthContent({ children, className = "" }: AuthContentProps) {
  return (
    <div className={`flex-1 overflow-y-auto overscroll-contain px-4 ${className}`}>
      {children}
    </div>
  );
}
