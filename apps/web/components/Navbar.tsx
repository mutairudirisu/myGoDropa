"use client";

import { ChevronDown } from "lucide-react";

export default function Navbar() {
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
          <button className="bg-orange-primary text-base text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform">
            Let Drop it
          </button>
        </div>
      </div>
    </header>
  );
}
