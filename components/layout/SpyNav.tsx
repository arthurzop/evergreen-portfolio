"use client";
import { motion } from "motion/react";
import { useToc } from "@/lib/toc-context";

export default function SpyNav() {
  const { items, activeId } = useToc();
  if (!items.length) return null;

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="fixed flex flex-col gap-2 right-8 top-1/2 -translate-y-1/2 z-10 p-4 bg-off-white/70 backdrop-blur-lg rounded-2xl border border-gs-200">
  
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="group flex items-center gap-3 cursor-pointer justify-between w-24"
          >
            <span
              className={`text-xs transition-colors ${isActive ? "text-green-700 font-medium" : "text-gs-400 group-hover:text-gs-600"}`}
            >
              {item.label}
            </span>
            <motion.span
              className="h-1 rounded-full"
              animate={{
                width: isActive ? 32 : 12,
                backgroundColor: isActive ? "#15803d" : "#acacac",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
          </button>
        );
      })}
    </nav>
  );
}
