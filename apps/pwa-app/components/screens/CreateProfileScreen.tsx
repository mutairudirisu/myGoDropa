"use client";

import { useState } from "react";
import { User } from "lucide-react";
import { motion } from "framer-motion";

interface CreateProfileScreenProps {
  onNext: (profile: { name: string; email?: string }) => void;
}

export default function CreateProfileScreen({ onNext }: CreateProfileScreenProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      {/* <div className="w-14 h-14 bg-orange-primary/10 rounded-2xl flex items-center justify-center mb-6">
        <User className="w-7 h-7 text-orange-primary" />
      </div> */}

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex-1 flex flex-col"
      >
        <h2 className="text-xl font-extrabold text-gray-900 mb-2">
          Let's complete your profile
        </h2>
        <p className="text-gray-600 mb-8 text-sm">
          This helps us personalize your experience.
        </p>

        <div className="space-y-3">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Muhammadu Dirisu"
              className="w-full p-4 text-sm border border-gray-200 rounded-2xl text-gray-900 focus:border-orange-primary focus:ring-2 focus:ring-orange-primary/20 outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">
              Email (optional)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youremail@example.com"
              className="w-full p-4 text-sm border border-gray-200 rounded-2xl text-gray-900 focus:border-orange-primary focus:ring-2 focus:ring-orange-primary/20 outline-none transition-all"
            />
          </div>
        </div>
      </motion.div>

      <button
        onClick={() => onNext({ name, email })}
        disabled={!name}
        className="w-full py-4 text-sm bg-orange-primary text-white rounded-full font-semibold hover:bg-orange-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue
        <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin hidden" />
      </button>
    </div>
  );
}
