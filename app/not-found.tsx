"use client";

import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center gap-6 px-8 text-center bg-off-white/50 font-geist"
    >
      <motion.span
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-9xl font-bold font-bricolage"
      >
        404
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.15,
          ease: "easeOut",
        }}
        className="font-bricolage text-5xl font-bold"
      >
        Página não encontrada
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.25,
          ease: "easeOut",
        }}
        className="text-gray-500 max-w-md"
      >
        O que você está procurando não existe (ou ainda não foi escrito).
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.35,
          ease: "easeOut",
        }}
      >
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm bg-gray-100 hover:bg-gray-200 transition-colors rounded-full px-6 py-3"
        >
          <motion.span
            whileHover={{ x: -2, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpLeft size={14} />
          </motion.span>
          voltar pra home
        </Link>
      </motion.div>
    </motion.div>
  );
}
