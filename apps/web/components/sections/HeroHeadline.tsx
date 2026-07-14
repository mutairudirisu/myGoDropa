"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["EVOLVED.", "AUTOMATED.", "SIMPLIFIED.", "DELIVERED."];

export default function HeroHeadline() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-6"
    >
      {/* Badge */}
      <div className="mb-6 md:mb-8 inline-flex items-center gap-2 rounded-full border border-orange-300/50 bg-orange-50 px-4 md:px-5 py-1.5 md:py-2 text-orange-600 dark:text-orange-400">
        <p className="text-xs md:text-sm">⚡ GoDropa AI is now live</p>
      </div>

      {/* Headline */}
      <h1 className="leading-[0.9]">
        <span className="block text-3xl md:text-5xl lg:text-[4em] font-black tracking-tight text-gray-900 dark:text-white font-[var(--font-brother-signature)]">
          LOGISTICS
        </span>

        <span className="block text-3xl md:text-5xl lg:text-[4rem] font-black tracking-tight text-orange-primary font-[var(--font-brother-signature)]">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {words[currentWordIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
      </h1>

      <p className="mt-6 md:mt-8 max-w-2xl text-sm md:text-lg text-gray-500 dark:text-gray-400 transition-colors duration-300">
        The fastest way to send and track packages across Nigeria.
        AI-powered routing, real-time tracking, and verified local drivers.
      </p>
    </motion.div>
  );
}
