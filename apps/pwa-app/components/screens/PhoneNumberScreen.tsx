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
    <div className="min-h-screen bg-white flex flex-col p-6">
      <button onClick={onBack} className="w-fit p-2 mb-6">
        <ArrowLeft className="w-6 h-6 text-gray-900" />
      </button>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex-1 flex flex-col"
      >
        <div className="w-14 h-14 bg-orange-primary/10 rounded-2xl flex items-center justify-center mb-6">
          <Smartphone className="w-7 h-7 text-orange-primary" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          What's your phone number?
        </h2>
        <p className="text-gray-600 mb-8">
          We'll send you a 6-digit code to verify your number.
        </p>

        <div className="flex items-center gap-3 border border-gray-200 rounded-2xl p-4 mb-8">
          <span className="text-gray-900 font-medium">+234</span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="801 234 5678"
            className="flex-1 text-gray-900 text-lg focus:outline-none"
            autoFocus
          />
        </div>
      </motion.div>

      <button
        onClick={() => onNext(phone)}
        disabled={phone.length < 9}
        className="w-full py-4 bg-orange-primary text-white rounded-full font-semibold hover:bg-orange-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue
        <ArrowLeft className="w-5 h-5 rotate-180" />
      </button>
    </div>
  );
}
