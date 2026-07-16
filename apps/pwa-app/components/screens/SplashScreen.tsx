"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Orange Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00] via-[#FF7A00] to-[#FF9500]" />

      {/* Right Glow */}
      <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] rounded-full bg-white/10 blur-[120px]" />

      {/* Bottom City */}
      <div className="absolute -bottom-14 left-0 w-full opacity-[0.15]">
        <Image
          src="/images/logos-city.png"
          alt=""
          width={3500}
          height={600}
          className="w-full object-cover blur-[0.2px]"
          priority
        />
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/GoDropa-FullLogo-white.png"
            alt="GoDropa"
            width={120}
            height={120}
            priority
            className="text-orange-500"
          />
        </motion.div>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[8px] pl-12 font-medium text-white text-center tracking-wide font-permanent-marker"
        >
          By GIGS Labs
        </motion.h2>


        {/* Loading Indicator
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 flex gap-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div> */}
      </div>
        {/* <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-0 text-md font-medium text-white text-center tracking-wide"
        >
          Logistics Evolved
        </motion.h2> */}
    </main>
  );
}
