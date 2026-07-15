"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import BottomDrawer from "../ui/BottomDrawer";

interface EnableLocationScreenProps {
  onNext: () => void;
  onSkip: () => void;
}

export default function EnableLocationScreen({ onNext, onSkip }: EnableLocationScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <BottomDrawer isOpen={true} onClose={onSkip}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative w-36 h-36 mx-auto mb-8">
            <div className="absolute inset-0 bg-orange-primary/10 rounded-full" />
            <div className="absolute inset-4 flex items-center justify-center">
              <MapPin className="w-12 h-12 text-orange-primary" />
            </div>
          </div>

          <h2 className="text-lg font-bold text-gray-900 mb-4 text-center">
            Allow Location
          </h2>
          <div className="text-left mb-10 space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-yellow-400" />
              <p className="text-gray-600">Find nearby drivers faster</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-yellow-400" />
              <p className="text-gray-600">Accurate pickup locations</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-yellow-400" />
              <p className="text-gray-600">Real-time live tracking</p>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={onNext}
              className="w-full py-4 text-sm bg-orange-primary text-white rounded-full font-semibold hover:bg-orange-dark transition-colors flex items-center justify-center gap-2"
            >
              Enable Location
            </button>

            <button
              onClick={onSkip}
              className="w-full py-4 text-sm text-gray-500 font-semibold hover:text-gray-700 transition-colors text-center"
            >
              Later
            </button>
          </div>
        </motion.div>
      </BottomDrawer>
    </div>
  );
}
