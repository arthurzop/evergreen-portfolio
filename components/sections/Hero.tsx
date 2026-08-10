"use client";
import { motion } from "motion/react";
import NextButton from "@/components/ui/NextButton";
import { Section } from "@/components/layout/Section";

export function Hero() {
  return (
    <Section
      id="hero"
      className="relative flex flex-col justify-center items-center text-center gap-12 px-75 font-geist"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="text-center font-medium"
      >
        Hi! I'm Artur Medeiros <br />
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="font-bricolage text-[200px] leading-42 font-semibold mix-blend-multiply text-green-900/50"
      >
        UI & Product <br />
        Designer
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="flex flex-col text-lg px-4 text-center items-center"
      >
        <p>
          I design digital products through research, systems and visual
          thinking.
        </p>
        <p>
          Currently building an evergreen portfolio of projects, writing and
          experiments.
        </p>
      </motion.div>
      <div className="flex flex-col gap-4 absolute bottom-2 left-1/2 -translate-x-1/2 items-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-center mt-10"
        >
          Currently based in São Paulo, Brasil. <br />
          <span className="mix-blend-multiply text-green-900/50">ฅ^•ﻌ•^ฅ</span>
        </motion.p>
      </div>
    </Section>
  );
}
