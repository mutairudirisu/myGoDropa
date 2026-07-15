"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const APP_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://app.godropa.com";

export default function BottomHero() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const checkInstalled = () => {
      if (window.matchMedia("(display-mode: standalone)").matches) {
        setIsInstalled(true);
      }
    };
    checkInstalled();

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleDownloadClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      window.location.href = APP_URL;
    }
  };

  return (
    <div className="px-4 md:px-10 pb-10 md:pb-16">
      <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row justify-between items-center md:items-end gap-8 md:gap-0">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left w-full md:w-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Deliver Faster with
          </h2>

          <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-orange-primary">
            GoDropa
          </h2>
        </motion.div>

        {/* Right */}
        <motion.div
          className="max-w-xl w-full md:w-auto text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-white transition-colors duration-300">
            Your Professional AI Logistics Platform
          </p>

          <p className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400 transition-colors duration-300">
            Deliver packages faster.
          </p>

          <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDownloadClick}
              className="bg-orange-primary text-white font-semibold px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg rounded-full w-full sm:w-auto"
            >
              {isInstalled ? "Open App" : "Download App"}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg rounded-full transition-colors duration-300 w-full sm:w-auto"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
