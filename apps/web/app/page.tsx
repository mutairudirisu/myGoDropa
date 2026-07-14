import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Trust from "@/components/sections/Trust";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import FinalBrand from "@/components/sections/FinalBrand";
import FloatingThemeSwitcher from "@/components/FloatingThemeSwitcher";

export default function Home() {
  return (
    <main className="bg-slate-50 dark:bg-black min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <FloatingThemeSwitcher />
      <Hero />
      <Features />
      <Testimonials />
      <Trust />
      <CTA />
      <FAQ />
      <Footer />
      <FinalBrand />
    </main>
  );
}
