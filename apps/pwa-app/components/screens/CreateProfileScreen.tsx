"use client";

import { useState } from "react";
import AuthLayout from "@/components/ui/auth/AuthLayout";
import AuthHeader from "@/components/ui/auth/AuthHeader";
import AuthContent from "@/components/ui/auth/AuthContent";
import AuthInput from "@/components/ui/auth/AuthInput";
import AuthButton from "@/components/ui/auth/AuthButton";

interface CreateProfileScreenProps {
  onNext: (profile: { name: string; email?: string }) => void;
  onBack: () => void;
}

export default function CreateProfileScreen({ onNext, onBack }: CreateProfileScreenProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = async () => {
    if (!name) return;
    setIsLoading(true);
    await onNext({ name, email });
    setIsLoading(false);
  };

  return (
    <AuthLayout>
      <AuthHeader onBack={onBack} />

      <AuthContent>
        <div className="flex flex-col gap-8 pb-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight leading-tight">
              Let&apos;s complete your profile
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">
              This helps us personalize your experience.
            </p>
          </div>

          <div className="space-y-4">
            <AuthInput
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Muhammadu Dirisu"
            />
            <AuthInput
              label="Email (optional)"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youremail@example.com"
            />
          </div>
        </div>
      </AuthContent>

      <AuthButton onClick={handleNext} disabled={!name} loading={isLoading} className="">
        Continue
      </AuthButton>
    </AuthLayout>
  );
}
