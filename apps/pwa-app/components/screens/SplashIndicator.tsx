"use client";

import { motion } from "framer-motion";

interface SplashIndicatorProps {
  currentSlide: number;
}

export default function SplashIndicator({ currentSlide }: SplashIndicatorProps) {
  return (
    <div className="flex items-center gap-2">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          initial={false}
          animate={{
            width: i === currentSlide ? 32 : 8,
            height: i === currentSlide ? 6 : 8,
            opacity: i === currentSlide ? 1 : i === (currentSlide + 1) % 3 ? 0.7 : 0.35,
          }}
          transition={{ duration: 0.5 }}
          className="rounded-full bg-white"
        />
      ))}
    </div>
  );
}
