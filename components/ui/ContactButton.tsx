"use client";
import { useState } from "react";
import * as L from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";



export default function ContactButton() {
  const [hovered, setHovered] = useState(false);

  function handleClick(e: React.MouseEvent) {
    const isHome = window.location.pathname === "/";
    if (isHome) {
      e.preventDefault();
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <Link
      href="/#about"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="isolate cursor-pointer flex items-center justify-center w-fit h-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 font-geist font-light text-gs-500 shadow-xl backdrop-blur-md overflow-hidden hover:text-gray-700"
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
        entre em contato
      </motion.span>
      <L.ArrowDown size={18} strokeWidth={1.5} className="shrink-0" />
    </Link>
  );
}
