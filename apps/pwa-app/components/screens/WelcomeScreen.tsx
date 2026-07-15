"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface WelcomeScreenProps {
  onNext: () => void;
}

export default function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-sm w-full"
      >
        <div className="mb-8">
          <img
            src="/images/GoDropa-Logo.png"
            alt="GoDropa Logo"
            className="w-24 h-24 object-contain mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome to <span className="text-orange-primary">GoDropa</span>
          </h2>
          <p className="text-gray-600">
            Move anything, anywhere, anytime.
          </p>
        </div>

        <div className="relative mb-8 h-48">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/images/GoDrop-Backpack-side.png"
              alt="GoDropa"
              className="h-full object-contain"
            />
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={onNext}
            className="w-full py-3 bg-orange-primary text-white rounded-full font-semibold hover:bg-orange-dark transition-colors flex items-center justify-center gap-2"
          >
            Continue with Phone
          </button>

          <button
            disabled
            className="w-full py-3 bg-gray-100 text-gray-600 rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            Continue with Google
          </button>

          <button
            disabled
            className="w-full py-3 bg-gray-100 text-gray-600 rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            Continue with Apple
          </button>

          <p className="text-xs text-gray-500 mt-4">
            By continuing, you agree to our Terms & Privacy Policy
          </p>
        </div>
      </motion.div>
    </div>
  );
}
