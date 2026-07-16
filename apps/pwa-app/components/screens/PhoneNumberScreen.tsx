"use client";

import { useState } from "react";
import { ArrowLeft, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

interface PhoneNumberScreenProps {
  onNext: (phone: string) => void;
  onBack: () => void;
}

export default function PhoneNumberScreen({ onNext, onBack }: PhoneNumberScreenProps) {
  const [phone, setPhone] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-zinc-100">
      {/* Fixed Back Button */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center px-6 py-4">
        <button onClick={onBack} className="w-fit p-2 bg-white rounded-full flex items-center justify-center gap-2 shadow-sm">
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto overscroll-contain px-6 pt-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-col pb-8"
        >
          {/* <div className="w-14 h-14 bg-orange-primary/10 rounded-2xl flex items-center justify-center mb-6">
            <Smartphone className="w-7 h-7 text-orange-primary" />
          </div> */}

          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            What&apos;s your phone number?
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            We&apos;ll send you a 6-digit code to verify your number.
          </p>

          <div className="flex items-center gap-3 border border-orange-200 rounded-2xl p-4 mb-8">
            <span className="text-gray-900 font-medium text-sm">+234</span>
            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              value={phone}
              onChange={(e) => {
                const digits = e.target.value.replace(/[^0-9]/g, "");
                setPhone(digits);
              }}
              onFocus={(e) => {
                setTimeout(() => {
                  e.target.scrollIntoView({ behavior: "smooth", block: "center" });
                }, 300);
              }}
              placeholder="801 234 5678"
              className="flex-1 text-gray-900 text-sm bg-zinc-100 focus:outline-none"
              autoFocus
            />
          </div>
        </motion.div>

        <button
          onClick={() => onNext(phone)}
          disabled={phone.length < 9}
          className="w-full py-4 bg-orange-primary text-sm text-white rounded-full font-semibold hover:bg-orange-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
          <ArrowLeft className="w-5 h-5 rotate-180" />
        </button>
      </div>
    </div>
  );
}
