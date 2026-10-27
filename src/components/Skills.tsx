"use client";

import { BarChart3, Bug, Code2, Database, Server, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { skillCategories } from "@/data/profile";

const icons = {
  code: Code2,
  server: Server,
  database: Database,
  bug: Bug,
  chart: BarChart3,
  tool: Wrench,
} as const;

export function Skills() {
  return (
    <section id="habilidades" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          badge="02 // Matriz de Competências"
          title="Stack de Desenvolvimento & Ferramentas de QA"
          description="Tecnologias para construir a aplicação de ponta a ponta e validar cada camada antes do deploy."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = icons[category.icon as keyof typeof icons] ?? Code2;
            const isQa = category.icon === "bug";
            return (
              <Reveal key={category.title} delay={index * 0.06}>
                <div
                  className={`flex h-full flex-col justify-between rounded-2xl border p-6 transition-colors ${
                    isQa
                      ? "border-emerald-500/40 bg-emerald-500/[0.03] dark:border-emerald-500/30 dark:bg-emerald-950/10"
                      : "border-zinc-200/90 bg-white hover:border-zinc-300 dark:border-zinc-800/90 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
                  }`}
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                          isQa
                            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                            : "border-zinc-200 bg-zinc-50 text-sky-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-sky-400"
                        }`}
                      >
                        <Icon size={18} />
                      </span>
                      {isQa && (
                        <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase text-emerald-600 dark:text-emerald-400">
                          Especialização
                        </span>
                      )}
                    </div>

                    <h3 className="mb-3 text-base font-bold text-zinc-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-md border px-2.5 py-1 font-mono text-xs font-medium ${
                          isQa
                            ? "border-emerald-500/25 bg-white/80 text-emerald-800 dark:border-emerald-500/20 dark:bg-zinc-900/80 dark:text-emerald-300"
                            : "border-zinc-200/80 bg-zinc-50/70 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
