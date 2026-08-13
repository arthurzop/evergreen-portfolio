import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const seedPath = join(process.cwd(), "scripts", "projects-seed.json");
const projects = JSON.parse(readFileSync(seedPath, "utf-8"));

const CONTENT_DIR = join(process.cwd(), "content", "projects");

for (const project of projects) {
  const dir = join(CONTENT_DIR, project.slug);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  const filePath = join(dir, "index.mdx");
  if (existsSync(filePath)) {
    console.log(`⏭  ${project.slug} já existe, pulando (não sobrescrevi).`);
    continue;
  }

  const yamlList = (arr) =>
    `[${arr.map((v) => `"${v.replace(/"/g, '\\"')}"`).join(", ")}]`;

  const frontmatter = `---
slug: "${project.slug}"
title: "${project.title}"
client: "${project.client}"
category: ${yamlList(project.category)}
type: "Client Work" # TODO: troca pra "Personal Project" se for o caso
year: "${project.year}"
cover: "${project.cover}"
images: ${yamlList(project.images)}
---

## Overview

${project.description.split("\n\n").join("\n\n")}

{/*
## Design System

Documenta aqui só as decisões de sistema relevantes pra esse projeto
(tipografia, cor, componentes, grid, tokens...). Apaga essa seção inteira
se não fizer sentido pra esse projeto — nem todo projeto precisa dela.
*/}

{/*
## Learnings

O que aprendi, o que funcionou, o que não funcionou, o que faria diferente,
o que exploraria numa próxima versão.
*/}
`;

  writeFileSync(filePath, frontmatter, "utf-8");
  console.log(`✅  ${project.slug} criado`);
}

console.log(
  "\nPronto. Agora edita cada index.mdx e descomenta/preenche Design System e Learnings onde fizer sentido.",
);
