"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { usePWAInstall } from "@/hooks/usePWAInstall";

const APP_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://appgodropa.vercel.app";

export default function Navbar() {
  const { install, isInstallable, isInstalled, isIOS } = usePWAInstall();
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  const handleClick = async () => {
    if (isInstalled) {
      // If app is installed, open it
      window.location.href = APP_URL;
    } else if (isInstallable) {
      // Show install prompt
      await install();
    } else if (isIOS) {
      setShowIOSInstructions(!showIOSInstructions);
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

        <div className="flex items-center gap-4 relative">
          <button
            onClick={handleClick}
            className="bg-orange-primary text-base text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            {isInstalled ? "Open App" : "Let's Drop It"}
          </button>
          {showIOSInstructions && (
            <div className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg z-50">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                To install the app on iOS:
              </p>
              <ol className="list-decimal list-inside text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                <li>Open <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="text-orange-primary font-medium">{APP_URL}</a> in Safari</li>
                <li>Tap the share button <span className="inline-block align-middle">⎋</span></li>
                <li>Select "Add to Home Screen"</li>
              </ol>
              <button
                onClick={() => setShowIOSInstructions(false)}
                className="mt-3 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                Got it
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
