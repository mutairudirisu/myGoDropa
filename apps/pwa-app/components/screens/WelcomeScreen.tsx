"use client";

import AuthLayout from "@/components/ui/auth/AuthLayout";
import AuthContent from "@/components/ui/auth/AuthContent";
import AuthButton from "@/components/ui/auth/AuthButton";

interface WelcomeScreenProps {
  onNext: () => void;
}

export default function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <AuthLayout>
      <AuthContent>
        <div className="flex flex-col items-center gap-8">
          <div className="mb-6">
            <img
              src="/images/GoDropa-Logo.png"
              alt="GoDropa Logo"
              className="w-16 h-16 object-contain mx-auto mb-4"
            />
            <h2 className="text-4xl font-bold text-gray-900 text-center">
              Welcome to <span className="text-[#FF6B00]">GoDropa</span>
            </h2>
            <p className="text-sm text-gray-500 text-center mt-2">
              Move anything, anywhere, anytime.
            </p>
          </div>

          <div className="relative w-full max-w-xs h-48">
            <img
              src="/images/GoDrop-Backpack-side.png"
              alt="GoDropa"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </AuthContent>

      <div className="shrink-0 px-6 space-y-4 pb-8">
        <AuthButton onClick={onNext}>
          Continue with Phone
        </AuthButton>

        <button className="w-full h-14 rounded-2xl bg-gray-50 border border-gray-200 text-gray-800 font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 active:scale-[0.98]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <button className="w-full h-14 rounded-2xl bg-gray-900 text-white font-semibold hover:bg-black transition-colors flex items-center justify-center gap-3 active:scale-[0.98]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="white"/>
          </svg>
          Continue with Apple
        </button>

        <p className="text-xs text-gray-400 text-center">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </AuthLayout>
  );
}
