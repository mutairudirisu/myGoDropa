"use client";

import { motion } from "framer-motion";

const trustFeatures = [
  {
    icon: "🛡️",
    title: "Verified Drivers",
    description: "Every rider is identity verified.",
  },
  {
    icon: "📍",
    title: "Live Tracking",
    description: "Follow every delivery in real time.",
  },
  {
    icon: "🔒",
    title: "Secure Payments",
    description: "Protected payment processing.",
  },
  {
    icon: "📦",
    title: "Package Protection",
    description: "Proof of delivery and dispute help.",
  },
];

const TrustCard = ({ feature }: { feature: (typeof trustFeatures)[0] }) => (
  <motion.div
    whileHover={{
      y: -6,
      borderColor: "rgba(249, 115, 22, 1)",
      boxShadow: "0 0 30px rgba(249, 115, 22, 0.2)",
    }}
    transition={{ duration: 0.3 }}
    className="p-8 bg-white dark:bg-[#151515] rounded-2xl border border-gray-200 dark:border-white/10 flex-1 min-w-[250px] transition-colors duration-300"
  >
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className="text-4xl mb-4"
    >
      {feature.icon}
    </motion.div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{feature.title}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">{feature.description}</p>
  </motion.div>
);

export default function Trust() {
  return (
    <section className="py-20 md:py-32 bg-slate-50 dark:bg-[#0B0B0B] transition-colors duration-300">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 transition-colors duration-300">
            Built on Trust
          </h2>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            Every delivery is backed by verified drivers, secure payments, and real-time tracking.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {trustFeatures.map((feature, index) => (
            <TrustCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
