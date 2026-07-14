"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface VtooltipRootProps {
  side?: "left" | "right" | "top" | "bottom";
  children: ReactNode;
}

const VtooltipContext = createContext<{ side: string }>({ side: "left" });

const VtooltipRoot = ({ side = "left", children }: VtooltipRootProps) => {
  return (
    <VtooltipContext.Provider value={{ side }}>
      <div className="flex flex-col gap-2">{children}</div>
    </VtooltipContext.Provider>
  );
};

interface VtooltipItemProps {
  index: number;
  trigger: ReactNode;
  content: ReactNode;
}

const VtooltipItem = ({ index, trigger, content }: VtooltipItemProps) => {
  const { side } = useContext(VtooltipContext);
  const [isVisible, setIsVisible] = useState(false);

  const positionClass =
    side === "left"
      ? "right-full mr-2 top-1/2 -translate-y-1/2"
      : side === "right"
      ? "left-full ml-2 top-1/2 -translate-y-1/2"
      : side === "top"
      ? "bottom-full mb-2 left-1/2 -translate-x-1/2"
      : "top-full mt-2 left-1/2 -translate-x-1/2";

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="relative"
    >
      {trigger}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className={`absolute ${positionClass} z-50 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-lg px-3 py-2 transition-colors duration-300`}
        >
          {content}
        </motion.div>
      )}
    </div>
  );
};

export { VtooltipRoot, VtooltipItem };
