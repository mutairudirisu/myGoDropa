"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./contexts/ThemeContext";
import { VtooltipRoot, VtooltipItem } from "./v1/skiper98";

export default function FloatingThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  
  const items = [
    {
      icon: <Sun className="h-full w-full" />,
      label: "Light",
      onClick: () => setTheme("light"),
      isActive: theme === "light",
    },
    {
      icon: <Moon className="h-full w-full" />,
      label: "Dark",
      onClick: () => setTheme("dark"),
      isActive: theme === "dark",
    },
    {
      icon: <Monitor className="h-full w-full" />,
      label: "System",
      onClick: () => setTheme("system"),
      isActive: theme === "system",
    },
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <VtooltipRoot side="left">
        {items.map((item, index) => (
          <VtooltipItem 
            key={index} 
            index={index} 
            trigger={
              <div 
                onClick={item.onClick} 
                className={`group relative flex size-10 items-center justify-center rounded-full p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors shadow-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 ${
                  item.isActive ? "bg-orange-primary/10 text-orange-primary" : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {item.icon}
              </div>
            }
            content={
              <div className="flex items-center justify-center gap-2 px-2 text-sm text-gray-900 dark:text-white">
                {item.label}
              </div>
            }
          />
        ))}
      </VtooltipRoot>
    </div>
  );
}
