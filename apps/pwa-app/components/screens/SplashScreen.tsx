"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-orange-primary to-orange-dark flex flex-col items-center justify-center text-white">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex flex-col items-center gap-4"
      >
        <img
          src="/images/GoDropa-Logo.png"
          alt="GoDropa Logo"
          className="w-32 h-32 object-contain"
        />
        <h1 className="text-4xl font-bold tracking-tight">GoDropa</h1>
        <p className="text-sm opacity-80">Moving Nigeria Forward.</p>
      </motion.div>
    </div>
  );
}
