"use client";

import { motion } from "framer-motion";

const footerLinks = {
  product: [
    { name: "Features", href: "#" },
    { name: "Tracking", href: "#" },
    { name: "Business", href: "#" },
    { name: "Become Rider", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Press", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Blog", href: "#" },
    { name: "API", href: "#" },
    { name: "Changelog", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Status", href: "#" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "X", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "TikTok", href: "#" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 md:py-[120px] pb-12 md:pb-[64px] bg-white dark:bg-[#080808] border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-[96px] mb-12 md:mb-[96px]">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <img src="/images/GoDropa-FullLogo.png" alt="GoDropa Logo" className="h-12 md:h-16" />
              <img src="/images/godropa-bike.png" alt="GoDropa Bike" className="h-12 md:h-16" />
            </div>
          </div>

          {/* Product Links */}
          <div className="col-span-1">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3 text-sm transition-colors duration-300">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ color: "#FF6B00" }}
                    className="text-gray-500 dark:text-[#B5B5B5] hover:text-[#FF6B00] transition-colors text-sm"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3 text-sm transition-colors duration-300">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ color: "#FF6B00" }}
                    className="text-gray-500 dark:text-[#B5B5B5] hover:text-[#FF6B00] transition-colors text-sm"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="col-span-1">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3 text-sm transition-colors duration-300">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ color: "#FF6B00" }}
                    className="text-gray-500 dark:text-[#B5B5B5] hover:text-[#FF6B00] transition-colors text-sm"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-span-1">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3 text-sm transition-colors duration-300">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ color: "#FF6B00" }}
                    className="text-gray-500 dark:text-[#B5B5B5] hover:text-[#FF6B00] transition-colors text-sm"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors duration-300">
          <div className="text-gray-500 dark:text-[#B5B5B5] text-sm transition-colors duration-300">
            <p>© 2026 GoDropa Technologies Ltd.</p>
            <p className="mt-2">Built with ❤️ in Nigeria</p>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ color: "#FF6B00" }}
                className="text-gray-500 dark:text-[#B5B5B5] hover:text-[#FF6B00] transition-colors text-sm"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ y: -3 }}
            onClick={scrollToTop}
            className="text-gray-500 dark:text-[#B5B5B5] hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 text-sm"
          >
            Back to Top <span>↑</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
