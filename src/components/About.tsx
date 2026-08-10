"use client";

import { BadgeCheck, Briefcase, GraduationCap, MapPin, Target } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/data/profile";

const factIcons = {
  Localização: MapPin,
  Experiência: Briefcase,
  Formação: GraduationCap,
  Certificações: BadgeCheck,
  "Foco atual": Target,
} as const;

export function About() {
  return (
    <section id="sobre" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          badge="Sobre mim"
          title="Quem sou eu"
          description="Um pouco sobre minha trajetória e o que me move."
        />

        <div className="grid items-start gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              {profile.summary}
            </p>
            <a
              href="#contato"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-500 transition-colors hover:text-sky-400 dark:text-sky-400 dark:hover:text-sky-300"
            >
              Vamos conversar?
            </a>
          </Reveal>

          <div className="lg:col-span-2">
            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                <div className="border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Informações rápidas
                  </h3>
                </div>
                <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  {profile.facts.map((fact) => {
                    const Icon = factIcons[fact.label as keyof typeof factIcons] ?? MapPin;
                    return (
                      <li key={fact.label} className="flex items-start gap-4 px-6 py-4">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500 dark:text-sky-400">
                          <Icon size={16} />
                        </span>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                            {fact.label}
                          </p>
                          <p className="mt-0.5 text-sm font-medium text-zinc-800 dark:text-zinc-200">
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
