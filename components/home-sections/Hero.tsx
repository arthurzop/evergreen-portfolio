"use client";
import { motion } from "motion/react";
import { Section } from "@/components/layout/Section";

export function Hero() {
  return (
    <Section
      id="hero"
      className="flex flex-col justify-center items-center text-center gap-6 md:gap-12 font-geist px-4 lg:px-64"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="font-medium"
      >
        Hi! I'm Artur Medeiros <br />
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="font-bricolage text-7xl lg:text-[200px] lg:leading-42 font-semibold mix-blend-multiply text-green-900/50"
      >
        UI & Product <br />
        Designer
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="flex flex-col md:text-lg px-4 text-center items-center"
      >
        <p>
          Eu desenvolvo produtos digitais unindo pesquisa, sistemas e pensamento
          visual.
        </p>
        <p>
          Atualmente construindo um portfólio{" "}
          <span className="hover:text-green-700 hover:underline">
            evergreen
          </span>{" "}
          de projetos, textos e experimentos.
        </p>
      </motion.div>
      <div className="flex flex-col gap-4 absolute bottom-2 left-1/2 -translate-x-1/2 items-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-center  md:mt-10"
        >
          Currently based in São Paulo, Brasil. <br />
          <span className="hidden md:block mix-blend-multiply text-green-900/50">
            ฅ^•ﻌ•^ฅ
          </span>
        </motion.p>
      </div>
    </Section>
  );
}
