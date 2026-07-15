"use client";

import Image from "next/image";
import SplashIndicator from "./SplashIndicator";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

const slides = [
  {
    title: "Moving Nigeria Forward",
    description: "Fast, reliable delivery across the nation"
  },
  {
    title: "Track in Real-Time",
    description: "See your rider's location live as they deliver"
  },
  {
    title: "Get Started Now",
    description: "Sign up and start sending packages in minutes"
  }
];

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(400);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const updateWidth = () => {
      setSlideWidth(window.innerWidth);
      x.set(-currentSlide * window.innerWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [currentSlide, x]);

  const handleDragEnd = (_: any, info: any) => {
    const slideIndex = Math.round(-(info.offset.x + (info.velocity.x * 0.1)) / slideWidth);
    const newIndex = Math.max(0, Math.min(2, slideIndex));
    setCurrentSlide(newIndex);
    x.set(-newIndex * slideWidth);
  };

  return (
    <main className="relative min-h-[100svh] overflow-hidden">
      {/* Orange Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00] via-[#FF7A00] to-[#FF9500]" />

      {/* Right Glow */}
      <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] rounded-full bg-white/10 blur-[120px]" />

      {/* Bottom City */}
      <div className="absolute bottom-0 left-0 w-full opacity-[0.12]">
        <Image
          src="/images/logos-city.png"
          alt=""
          width={2200}
          height={350}
          className="w-full object-cover blur-[0.2px]"
          priority
        />
      </div>

      {/* Center Content - Slides */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -2 * slideWidth, right: 0 }}
        dragElastic={0.2}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        style={{ x: springX, width: `${3 * slideWidth}px` }}
        className="relative z-10 flex h-full"
      >
        {slides.map((slide, i) => (
          <div key={i} className="flex h-full flex-col items-center" style={{ width: `${slideWidth}px` }}>
            <div className="flex-1 flex flex-col items-center justify-center mt-16 px-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Image
                  src="/images/GoDropa-FullLogo-white.png"
                  alt="GoDropa"
                  width={150}
                  height={150}
                  priority
                />
              </motion.div>

              <motion.h2
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                className="mt-10 text-2xl font-bold text-white text-center"
              >
                {slide.title}
              </motion.h2>

              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.4 }}
                className="mt-4 text-white/90 text-sm font-medium tracking-wide text-center max-w-xs"
              >
                {slide.description}
              </motion.p>

              {i === 2 && (
                <motion.button
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.6 }}
                  onClick={onComplete}
                  className="mt-8 bg-white text-[#FF6B00] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </motion.button>
              )}
            </div>

            <div className="mb-10" />
          </div>
        ))}
      </motion.div>

      {/* Slider */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <SplashIndicator currentSlide={currentSlide} />
      </div>
    </main>
  );
}
