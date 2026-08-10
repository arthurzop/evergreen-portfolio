"use client";
import { GrainGradient } from "@paper-design/shaders-react";
import SpyNav from "@/components/layout/SpyNav";
import { RegisterToc } from "@/components/layout/RegisterToc";
import { Hero } from "@/components/sections/Hero";
import { Featured } from "@/components/sections/Featured";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { WritingPreview } from "@/components/sections/WritingPreview";
import { AboutPreview } from "@/components/sections/AboutPreview";

const homeToc = [
  { id: "hero", label: "Intro" },
  { id: "featured", label: "Featured" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
  { id: "about", label: "About" },
];

export default function Home() {
  return (
    <main>
      <RegisterToc items={homeToc} />
      <GrainGradient
        width="100%"
        height="100%"
        colors={["#DAD7CD", "#A3B18A", "#588157", "#3A5A40", "#344E41"]}
        colorBack="#BBC6BB20"
        softness={2}
        intensity={0.3}
        noise={0.2}
        shape="corners"
        speed={1}
        className="fixed -z-10 inset-0 opacity-60"
      />
      <SpyNav />
      <Hero />
      <Featured />
      <ProjectsPreview />
      <WritingPreview />
      <AboutPreview />
    </main>
  );
}
