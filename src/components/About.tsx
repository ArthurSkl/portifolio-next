"use client";

import { BadgeCheck, Briefcase, GraduationCap, MapPin, Target } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { journey, profile } from "@/data/profile";

const factIcons = {
  Localização: MapPin,
  Experiência: Briefcase,
  Formação: GraduationCap,
  "Pós-Graduação": GraduationCap,
  Certificações: BadgeCheck,
  "Foco atual": Target,
} as const;

export function About() {
  return (
    <section id="sobre" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          badge="01 // Trajetória & Formação"
          title="Engenharia de Software orientada à qualidade"
          description="Combino a visão construtiva de quem desenvolve sistemas full-stack com o olhar analítico de quem testa e blinda a aplicação."
        />

        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Coluna Esquerda: Resumo + Linha do Tempo */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">
                {profile.summary}
              </p>
            </Reveal>

            <div className="mt-10 space-y-6 border-l-2 border-zinc-200 pl-6 dark:border-zinc-800">
              {journey.map((entry, idx) => (
                <Reveal key={entry.role} delay={idx * 0.08}>
                  <div className="relative">
                    <span
                      className={`absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-zinc-950 ${
                        entry.type === "work" ? "bg-sky-500" : "bg-emerald-500"
                      }`}
                    />
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400">
                        {entry.period}
                      </span>
                      <span className="text-xs text-zinc-400">•</span>
                      <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        {entry.institution}
                      </span>
                    </div>
                    <h3 className="mt-1 text-base font-bold text-zinc-900 dark:text-white">
                      {entry.role}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {entry.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-zinc-100 px-2 py-0.5 font-mono text-[11px] font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Coluna Direita: Ficha Técnica */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/40">
                <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Especificações do Perfil
                  </h3>
                  <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400">
                    status: ativo
                  </span>
                </div>
                <ul className="divide-y divide-zinc-200/80 dark:divide-zinc-800/80">
                  {profile.facts.map((fact) => {
                    const Icon = factIcons[fact.label as keyof typeof factIcons] ?? MapPin;
                    return (
                      <li key={fact.label} className="flex items-start gap-4 px-6 py-4">
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-sky-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-sky-400">
                          <Icon size={15} />
                        </span>
                        <div>
                          <p className="font-mono text-[11px] font-medium text-zinc-400 dark:text-zinc-500">
                            {fact.label}
                          </p>
                          <p className="mt-0.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                            {fact.value}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
