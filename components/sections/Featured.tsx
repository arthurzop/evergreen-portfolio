"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Section } from "@/components/layout/Section";
import LinkButton from "@/components/ui/LinkButton";
import Image from "next/image";
import cover from "@/content/projects/the-thirteen/cover.jpg";

const stats = [
  {
    label: "Role",
    value: "Product Design, Visual Design, Web Development",
  },
  {
    label: "Type",
    value: "Personal Project, Digital Archive",
  },
  {
    label: "Focus",
    value: "Curation, Information Architecture, Visual Systems",
  },
  {
    label: "Built With",
    value: "Next.js, React, Tailwind",
  },
];

export function Featured() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <Section
      id="featured"
      className="flex flex-col justify-center px-64 font-geist"
    >
      <div className="flex flex-col gap-8 bg-off-white/50 backdrop-blur-lg p-8 rounded-2xl border border-gs-200">
        <div className="font-bricolage flex flex-col gap-2">
          <h2 className="text-6xl font-bold  capitalize">the thirteen</h2>
          <p className="text-gs-400 hover:text-gs-600 flex items-center gap-2 w-fit">
            <span>↳</span> a curated visual archive for design references.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-[1.4fr_1fr] gap-12 items-start h-auto"
        >
          <Image
            alt="Cover for Featured Project"
            src={cover}
            className="aspect-video h-full w-auto bg-neutral-900 rounded-xl"
          />

          <div className="flex flex-col gap-6 h-full justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-3xl font-bricolage  capitalize">
                about the project
              </h3>
              <p className="text-gs-700 leading-relaxed">
                the thirteen is a personal archive built around the idea that
                good references deserve more than a bookmark. It brings together
                visual identities, interfaces, typography, editorial work and
                other references into a structured system designed for
                exploration and continuous curation. <br /> <br />
                the project explores how a personal collection can become a
                useful design tool, turning scattered references into an
                organized visual language that can be revisited, expanded and
                connected over time.
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

            <LinkButton text="view full case" href="projects/the-thirteen" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
