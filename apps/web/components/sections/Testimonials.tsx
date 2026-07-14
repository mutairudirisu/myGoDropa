"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Aisha Bello",
    city: "Abuja",
    review:
      "My package arrived in under an hour. Tracking was accurate throughout.",
    rating: 5,
  },
  {
    name: "David James",
    city: "Lagos",
    review:
      "The rider was polite and professional. GoDropa has become my go-to delivery app.",
    rating: 5,
  },
  {
    name: "Chinedu Okafor",
    city: "Port Harcourt",
    review: "Pricing is transparent and much better than what I expected.",
    rating: 5,
  },
  {
    name: "Fatima Yusuf",
    city: "Kano",
    review:
      "I use GoDropa every week for my business deliveries. Highly recommended.",
    rating: 5,
  },
  {
    name: "Ibrahim Musa",
    city: "Ibadan",
    review:
      "Live tracking is a game-changer. I always know where my package is.",
    rating: 5,
  },
  {
    name: "Zainab Abdullahi",
    city: "Kaduna",
    review:
      "The wallet feature makes payments super easy. No more cash hassles!",
    rating: 5,
  },
  {
    name: "Emeka Nwankwo",
    city: "Enugu",
    review: "Business dashboard is perfect for managing all my deliveries.",
    rating: 5,
  },
  {
    name: "Amina Suleiman",
    city: "Benin City",
    review:
      "Verified drivers give me so much peace of mind when sending valuable items.",
    rating: 5,
  },
];

const logos = ["Jumia", "Konga", "Slot", "Pointek", "SPAR", "Shoprite"];

const ReviewCard = ({ review }: { review: (typeof reviews)[0] }) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="min-w-[280px] md:min-w-[400px] max-w-md md:max-w-[400px] mx-2 md:mx-3 p-6 md:p-8 bg-white dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700/50 backdrop-blur-sm relative overflow-hidden transition-colors duration-300"
  >
    {/* Subtle mirror effect overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 dark:from-white/5 to-transparent pointer-events-none transition-colors duration-300"></div>
    <div className="relative z-10">
      <p className="text-gray-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base transition-colors duration-300">"{review.review}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 dark:bg-zinc-700 flex items-center justify-center text-xl md:text-2xl transition-colors duration-300">
          👤
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base transition-colors duration-300">{review.name}</p>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">{review.city}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Testimonials() {
  const duplicatedReviews = [...reviews, ...reviews];
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const marqueeDuration = isDesktop ? 40 : 30;

  return (
    <section className="relative bg-slate-50 dark:bg-black py-16 md:py-24 overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 transition-colors duration-300">
            Loved by Nigerians
          </h2>
          <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-6 md:mb-8 transition-colors duration-300">
            Trusted by thousands of customers and businesses across Nigeria for
            fast, secure and reliable deliveries.
          </p>

          <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
            <div className="flex text-orange-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-base md:text-lg">⭐</span>
              ))}
            </div>
            <span className="text-lg md:text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">4.9/5</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">Based on 25,000+ deliveries</p>
        </div>

        <div className="flex gap-3 md:gap-4 justify-center items-center mb-10 md:mb-12 flex-wrap">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="px-4 md:px-6 py-2 md:py-3 bg-gray-100 dark:bg-white/10 rounded-full transition-colors duration-300"
            >
              <span className="text-gray-900 dark:text-white font-medium text-sm md:text-base transition-colors duration-300">{logo}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative">
        {/* Left blur effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-slate-50 dark:from-zinc-900 to-transparent z-20 pointer-events-none transition-colors duration-300"></div>
        {/* Right blur effect */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-slate-50 dark:from-zinc-900 to-transparent z-20 pointer-events-none transition-colors duration-300"></div>

        <motion.div
          className="flex gap-4 md:gap-6 mb-6 md:mb-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: marqueeDuration }}
        >
          {duplicatedReviews.map((review, index) => (
            <ReviewCard key={`top-${index}`} review={review} />
          ))}
        </motion.div>

        {isDesktop && (
          <motion.div
            className="flex gap-4 md:gap-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: marqueeDuration }}
          >
            {duplicatedReviews.map((review, index) => (
              <ReviewCard key={`bottom-${index}`} review={review} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
