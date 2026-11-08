"use client";

import { CheckCircle2, ExternalLink, Github, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { projects, type Project } from "@/data/profile";

function FeaturedProject({ project }: { project: Project }) {
  return (
    <Reveal className="min-w-0 lg:col-span-2">
      <article className="relative overflow-hidden rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/[0.04] via-white to-emerald-500/[0.04] p-5 sm:p-8 lg:p-10 dark:border-sky-500/25 dark:from-sky-950/20 dark:via-zinc-900/80 dark:to-emerald-950/15">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center">
          <div className="min-w-0 lg:col-span-7">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-500/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-sky-600 sm:text-xs dark:text-sky-400">
                ★ Case Principal Full Stack & QA
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] font-medium text-emerald-600 sm:text-xs dark:text-emerald-400">
                <ShieldCheck size={13} className="shrink-0" />
                90 Testes Automatizados em CI
              </span>
            </div>

            <h3 className="text-xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
              {project.name}
            </h3>

            <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 sm:mt-3 sm:text-base dark:text-zinc-300">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-zinc-200 bg-white px-2.5 py-1 font-mono text-[11px] font-medium text-zinc-700 sm:px-3 sm:text-xs dark:border-zinc-700/80 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-600 sm:w-auto"
                >
                  <ExternalLink size={15} />
                  Acessar Demo Online
                </a>
              )}
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:border-sky-500/60 hover:text-sky-600 sm:w-auto dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:text-sky-400"
                >
                  <Github size={15} />
                  Repositório & Código
                </a>
              )}
            </div>
          </div>

          {/* Coluna lateral do Card Principal: Arquitetura das 3 Camadas */}
          <div className="min-w-0 rounded-xl border border-zinc-200/90 bg-white/90 p-4 sm:p-5 dark:border-zinc-800 dark:bg-zinc-950/60 lg:col-span-5">
            <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-zinc-400 sm:text-xs dark:text-zinc-500">
              Entregas & Cobertura de Qualidade
            </p>
            <ul className="space-y-2.5">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2.5 text-xs font-medium text-zinc-700 sm:text-sm dark:text-zinc-300"
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 grid grid-cols-3 gap-1.5 border-t border-zinc-200/80 pt-3.5 text-center sm:mt-5 sm:gap-2 sm:pt-4 dark:border-zinc-800/80">
              <div className="min-w-0 rounded-lg bg-zinc-50 px-1.5 py-2 sm:p-2 dark:bg-zinc-900">
                <p className="font-mono text-xs font-bold text-zinc-900 sm:text-sm dark:text-white">Unit</p>
                <p className="truncate font-mono text-[10px] text-zinc-500">node:test</p>
              </div>
              <div className="min-w-0 rounded-lg bg-zinc-50 px-1.5 py-2 sm:p-2 dark:bg-zinc-900">
                <p className="font-mono text-xs font-bold text-zinc-900 sm:text-sm dark:text-white">API</p>
                <p className="truncate font-mono text-[10px] text-zinc-500">Supertest</p>
              </div>
              <div className="min-w-0 rounded-lg bg-zinc-50 px-1.5 py-2 sm:p-2 dark:bg-zinc-900">
                <p className="font-mono text-xs font-bold text-zinc-900 sm:text-sm dark:text-white">E2E</p>
                <p className="truncate font-mono text-[10px] text-zinc-500">Cypress</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal className="min-w-0">
      <article className="flex h-full flex-col justify-between rounded-2xl border border-zinc-200/90 bg-white p-5 transition-colors hover:border-zinc-300 sm:p-7 dark:border-zinc-800/90 dark:bg-zinc-900/40 dark:hover:border-zinc-700">
        <div>
          <h3 className="text-base font-bold text-zinc-900 sm:text-lg dark:text-white">{project.name}</h3>

          <p className="mt-2 text-xs leading-relaxed text-zinc-600 sm:mt-2.5 sm:text-sm dark:text-zinc-400">
            {project.description}
          </p>

          {project.highlights.length > 0 && (
            <ul className="mt-4 space-y-1.5 border-t border-zinc-100 pt-3 dark:border-zinc-800/60">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300"
                >
                  <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-sky-500 dark:text-sky-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-5 pt-2 sm:mt-6">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-zinc-200/80 bg-zinc-50 px-2.5 py-0.5 font-mono text-[11px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-zinc-100 pt-3.5 sm:mt-5 sm:pt-4 dark:border-zinc-800/60">
            {project.code ? (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-zinc-800 transition-colors hover:text-sky-600 dark:text-zinc-200 dark:hover:text-sky-400"
              >
                <Github size={14} />
                Ver Repositório
              </a>
            ) : (
              <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                Projeto Interno Corporativo
              </span>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-sky-600 transition-colors hover:underline dark:text-sky-400"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projetos" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          badge="03 // Portfólio & Evidências"
          title="Projetos Full Stack & Automação de Testes"
          description="Sistemas completos, suítes de testes automatizados e planos de qualidade executados em integração contínua."
        />

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          <FeaturedProject project={featured} />
          {rest.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
