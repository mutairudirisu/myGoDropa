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
    title: "Logistics Evolved",
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
  const springX = useSpring(x, { stiffness: 500, damping: 50 });

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
    let slideIndex = Math.round(-(info.offset.x + (info.velocity.x * 0.2)) / slideWidth);
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
      <div className="absolute -bottom-16 left-0 w-full opacity-[0.15]">
        <Image
          src="/images/logos-city.png"
          alt=""
          width={3500}
          height={600}
          className="w-full object-cover blur-[0.2px]"
          priority
        />
      </div>

      {/* Center Content - Slides */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -2 * slideWidth, right: 0 }}
        dragElastic={0.1}
        dragMomentum={true}
        onDragEnd={handleDragEnd}
        style={{ x: springX, width: `${3 * slideWidth}px` }}
        className="relative z-10 flex h-full"
      >
        {slides.map((slide, i) => (
          <div key={i} className="flex h-full flex-col items-center" style={{ width: `${slideWidth}px` }}>
            <div className="flex-1 flex flex-col items-center justify-center mt-10 px-6 mt-52">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={i === currentSlide ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/GoDropa-FullLogo-white.png"
                  alt="GoDropa"
                  width={100}
                  height={100}
                  priority
                />
              </motion.div>

              <motion.h2
                initial={{ y: 10, opacity: 0 }}
                animate={i === currentSlide ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className=" text-sm font-medium text-white tracking-wide text-center"
              >
                {slide.title}
              </motion.h2>

              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={i === currentSlide ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className=" text-white/90 text-[10px] font-medium tracking-wider text-center max-w-sm"
              >
                {slide.description}
              </motion.p>

              {i === 2 && (
                <motion.button
                  initial={{ y: 10, opacity: 0 }}
                  animate={i === currentSlide ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  onClick={onComplete}
                  className="mt-52 bg-white text-[#FF6B00] px-6 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-colors"
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
