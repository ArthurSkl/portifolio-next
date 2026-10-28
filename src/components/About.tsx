"use client";

import {
  Award,
  BadgeCheck,
  Briefcase,
  ExternalLink,
  GraduationCap,
  MapPin,
  Target,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { certifications, journey, profile } from "@/data/profile";

const factIcons = {
  Localização: MapPin,
  Experiência: Briefcase,
  Graduação: GraduationCap,
  "Pós-Graduação": GraduationCap,
  "Formação Técnica": GraduationCap,
  Certificações: BadgeCheck,
  "Foco atual": Target,
} as const;

export function About() {
  return (
    <section id="sobre" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          badge="01 // Experiência, Formação & Credenciais"
          title="Engenharia de Software orientada à qualidade"
          description="Combino mais de 2 anos de experiência prática em desenvolvimento e sustentação Full Stack com automação de testes em múltiplas camadas."
        />

        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Coluna Esquerda: Resumo + Linha do Tempo */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">
                {profile.summary}
              </p>
            </Reveal>

            <div className="mt-10 space-y-7 border-l-2 border-zinc-200 pl-6 dark:border-zinc-800">
              {journey.map((entry, idx) => (
                <Reveal key={entry.role} delay={idx * 0.06}>
                  <div className="relative">
                    <span
                      className={`absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-zinc-950 ${
                        entry.type === "work" ? "bg-sky-500" : "bg-emerald-500"
                      }`}
                    />
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-md px-2 py-0.5 font-mono text-[11px] font-semibold ${
                          entry.type === "work"
                            ? "bg-sky-500/10 text-sky-600 dark:text-sky-400"
                            : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        }`}
                      >
                        {entry.period}
                      </span>
                      <span className="text-xs text-zinc-400">•</span>
                      <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        {entry.institution}
                      </span>
                    </div>
                    <h3 className="mt-1.5 text-base font-bold text-zinc-900 dark:text-white">
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

          {/* Coluna Direita: Ficha Técnica + Certificações Verificáveis */}
          <div className="space-y-6 lg:col-span-5">
            <Reveal delay={0.12}>
              <div className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/40">
                <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Especificações do Perfil
                  </h3>
                  <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400">
                    status: disponível
                  </span>
                </div>
                <ul className="divide-y divide-zinc-200/80 dark:divide-zinc-800/80">
                  {profile.facts.map((fact) => {
                    const Icon = factIcons[fact.label as keyof typeof factIcons] ?? MapPin;
                    return (
                      <li key={fact.label} className="flex items-start gap-4 px-6 py-3.5">
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

            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/40">
                <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <Award size={15} className="text-sky-500" />
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      Certificações & Credenciais
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-zinc-400">verificáveis</span>
                </div>
                <ul className="divide-y divide-zinc-200/80 dark:divide-zinc-800/80">
                  {certifications.map((cert) => (
                    <li key={cert.title} className="px-6 py-3.5">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-xs font-semibold leading-snug text-zinc-800 dark:text-zinc-200">
                          {cert.title}
                        </p>
                        {cert.hours && (
                          <span className="shrink-0 rounded bg-sky-500/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-sky-600 dark:text-sky-400">
                            {cert.hours}
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                          {cert.issuer}
                          {cert.credential ? ` • Cód: ${cert.credential.slice(0, 8)}...` : ""}
                        </span>
                        {cert.url && (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-[11px] font-medium text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-400"
                          >
                            Verificar <ExternalLink size={11} />
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
