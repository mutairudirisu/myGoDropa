"use client";

import { Bell } from "lucide-react";
import { motion } from "framer-motion";

interface EnableNotificationsScreenProps {
  onNext: () => void;
  onSkip: () => void;
}

export default function EnableNotificationsScreen({ onNext, onSkip }: EnableNotificationsScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-sm w-full"
      >
        <div className="relative w-36 h-36 mx-auto mb-8">
          <div className="absolute inset-0 bg-orange-primary/10 rounded-full" />
          <div className="absolute inset-4 flex items-center justify-center">
            <Bell className="w-20 h-20 text-orange-primary" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Stay Connected
        </h2>
        <p className="text-gray-600 mb-10">
          Allow notifications so we can update you on your deliveries, rider status and more.
        </p>

        <div className="space-y-4">
          <button
            onClick={onNext}
            className="w-full py-4 bg-orange-primary text-white rounded-full font-semibold hover:bg-orange-dark transition-colors flex items-center justify-center gap-2"
          >
            Slide to Enable
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-white" />
            </div>
          </button>

          <button
            onClick={onSkip}
            className="w-full py-4 text-gray-500 font-semibold hover:text-gray-700 transition-colors"
          >
            Not Now
          </button>
        </div>
      </motion.div>
    </div>
  );
}
