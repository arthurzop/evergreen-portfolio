// components/BackToTopButton.tsx
"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import * as L from "lucide-react";

const SCROLL_THRESHOLD = 600;

export default function TopButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={handleClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="fixed bottom-8 right-8 z-30 isolate cursor-pointer flex items-center justify-center w-fit h-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 font-geist font-light text-[#5f5f5f] shadow-xl backdrop-blur-md overflow-hidden"
        >
          <motion.span
            initial={false}
            animate={{
              width: hovered ? "auto" : 0,
              opacity: hovered ? 1 : 0,
              marginRight: hovered ? 8 : 0,
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="inline-block overflow-hidden whitespace-nowrap"
          >
            voltar ao topo
          </motion.span>
          <L.ArrowUp size={18} strokeWidth={1.5} className="shrink-0" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
