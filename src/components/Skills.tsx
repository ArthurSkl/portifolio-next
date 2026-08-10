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
          badge="Habilidades"
          title="Stack & ferramentas"
          description="Tecnologias e práticas que uso no dia a dia para entregar qualidade."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = icons[category.icon as keyof typeof icons] ?? Code2;
            return (
              <Reveal key={category.title} delay={index * 0.08}>
                <div className="group h-full rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-glow dark:border-zinc-800 dark:bg-zinc-900/50">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/20">
                    <Icon size={20} />
                  </span>
                  <h3 className="mb-3 text-base font-semibold text-zinc-900 dark:text-white">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 transition-colors group-hover:border-sky-500/30 dark:border-zinc-700 dark:text-zinc-300"
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
