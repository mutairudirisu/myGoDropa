"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Box, Car, Store } from "lucide-react";

interface RoleSelectionScreenProps {
  onNext: (role: string) => void;
}

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

export default function RoleSelectionScreen({ onNext }: RoleSelectionScreenProps) {
  const [selectedRole, setSelectedRole] = useState<string>("customer");

  return (
    <div className="min-h-screen bg-zinc-100 flex flex-col p-6">
      <button className="w-fit p-2 mb-6 rounded-full bg-white shadow-sm">
        <ArrowLeft className="w-6 h-6 text-gray-900" />
      </button>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex-1 flex flex-col"
      >
        <h2 className="text-lg font-bold text-gray-900 mb-2">
          Who are you?
        </h2>
        <p className="text-gray-600 mb-8 text-sm ">
          Select the option that best describes you.
        </p>

        <div className="space-y-4">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`w-full p-5 rounded-2xl border transition-all flex items-center gap-4 ${
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
                <p className="text-sm text-gray-500 text-[12px]">{role.description}</p>
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
      </motion.div>

      <button
        onClick={() => onNext(selectedRole)}
        className="w-full py-4 text-sm bg-orange-primary text-white rounded-full font-semibold hover:bg-orange-dark transition-colors flex items-center justify-center gap-2"
      >
        Continue
        <ArrowLeft className="w-5 h-5 rotate-180" />
      </button>
    </div>
  );
}
