"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { StickyFeatures } from "./StickyFeatures";

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

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const lastCardRef = useRef<HTMLDivElement>(null);
  const [totalScrollDistance, setTotalScrollDistance] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const calculateDistance = () => {
      if (lastCardRef.current && cardsContainerRef.current) {
        const lastCard = lastCardRef.current;
        const viewportWidth = window.innerWidth;
        // Calculate how far we need to scroll to get the last card fully visible
        const distance = lastCard.offsetLeft - (viewportWidth - lastCard.offsetWidth - 500);
        setTotalScrollDistance(Math.max(distance, 0));
      }
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);
    return () => window.removeEventListener("resize", calculateDistance);
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -totalScrollDistance]
  );

  return (
    <>
      {/* Mobile/Tablet sticky card stack */}
      <div className="lg:hidden">
        <StickyFeatures />
      </div>

      {/* Desktop horizontal layout */}
      <section
        ref={containerRef}
        className="relative h-[700vh] bg-slate-50 dark:bg-zinc-900 transition-colors duration-300 hidden lg:block"
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex items-center gap-16 pl-10"
          >
            {/* Left: Title */}
            <div className="min-w-[500px] flex items-center">
              <h2 className="text-5xl md:text-5xl font-medium text-gray-900 dark:text-white leading-tight transition-colors duration-300">
                Features of 
                <br />
                <span className="text-orange-primary text-4xl">GoDropa</span>
              </h2>
            </div>

            {/* Right: Cards */}
            <div ref={cardsContainerRef} className="flex gap-8 pr-24">
              {features.map((feature, index) => (
                <div
                  ref={index === features.length - 1 ? lastCardRef : null}
                  key={feature.id}
                >
                  <FeatureCard
                    id={feature.id}
                    title={feature.title}
                    description={feature.description}
                    imageUrlDark={feature.imageUrlDark}
                    imageUrlLight={feature.imageUrlLight}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
