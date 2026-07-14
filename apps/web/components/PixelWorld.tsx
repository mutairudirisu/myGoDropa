"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type PixelData = {
  id: number;
  left: number;
  top: number;
  delay: number;
};

export default function PixelWorld() {
  const [pixels, setPixels] = useState<PixelData[]>([]);

  useEffect(() => {
    const newPixels: PixelData[] = Array.from({ length: 800 }).map((_, i) => ({
      id: i,
      left: Math.random() * 700,
      top: Math.random() * 700,
      delay: Math.random() * 2,
    }));
    setPixels(newPixels);
  }, []);

  return (
    <div className="absolute left-0 top-0 h-full w-1/2 overflow-hidden">
      {pixels.map((pixel) => (
        <motion.div
          key={pixel.id}
          className="absolute bg-gray-900/20 dark:bg-white/40 transition-colors duration-300"
          style={{
            width: 4,
            height: 4,
            left: pixel.left,
            top: pixel.top,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            delay: pixel.delay,
          }}
        />
      ))}
    </div>
  );
}
