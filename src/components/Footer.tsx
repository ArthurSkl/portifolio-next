"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 text-xs font-bold text-white">
            AF
          </span>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {year} {profile.shortName}. Feito com Next.js.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition-colors hover:border-sky-500/60 hover:text-sky-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-sky-400"
          >
            <Linkedin size={15} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition-colors hover:border-sky-500/60 hover:text-sky-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-sky-400"
          >
            <Github size={15} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="E-mail"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition-colors hover:border-sky-500/60 hover:text-sky-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-sky-400"
          >
            <Mail size={15} />
          </a>
          <a
            href="#inicio"
            aria-label="Voltar ao topo"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition-colors hover:border-sky-500/60 hover:text-sky-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-sky-400"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
