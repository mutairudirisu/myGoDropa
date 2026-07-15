"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { Knewave } from "next/font/google";

const knewave = Knewave({
  subsets: ["latin"],
  weight: "400",
});

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-[#FF6B00]">
      {/* Center Content */}
      <div className="flex flex-1 items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={`${knewave.className} -rotate-12 select-none text-center text-white`}
          style={{
            fontSize: "clamp(60px,8vw,120px)",
            lineHeight: 0.9,
          }}
        >
          LOGISTICS
          <br />
          EVOLVED
        </motion.h1>
      </div>

      {/* Bottom */}
      <div className="mb-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8 flex items-center gap-2"
        >
          <img
            src="/images/GoDropa-Logo.png"
            alt="GoDropa Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-2xl font-bold text-white">GoDropa</span>
        </motion.div>

        {/* Loader */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 1,
          }}
          className="h-5 w-5 rounded-full border-2 border-white/40 border-t-white"
        />
      </div>
    </main>
  );
}
