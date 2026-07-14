"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";

const features = [
  {
    id: 1,
    title: "Send and Receive Anything, Anytime",
    description:
      "Deliver documents, food, parcels, furniture and more with verified drivers across Nigeria.",
    imageUrlDark: "/images/features1.png",
    imageUrlLight: "/images/featureswhite1.png",
  },
  {
    id: 2,
    title: "Live Delivery Tracking",
    description:
      "Follow your rider in real-time from pickup to delivery.",
    imageUrlDark: "/images/features2.png",
    imageUrlLight: "/images/featureswhite2.png",
  },
  {
    id: 3,
    title: "AI Smart Pricing",
    description:
      "Get the best delivery price instantly based on traffic, distance and vehicle type.",
    imageUrlDark: "/images/features3.png",
    imageUrlLight: "/images/featureswhite3.png",
  },
  {
    id: 4,
    title: "Business Dashboard",
    description:
      "Manage thousands of deliveries, riders and customers from one dashboard.",
    imageUrlDark: "/images/features4.png",
    imageUrlLight: "/images/featureswhite4.png",
  },
  {
    id: 5,
    title: "Verified Drivers",
    description:
      "Every driver is verified for safer deliveries and greater peace of mind.",
    imageUrlDark: "/images/features5.png",
    imageUrlLight: "/images/featureswhite5.png",
  },
  {
    id: 6,
    title: "Wallet & Payments",
    description:
      "Pay securely, fund your wallet and receive refunds automatically.",
    imageUrlDark: "/images/features6.png",
    imageUrlLight: "/images/featureswhite6.png",
  },
];

const StickyFeatureCard = ({
  i,
  title,
  description,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  description: string;
  src: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="sticky top-0 flex items-center justify-center">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 100}px)`,
        }}
        className="rounded-3xl relative -top-1/4 flex flex-col overflow-hidden bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 transition-colors duration-300 w-[95%] sm:w-[90%] max-w-[500px] sm:max-w-[600px] md:max-w-[700px] origin-top"
      >
        <img src={src} alt={title} className="w-full h-auto" />
        <div className="p-4 sm:p-6 flex flex-col justify-center">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

const StickyFeatures = () => {
  const { theme } = useTheme();
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-52 pt-16 bg-slate-50 dark:bg-zinc-900 transition-colors duration-300"
      >
        <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white leading-tight transition-colors duration-300">
            Features of <br />
            <span className="text-orange-primary text-xl md:text-2xl">GoDropa</span>
          </h2>
          <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 text-gray-600 dark:text-gray-400">
            scroll down to see card stack
          </span>
        </div>
        {features.map((feature, i) => {
          const targetScale = Math.max(
            0.5,
            1 - (features.length - i - 1) * 0.1,
          );
          return (
            <StickyFeatureCard
              key={`f_${i}`}
              i={i}
              title={feature.title}
              description={feature.description}
              src={theme === "light" ? feature.imageUrlLight : feature.imageUrlDark}
              progress={scrollYProgress}
              range={[i * 0.15, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </ReactLenis>
  );
};

export { StickyFeatures };
