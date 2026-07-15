"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const APP_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://app.godropa.com";

export default function CTA() {
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

  const handleClick = async () => {
    if (isInstalled) {
      window.location.href = APP_URL;
    } else if (deferredPrompt) {
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
    <section className="py-16 md:py-24 bg-white dark:bg-[#080808] border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 transition-colors duration-300">
              Ready to Deliver Smarter?
            </h2>
            <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 max-w-lg transition-colors duration-300">
              Join thousands of Nigerians using GoDropa to send, track and manage deliveries with confidence.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleClick}
            className="w-full md:w-auto px-8 md:px-10 py-3 bg-[#FF6B00] hover:bg-[#E85D00] text-white font-semibold rounded-2xl text-base md:text-lg transition-colors"
          >
            {isInstalled ? "Open App" : "Download App"}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
