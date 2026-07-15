"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const APP_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://appgodropa.vercel.app";

export default function Navbar() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const checkInstalled = () => {
      if (window.matchMedia("(display-mode: standalone)").matches) {
        setIsInstalled(true);
      }
    };

    checkInstalled();

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Listen for appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleClick = async () => {
    if (isInstalled) {
      // If app is installed, open it
      window.location.href = APP_URL;
    } else if (deferredPrompt) {
      // Show install prompt
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      // If no deferred prompt, just redirect to the PWA
      window.location.href = APP_URL;
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-200 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto h-16 md:h-20 px-4 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-8 md:gap-12">
          <img
            src="/images/GoDropa-FullLogo.png"
            alt="GoDropa Logo"
            className="h-10 md:h-12"
          />

          <nav className="hidden lg:flex items-center gap-10 text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">
              Product
              <ChevronDown size={15} />
            </div>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Enterprise</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Blog</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Docs</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Changelog</a>
            <div className="flex items-center gap-1 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">
              Community
              <ChevronDown size={15} />
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleClick}
            className="bg-orange-primary text-base text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            {isInstalled ? "Open App" : "Let's Drop It"}
          </button>
        </div>
      </div>
    </header>
  );
}
