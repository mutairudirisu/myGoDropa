"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface OTPVerificationScreenProps {
  phoneNumber: string;
  onNext: () => void;
  onBack: () => void;
}

export default function OTPVerificationScreen({
  phoneNumber,
  onNext,
  onBack,
}: OTPVerificationScreenProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    const digits = value.replace(/[^0-9]/g, "");
    if (!digits) {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      return;
    }
    const newOtp = [...otp];
    newOtp[index] = digits.slice(-1);
    setOtp(newOtp);

    if (digits && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    if (!window.visualViewport) return;

    const viewport = window.visualViewport;

    const updateKeyboard = () => {
      const keyboard = window.innerHeight - viewport.height - viewport.offsetTop;
      setKeyboardHeight(Math.max(0, keyboard));
    };

    viewport.addEventListener("resize", updateKeyboard);
    viewport.addEventListener("scroll", updateKeyboard);

    return () => {
      viewport.removeEventListener("resize", updateKeyboard);
      viewport.removeEventListener("scroll", updateKeyboard);
    };
  }, []);

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
          <div className="w-14 h-14 bg-orange-primary/10 rounded-2xl flex items-center justify-center mb-6">
            <ShieldCheck className="w-7 h-7 text-orange-primary" />
          </div>

          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Enter the 6-digit code
          </h2>
          <p className="text-gray-600 mb-8 text-sm">
            We sent you a code to <span className="font-medium">+234 {phoneNumber}</span>
          </p>

          <div className="flex gap-2 justify-center mb-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputsRef.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onFocus={(e) => {
                  setTimeout(() => {
                    e.target.scrollIntoView({ behavior: "smooth", block: "center" });
                  }, 300);
                }}
                className="w-12 h-12 border border-gray-200 rounded-xl text-center text-[12px] font-semibold text-gray-900 focus:border-orange-primary focus:ring-2 focus:ring-orange-primary/20 outline-none transition-all"
              />
            ))}
          </div>

          <button className="text-[12px] text-orange-primary font-semibold mb-4">
            Resend code in 00:25
          </button>
        </motion.div>

        <div style={{ paddingBottom: keyboardHeight > 0 ? 16 : 0, transition: "padding-bottom 0.3s ease" }}>
          <button
            onClick={onNext}
            disabled={otp.some((d) => !d)}
            className="w-full py-4 bg-orange-primary text-sm text-white rounded-full font-semibold hover:bg-orange-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
}
