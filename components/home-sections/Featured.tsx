"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Section } from "@/components/layout/Section";
import LinkButton from "@/components/ui/LinkButton";
import Image from "next/image";
import cover from "@/content/projects/the-thirteen/cover.png";

const stats = [
  {
    label: "Papel",
    value: "Product Design, Visual Design, Desenvolvimento Web",
  },
  {
    label: "Tipo",
    value: "Projeto pessoal, Arquivo digital",
  },
  {
    label: "Foco",
    value: "Curadoria, Arquitetura da Informação, Sistemas Visuais",
  },
  {
    label: "Tecnologias",
    value: "Next.js, React, Tailwind",
  },
];

export function Featured() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <Section
      id="featured"
      className="flex flex-col justify-center px-4 lg:px-64 font-geist"
    >
      <div className="flex flex-col gap-4 lg:gap-8 bg-off-white/20 backdrop-blur-lg p-8 rounded-2xl border border-gs-200">
        <div className="font-bricolage flex flex-col gap-2">
          <p className="text-gs-500 uppercase tracking-wider text-sm">
            Featured:
          </p>
          <h2 className="text-6xl font-bold capitalize">the thirteen</h2>
          <p className="text-gs-400 hover:text-gs-600 flex items-center gap-2 w-fit">
            <span>↳</span> um arquivo visual curado para referências de design.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col lg:grid grid-cols-[1.4fr_1fr] gap-12 items-start h-auto "
        >
          <Image
            alt="Cover for Featured Project"
            src={cover}
            className="aspect-video w-auto bg-neutral-900 rounded-xl"
          />

          <div className="flex flex-col gap-6 h-full justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-3xl font-bricolage first-letter:capitalize">
                sobre o projeto
              </h3>
              <p className="text-gs-700 leading-relaxed">
                The Thirteen é um arquivo pessoal criado a partir da ideia de
                que boas referências merecem mais do que um bookmark. O projeto
                reúne identidades visuais, interfaces, tipografia, trabalhos
                editoriais e outras referências em um sistema estruturado para
                exploração e curadoria contínua.
              </p>
              <p className="text-gs-700 leading-relaxed">
                O projeto investiga como uma coleção pessoal pode se transformar
                em uma ferramenta de design, organizando referências dispersas
                em uma linguagem visual que pode ser revisitada, expandida e
                conectada ao longo do tempo.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-xs text-gs-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className=" font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="w-full flex justify-end">
              <LinkButton
                text="ver projeto completo"
                href="projects/the-thirteen"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
