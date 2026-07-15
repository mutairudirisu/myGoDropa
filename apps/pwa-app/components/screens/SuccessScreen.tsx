"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SuccessScreenProps {
  onNext: () => void;
}

export default function SuccessScreen({ onNext }: SuccessScreenProps) {
  const [confetti, setConfetti] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const colors = [
      "#FF6B00",
      "#FFD700",
      "#FF69B4",
      "#00CED1",
      "#32CD32",
    ];
    const pieces = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setConfetti(
      pieces.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -20, x: `${p.x}vw`, opacity: 0, rotate: 0 }}
          animate={{
            y: ["-20px", "100vh"],
            x: [`${p.x}vw`, `${p.x + (Math.random() - 0.5) * 20}vw`],
            opacity: [0, 1, 0],
            rotate: [0, Math.random() * 360],
          }}
          transition={{ duration: 2, delay: p.delay, repeat: Infinity }}
          style={{
            position: "absolute",
            top: 0,
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: p.color,
          }}
        />
      ))
    );
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {confetti}
      <motion.div
        initial={{ y: 20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-sm w-full relative z-10"
      >
        <div className="w-24 h-24 bg-green-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-12 h-12 text-green-primary" />
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Account Created Successfully! 🎉
        </h2>
        <p className="text-gray-600 mb-10 text-sm">
          Welcome to GoDropa! Your account is ready to go.
        </p>

        <button
          onClick={onNext}
          className="w-full text-sm py-4 bg-orange-primary text-white rounded-full font-semibold hover:bg-orange-dark transition-colors flex items-center justify-center gap-2"
        >
          Enter Dashboard
        </button>
      </motion.div>
    </div>
  );
}
