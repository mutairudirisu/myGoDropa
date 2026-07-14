"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const defaultFAQs: FAQItem[] = [
  {
    id: 0,
    question: "How long does delivery take?",
    answer: "Delivery times vary based on your location and package size, but most deliveries in major cities are completed within 1-2 hours.",
  },
  {
    id: 1,
    question: "Is GoDropa insured?",
    answer: "Yes! All deliveries are automatically insured for your peace of mind.",
  },
  {
    id: 2,
    question: "How do I track my package?",
    answer: "You can track your package in real-time through our app or website using your order number.",
  },
  {
    id: 3,
    question: "How do drivers get paid?",
    answer: "Drivers are paid weekly via bank transfer for all completed deliveries.",
  },
  {
    id: 4,
    question: "Can businesses integrate?",
    answer: "Absolutely! We offer a robust API for businesses to integrate GoDropa into their workflows.",
  },
];

interface Skiper103Props {
  faqs?: FAQItem[];
}

const Skiper103 = ({ faqs = defaultFAQs }: Skiper103Props) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl overflow-hidden transition-colors duration-300"
        >
          <button
            onClick={() => toggleFAQ(faq.id)}
            className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
          >
            <span className="font-semibold text-gray-900 dark:text-white text-lg transition-colors duration-300">
              {faq.question}
            </span>
            <motion.div
              animate={{ rotate: activeId === faq.id ? 45 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {activeId === faq.id ? (
                <Minus className="w-6 h-6 text-orange-primary" />
              ) : (
                <Plus className="w-6 h-6 text-orange-primary" />
              )}
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {activeId === faq.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed transition-colors duration-300">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Skiper103;
