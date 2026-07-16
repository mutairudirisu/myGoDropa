"use client";

import { useState } from "react";
import AuthLayout from "@/components/ui/auth/AuthLayout";
import AuthHeader from "@/components/ui/auth/AuthHeader";
import AuthContent from "@/components/ui/auth/AuthContent";
import AuthButton from "@/components/ui/auth/AuthButton";
import { Box, Car, Store } from "lucide-react";

const roles = [
  {
    id: "customer",
    title: "Customer",
    description: "Send packages easily",
    icon: <Box className="w-6 h-6 text-orange-primary" />,
  },
  {
    id: "driver",
    title: "Driver",
    description: "Earn by delivering",
    icon: <Car className="w-6 h-6 text-gray-600" />,
  },
  {
    id: "business",
    title: "Business",
    description: "Manage deliveries",
    icon: <Store className="w-6 h-6 text-gray-600" />,
  },
];

interface RoleSelectionScreenProps {
  onNext: (role: string) => void;
  onBack: () => void;
}

export default function RoleSelectionScreen({ onNext, onBack }: RoleSelectionScreenProps) {
  const [selectedRole, setSelectedRole] = useState<string>("customer");

  return (
    <AuthLayout>
      <AuthHeader onBack={onBack} />

      <AuthContent>
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight leading-tight">
              Who are you?
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">
              Select the option that best describes you.
            </p>
          </div>

          <div className="space-y-4">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`w-full p-5 rounded-2xl border transition-all flex items-center gap-4 active:scale-[0.98] ${
                  selectedRole === role.id
                    ? "border-orange-primary bg-orange-primary/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    selectedRole === role.id ? "bg-orange-primary/10" : "bg-gray-100"
                  }`}
                >
                  {role.icon}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm text-gray-900">{role.title}</p>
                  <p className="text-sm text-gray-500">{role.description}</p>
                </div>
                {selectedRole === role.id && (
                  <div className="ml-auto">
                    <div className="w-5 h-5 rounded-full bg-orange-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </AuthContent>

      <AuthButton onClick={() => onNext(selectedRole)}>
        Continue
      </AuthButton>
    </AuthLayout>
  );
}
