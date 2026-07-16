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
   <div className="h-[100svh] flex flex-col bg-zinc-100">

  {/* Fixed Header */}
  <div className="sticky top-0 z-50 bg-zinc-100 px-6 py-4">
    <button
      onClick={onBack}
      className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm"
    >
      <ArrowLeft className="w-6 h-6 text-gray-900" />
    </button>
  </div>

  {/* Scrollable Content */}
  <div className="flex-1 overflow-y-auto overscroll-contain">
    <div className="min-h-full flex flex-col justify-between px-6 pb-8">

      {/* Top Content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2 className="text-2xl font-extrabold tracking-tighter text-gray-900 mb-2">
          What&apos;s your phone number?
        </h2>

        <p className="text-gray-600 text-sm mb-8">
          We&apos;ll send you a 6-digit code to verify your number.
        </p>

        <div className="flex items-center gap-3 border border-orange-200 rounded-2xl p-4">
          <span className="text-gray-900 font-medium text-sm">
            +234
          </span>

          <input
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            value={phone}
            onChange={(e) => {
              const digits = e.target.value.replace(/[^0-9]/g, "");
              setPhone(digits);
            }}
            placeholder="801 234 5678"
            className="flex-1 bg-transparent text-gray-900 text-sm focus:outline-none"
            autoFocus
          />
        </div>
      </motion.div>

      {/* Bottom Button */}
      <div className="pt-10">
        <button
          onClick={() => onNext(phone)}
          disabled={phone.length < 9}
          className="w-full py-4 bg-orange-primary text-white text-sm rounded-full font-semibold hover:bg-orange-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
          <ArrowLeft className="w-5 h-5 rotate-180" />
        </button>
      </div>

    </div>
  </div>

</div>
  );
}
