"use client";

import Skiper103 from "@/components/v1/skiper103";

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-black transition-colors duration-300">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 transition-colors duration-300">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            Got questions? We've got answers! Check out our FAQs below.
          </p>
        </div>
        <Skiper103 />
      </div>
    </section>
  );
};

export default FAQ;
