"use client";

import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

interface AuthHeaderProps {
  onBack?: () => void;
  title?: string;
  rightAction?: ReactNode;
}

export default function AuthHeader({ onBack, title, rightAction }: AuthHeaderProps) {
  return (
    <header className="shrink-0 flex items-center gap-4 px-6 py-4">
      {onBack ? (
        <button
          onClick={onBack}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm active:scale-95 transition-transform"
          aria-label="Go back"
        >
          <ArrowLeft className="h-5 w-5 text-gray-900" />
        </button>
      ) : (
        <div className="h-11 w-11 shrink-0" />
      )}

      {title && (
        <h1 className="text-lg font-semibold text-gray-900 truncate">{title}</h1>
      )}

      {rightAction && <div className="ml-auto shrink-0">{rightAction}</div>}
    </header>
  );
}
