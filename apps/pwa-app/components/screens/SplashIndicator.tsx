"use client";

import { motion } from "framer-motion";

interface SplashIndicatorProps {
  currentSlide: number;
}

export default function SplashIndicator({ currentSlide }: SplashIndicatorProps) {
  return (
    <div className="relative h-2 w-24 rounded-full bg-white/30 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 h-full w-1/3 bg-white rounded-full"
        animate={{
          x: `${currentSlide * 100}%`,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 50 }}
      />
    </div>
  );
}
