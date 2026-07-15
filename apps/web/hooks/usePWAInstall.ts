"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
  }>;
}

interface InstallError {
  type: "user-cancelled" | "unsupported-browser" | "storage-limit" | "unknown";
  message: string;
}

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [error, setError] = useState<InstallError | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const APP_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001"
      : "https://appgodropa.vercel.app";

  // Check if iOS
  const checkIOS = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  };

  // Check if already installed using display mode
  const checkInstalled = () => {
    return window.matchMedia("(display-mode: standalone)").matches;
  };

  // Check if related app (PWA) is installed
  const checkRelatedApps = async () => {
    if ("getInstalledRelatedApps" in navigator) {
      try {
        const relatedApps = await (navigator as any).getInstalledRelatedApps();
        return relatedApps.length > 0;
      } catch (err) {
        console.error("Error checking related apps:", err);
        return false;
      }
    }
    return false;
  };

  // Handle install
  const install = async () => {
    if (!deferredPrompt) return;

    try {
      setIsLoading(true);
      setError(null);
      
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;

      if (choiceResult.outcome === "accepted") {
        setIsInstalled(true);
        setIsInstallable(false);
        setDeferredPrompt(null);
      } else {
        setError({
          type: "user-cancelled",
          message: "Installation cancelled. You can try again later.",
        });
      }
    } catch (err) {
      console.error("Installation error:", err);
      setError({
        type: "unknown",
        message: "Something went wrong during installation. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Open app if installed
  const openApp = () => {
    window.location.href = APP_URL;
  };

  useEffect(() => {
    setIsIOS(checkIOS());
    const checkAppInstalled = async () => {
      const installedViaDisplay = checkInstalled();
      const installedViaRelated = await checkRelatedApps();
      setIsInstalled(installedViaDisplay || installedViaRelated);
    };
    checkAppInstalled();

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
      setError(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  return {
    install,
    openApp,
    isInstallable,
    isInstalled,
    isIOS,
    isLoading,
    error,
    clearError: () => setError(null),
    APP_URL,
  };
}
