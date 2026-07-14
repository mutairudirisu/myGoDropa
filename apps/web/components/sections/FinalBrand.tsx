"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function FinalBrand() {
  const [pins, setPins] = useState<Array<{ x: string; y: string; duration: number; delay: number; yOffset: string }>>([]);
  const [lines, setLines] = useState<Array<{ width: string; top: string; left: string; duration: number; delay: number; xOffset: string }>>([]);

  useEffect(() => {
    // Generate random data for pins and lines in useEffect to avoid hydration mismatch
    const newPins = Array.from({ length: 10 }, () => ({
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      duration: 4 + Math.random() * 4,
      delay: Math.random() * 2,
      yOffset: `${Math.random() * -200}px`,
    }));

    const newLines = Array.from({ length: 5 }, () => ({
      width: `${Math.random() * 200 + 100}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 2,
      xOffset: `${Math.random() * 200}px`,
    }));

    setPins(newPins);
    setLines(newLines);
  }, []);

  return (
    <section className="min-h-screen bg-[#FF6B00] flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Animated route lines and pins */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {pins.map((pin, i) => (
          <motion.div
            key={i}
            className="absolute bg-black/20 w-2 h-2 rounded-full"
            initial={{
              x: pin.x,
              y: pin.y,
            }}
            animate={{
              y: [null, pin.yOffset, null],
            }}
            transition={{
              duration: pin.duration,
              repeat: Infinity,
              ease: "linear",
              delay: pin.delay,
            }}
          />
        ))}

        {lines.map((line, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute bg-black/10 h-1"
            style={{
              width: line.width,
              top: line.top,
              left: line.left,
            }}
            animate={{
              x: [null, line.xOffset, null],
            }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              ease: "linear",
              delay: line.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src="/images/godropa-bike.png"
          alt="GoDropa Bike"
          className="h-20 sm:h-28 md:h-40 lg:h-48 mx-auto mb-6 md:mb-8"
        />
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] font-black text-black tracking-tighter mb-4 md:mb-8"
        >
          GODROPA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-4xl font-semibold text-black"
        >
          Delivering Africa Forward
        </motion.p>
      </div>
    </section>
  );
}
