"use client";

import { useState, useRef, useEffect } from "react";
import AuthLayout from "@/components/ui/auth/AuthLayout";
import AuthHeader from "@/components/ui/auth/AuthHeader";
import AuthContent from "@/components/ui/auth/AuthContent";
import AuthButton from "@/components/ui/auth/AuthButton";
import { ShieldCheck } from "lucide-react";

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
  const [isLoading, setIsLoading] = useState(false);
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

  const handleNext = async () => {
    if (otp.some((d) => !d)) return;
    setIsLoading(true);
    await onNext();
    setIsLoading(false);
  };

  return (
    <AuthLayout>
      <AuthHeader onBack={onBack} />

      <AuthContent>
        <div className="flex flex-col items-center gap-8">
          <div className="w-14 h-14 bg-orange-primary/10 rounded-2xl flex items-center justify-center">
            <ShieldCheck className="w-7 h-7 text-orange-primary" />
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight leading-tight">
              Enter the 6-digit code
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">
              We sent you a code to <span className="font-medium">+234 {phoneNumber}</span>
            </p>
          </div>

          <div className="flex gap-2 justify-center">
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
                className="w-12 h-12 border border-gray-200 rounded-xl text-center text-[12px] font-semibold text-gray-900 focus:border-orange-primary focus:ring-2 focus:ring-orange-primary/20 outline-none transition-all"
              />
            ))}
          </div>

          <button className="text-sm text-orange-primary font-semibold">
            Resend code in 00:25
          </button>
        </div>
      </AuthContent>

      <AuthButton onClick={handleNext} disabled={otp.some((d) => !d)} loading={isLoading}>
        Continue
      </AuthButton>
    </AuthLayout>
  );
}
