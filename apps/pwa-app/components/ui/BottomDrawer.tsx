"use client";

import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect } from "react";

interface BottomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function BottomDrawer({ isOpen, onClose, children }: BottomDrawerProps) {
  const y = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start({ y: 0, transition: { type: "spring", damping: 25, stiffness: 200 } });
    } else {
      controls.start({ y: "100%", transition: { type: "spring", damping: 25, stiffness: 200 } });
    }
  }, [isOpen, controls]);

  const handleDragEnd = (_: any, info: any) => {
    const shouldClose = info.offset.y > 100 || info.velocity.y > 2;
    if (shouldClose) {
      onClose();
    } else {
      controls.start({ y: 0, transition: { type: "spring", damping: 25, stiffness: 200 } });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 0.3 : 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black"
      />

      {/* Drawer */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        animate={controls}
        initial={{ y: "100%" }}
        className="relative w-full max-w-md bg-white rounded-t-3xl shadow-xl z-10"
      >
        {/* Drag Handle */}
        <div className="flex justify-center py-4">
          <div className="w-12 h-1 bg-gray-300 rounded-full" />
        </div>

        <div className="px-6 pb-8">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
