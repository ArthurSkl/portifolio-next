"use client";

import { Check, ExternalLink, Github, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { projects, type Project } from "@/data/profile";

function ProjectCard({ project }: { project: Project }) {
  const isFeatured = project.featured;

  return (
    <Reveal className={isFeatured ? "lg:col-span-2" : ""}>
      <article
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900/50 ${
          isFeatured
            ? "border-sky-500/30 shadow-lg shadow-sky-500/10 hover:shadow-glow"
            : "hover:border-sky-500/40 hover:shadow-glow"
        }`}
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-sky-500/10 blur-2xl" />

        {isFeatured && (
          <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-500 dark:text-amber-400">
            <Star size={12} />
            Destaque
          </span>
        )}

        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{project.name}</h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        {project.highlights.length > 0 && (
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                <Check size={14} className="shrink-0 text-sky-500 dark:text-sky-400" />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.code || project.demo ? (
          <div className="mt-6 flex gap-3">
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:border-sky-500/60 hover:text-sky-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:text-sky-400"
              >
                <Github size={14} />
                Código
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:shadow-glow"
              >
                <ExternalLink size={14} />
                Demo
              </a>
            )}
          </div>
        ) : (
          <p className="mt-6 text-xs italic text-zinc-400 dark:text-zinc-500">
            Repositório em atualização
          </p>
        )}
      </article>
    </Reveal>
  );
}

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projetos" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          badge="Projetos"
          title="Trabalhos em destaque"
          description="Projetos que mostram meu trabalho na prática, do código ao deploy."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <ProjectCard project={featured} />
          {rest.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
