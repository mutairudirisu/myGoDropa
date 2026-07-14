"use client";

import PixelWorld from "../PixelWorld";
import HeroHeadline from "./HeroHeadline";
import BottomHero from "./BottomHero";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-slate-50 dark:bg-black transition-colors duration-300">
      <PixelWorld />

      <div className="relative z-10 h-full flex flex-col">
        {/* Headline */}
        <HeroHeadline />

        {/* Bottom CTA */}
        <BottomHero />
      </div>
    </section>
  );
}
