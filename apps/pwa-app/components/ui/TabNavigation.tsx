"use client";

import React, { useState, useRef, useEffect } from "react";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTabId?: string;
  onTabChange?: (tabId: string) => void;
  floatingActionButton?: React.ReactNode;
  className?: string;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTabId: initialActiveTabId,
  onTabChange,
  floatingActionButton,
  className = "",
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(
    initialActiveTabId || (tabs[0]?.id ?? "")
  );
  const tabRefs = useRef<(HTMLButtonElement | null)[]>(
    new Array(tabs.length).fill(null)
  );

  useEffect(() => {
    if (initialActiveTabId) {
      const tabExists = tabs.some((tab) => tab.id === initialActiveTabId);
      if (tabExists) {
        setActiveTabId(initialActiveTabId);
      } else if (tabs.length > 0) {
        setActiveTabId(tabs[0]!.id);
      }
    } else if (tabs.length > 0 && !activeTabId) {
      setActiveTabId(tabs[0]!.id);
    }
  }, [initialActiveTabId, tabs]);

  useEffect(() => {
    tabRefs.current = new Array(tabs.length).fill(null);
  }, [tabs.length]);

  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
    onTabChange?.(tabId);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        const nextIndex = (index + 1) % tabs.length;
        tabRefs.current[nextIndex]?.focus();
        break;
      case "ArrowLeft":
        e.preventDefault();
        const prevIndex = (index - 1 + tabs.length) % tabs.length;
        tabRefs.current[prevIndex]?.focus();
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        handleTabClick(tabs[index]!.id);
        break;
    }
  };

  return (
    <nav
      role="tablist"
      aria-label="Main navigation"
      className={`relative flex items-end justify-between m-4 gap-4 px-4 py-4 bg-white rounded-full shadow-[0_-4px_20px_rgba(0,0,0,0.08),0_-1px_3px_rgba(0,0,0,0.04)] border-t border-gray-100 ${className}`}
    >
      <div className="flex-1 flex items-center justify-around">
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              ref={(el) => { tabRefs.current[index] = el; }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => handleTabClick(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`relative flex flex-col items-center gap-1 px-3 py-2 rounded-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 ${
                isActive
                  ? "text-[#FF6B00] shadow-[0_2px_8px_rgba(255,107,0,0.15)] bg-orange-50/80"
                  : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
              }`}
            >
              <div
                className={`w-6 h-6 transition-all duration-200 ${
                  isActive ? "scale-110 drop-shadow-sm" : "scale-100"
                }`}
              >
                {tab.icon}
              </div>
              <span className="text-[8px] font-medium tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {floatingActionButton && (
        <div className="flex items-end">{floatingActionButton}</div>
      )}
    </nav>
  );
};

export default TabNavigation;
