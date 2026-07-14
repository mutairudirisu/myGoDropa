"use client";

import { motion } from "framer-motion";

export default function CTA() {
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
            className="w-full md:w-auto px-8 md:px-10 py-3 bg-[#FF6B00] hover:bg-[#E85D00] text-white font-semibold rounded-2xl text-base md:text-lg transition-colors"
          >
            Download GoDropa
          </motion.button>
        </div>
      </div>
    </section>
  );
}
