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
    <nav className="fixed flex flex-col gap-3 items-end right-8 top-1/2 -translate-y-1/2 z-10">
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="group flex items-center gap-3 cursor-pointer"
          >
            <span
              className={`text-xs transition-colors ${isActive ? "text-green-700 font-medium" : "text-gray-400 group-hover:text-gray-600"}`}
            >
              {item.label}
            </span>
            <motion.span
              className="h-0.5 rounded-full"
              animate={{
                width: isActive ? 28 : 16,
                backgroundColor: isActive ? "#15803d" : "#9ca3af",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
          </button>
        );
      })}
    </nav>
  );
}
