"use client";

import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

type FeatureCardProps = {
  id: number;
  title: string;
  description: string;
  imageUrlDark: string;
  imageUrlLight: string;
};

export default function FeatureCard({
  id,
  title,
  description,
  imageUrlDark,
  imageUrlLight,
}: FeatureCardProps) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="w-full min-w-[280px] md:min-w-[350px] max-w-md md:max-w-[350px] mx-auto md:mx-0 mr-0 md:mr-8 last:md:mr-0"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="text-base md:text-lg font-bold text-orange-primary">
          [{String(id).padStart(2, "0")}]
        </span>
      </div>

      <h3 className="text-base md:text-lg text-gray-900 dark:text-white mb-4 transition-colors duration-300">{title}</h3>

      <div className="relative overflow-hidden rounded-xl mb-4">
        <motion.img
          src={theme === "light" ? imageUrlLight : imageUrlDark}
          alt={title}
          className="w-full h-auto transition-all duration-300"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <p className="text-xs md:text-sm mt-2 text-gray-500 dark:text-gray-400 transition-colors duration-300">{description}</p>
    </motion.div>
  );
}
