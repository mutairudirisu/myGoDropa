"use client";

import { useState } from "react";
import AuthLayout from "@/components/ui/auth/AuthLayout";
import AuthHeader from "@/components/ui/auth/AuthHeader";
import AuthContent from "@/components/ui/auth/AuthContent";
import AuthButton from "@/components/ui/auth/AuthButton";

interface PhoneNumberScreenProps {
  onNext: (phone: string) => void;
  onBack: () => void;
}

export default function PhoneNumberScreen({ onNext, onBack }: PhoneNumberScreenProps) {
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = async () => {
    if (phone.length < 9) return;
    setIsLoading(true);
    await onNext(phone);
    setIsLoading(false);
  };

  return (
    <AuthLayout>
      <AuthHeader onBack={onBack} />

      <AuthContent>
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight leading-tight">
              What&apos;s your phone number?
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">
              We&apos;ll send you a 6-digit code to verify your number.
            </p>
          </div>

          <div className="flex items-center gap-3 border border-orange-200 rounded-2xl p-4">
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
              placeholder="801 234 5678"
              className="flex-1 text-gray-900 text-sm bg-transparent focus:outline-none"
              autoFocus
            />
          </div>
        </div>
      </AuthContent>

      <AuthButton onClick={handleNext} disabled={phone.length < 9} loading={isLoading}>
        Continue
      </AuthButton>
    </AuthLayout>
  );
}
