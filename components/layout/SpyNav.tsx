"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useToc } from "@/lib/toc-context";

const LABEL_VISIBLE_MS = 1000;

export default function SpyNav() {
  const { items, activeId } = useToc();
  const [isHovered, setIsHovered] = useState(false);
  const [recentlyChanged, setRecentlyChanged] = useState(true);

  useEffect(() => {
    setRecentlyChanged(true);
    const timer = setTimeout(() => setRecentlyChanged(false), LABEL_VISIBLE_MS);
    return () => clearTimeout(timer);
  }, [activeId]);

  if (!items.length) return null;

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed hidden md:flex flex-col gap-2 right-8 top-1/2 -translate-y-1/2 z-10 p-4 bg-off-white/70 backdrop-blur-lg rounded-2xl border border-gs-200 transition-all duration-200 w-auto"
    >
      {items.map((item) => {
        const isActive = item.id === activeId;
        const showLabel = isHovered || (isActive && recentlyChanged);

        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`flex items-center justify-between cursor-pointer transition-all duration-300 ease-out ${
              showLabel ? "gap-3" : "gap-0"
            }`}
          >
            <span
              className={`text-xs transition-all duration-300 ease-out hover:opacity-60  truncate overflow-hidden text-left
                ${showLabel ? "max-w-24 opacity-100 " : "max-w-0 opacity-0 "} 
                ${isActive ? "text-green-700 font-medium" : "text-gs-400"}`}
            >
              {item.label}
            </span>
            <motion.span
              className="h-1 rounded-full shrink-0"
              animate={{
                width: isActive ? 18 : 12,
                backgroundColor: isActive ? "#15803d" : "#acacac40",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
          </button>
        );
      })}
    </nav>
  );
}
