"use client";

import { ReactNode } from "react";

interface AuthButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  className?: string;
}

export default function AuthButton({
  children,
  onClick,
  disabled,
  loading = false,
  type = "button",
  variant = "primary",
  className = "",
}: AuthButtonProps) {
  const baseStyles =
    "h-14 w-full rounded-2xl text-base font-semibold transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-orange-primary text-white hover:bg-orange-dark shadow-lg shadow-orange-200",
    secondary:
      "bg-gray-50 text-gray-800 border border-gray-200 hover:bg-gray-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {loading ? (
        <>
          <span className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
}
