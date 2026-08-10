"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Typewriter } from "./Typewriter";
import { contact } from "@/data/profile";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl px-6 py-24"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Disponível para novas oportunidades
        </motion.span>

        <motion.p
          variants={item}
          className="text-lg font-medium text-sky-500 dark:text-sky-400"
        >
          Olá, meu nome é
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-2 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl dark:from-white dark:via-zinc-200 dark:to-zinc-500"
        >
          Arthur Frantz
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-4 text-xl font-medium text-zinc-700 sm:text-3xl dark:text-zinc-300"
        >
          Desenvolvedor <Typewriter words={["Full Stack", "QA & Testes Automatizados", "Entusiasta de Análise de Dados"]} />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400"
        >
          React, Node.js, PostgreSQL, Cypress e Power BI. Transformo problemas em soluções
          com código de qualidade, testes automatizados e decisões baseadas em dados.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:shadow-glow"
          >
            Ver projetos
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-sky-500/60 hover:text-sky-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:text-sky-400"
          >
            Entrar em contato
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-12 flex items-center gap-4">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 text-zinc-500 transition-colors hover:border-sky-500/60 hover:text-sky-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-sky-400"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 text-zinc-500 transition-colors hover:border-sky-500/60 hover:text-sky-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-sky-400"
          >
            <Github size={18} />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="E-mail"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 text-zinc-500 transition-colors hover:border-sky-500/60 hover:text-sky-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-sky-400"
          >
            <Mail size={18} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
