"use client";

import { useState } from "react";
import SplashScreen from "@/components/screens/SplashScreen";
import WelcomeScreen from "@/components/screens/WelcomeScreen";
import PhoneNumberScreen from "@/components/screens/PhoneNumberScreen";
import OTPVerificationScreen from "@/components/screens/OTPVerificationScreen";
import RoleSelectionScreen from "@/components/screens/RoleSelectionScreen";
import CreateProfileScreen from "@/components/screens/CreateProfileScreen";
import EnableNotificationsScreen from "@/components/screens/EnableNotificationsScreen";
import EnableLocationScreen from "@/components/screens/EnableLocationScreen";
import SuccessScreen from "@/components/screens/SuccessScreen";
import DashboardPreviewScreen from "@/components/screens/DashboardPreviewScreen";

type AuthStep =
  | "splash"
  | "welcome"
  | "phone"
  | "otp"
  | "role"
  | "profile"
  | "notifications"
  | "location"
  | "success"
  | "dashboard";

export default function Home() {
  const [step, setStep] = useState<AuthStep>("splash");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userProfile, setUserProfile] = useState<{ name: string; email?: string }>({
    name: "",
  });

  const renderScreen = () => {
    switch (step) {
      case "splash":
        return <SplashScreen onComplete={() => setStep("welcome")} />;
      case "welcome":
        return <WelcomeScreen onNext={() => setStep("phone")} />;
      case "phone":
        return (
          <PhoneNumberScreen
            onNext={(phone) => {
              setPhoneNumber(phone);
              setStep("otp");
            }}
            onBack={() => setStep("welcome")}
          />
        );
      case "otp":
        return (
          <OTPVerificationScreen
            phoneNumber={phoneNumber}
            onNext={() => setStep("role")}
            onBack={() => setStep("phone")}
          />
        );
      case "role":
        return (
          <RoleSelectionScreen
            onNext={(role) => {
              setUserRole(role);
              setStep("profile");
            }}
            onBack={() => setStep("otp")}
          />
        );
      case "profile":
        return (
          <CreateProfileScreen
            onNext={(profile) => {
              setUserProfile(profile);
              setStep("notifications");
            }}
            onBack={() => setStep("role")}
          />
        );
      case "notifications":
        return (
          <EnableNotificationsScreen
            onNext={() => setStep("location")}
            onSkip={() => setStep("location")}
          />
        );
      case "location":
        return (
          <EnableLocationScreen
            onNext={() => setStep("success")}
            onSkip={() => setStep("success")}
          />
        );
      case "success":
        return <SuccessScreen onNext={() => setStep("dashboard")} />;
      case "dashboard":
        return <DashboardPreviewScreen />;
      default:
        return null;
    }
  };

  return <div className="min-h-screen">{renderScreen()}</div>;
}
