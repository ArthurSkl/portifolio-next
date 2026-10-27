"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Layers,
  Linkedin,
  Mail,
  Play,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { Typewriter } from "./Typewriter";
import { contact } from "@/data/profile";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

type LayerId = "e2e" | "api" | "unit";

const testSuites: Record<
  LayerId,
  {
    label: string;
    runner: string;
    count: number;
    duration: string;
    command: string;
    specs: { name: string; assertion: string; time: string }[];
  }
> = {
  e2e: {
    label: "E2E (UI & Fluxos)",
    runner: "Cypress 13",
    count: 28,
    duration: "4.2s",
    command: "npx cypress run --headless --spec 'cypress/e2e/**'",
    specs: [
      {
        name: "auth.cy.ts",
        assertion: "deve autenticar usuário e validar sessão JWT",
        time: "840ms",
      },
      {
        name: "tickets-crud.cy.ts",
        assertion: "deve abrir chamado, atribuir técnico e encerrar fluxo",
        time: "1.4s",
      },
      {
        name: "checkout-flow.cy.ts",
        assertion: "deve validar carrinho, endereço e confirmação de pedido",
        time: "1.1s",
      },
      {
        name: "rbac-access.cy.ts",
        assertion: "deve bloquear rotas administrativas para perfil comum",
        time: "860ms",
      },
    ],
  },
  api: {
    label: "API & Integração",
    runner: "Supertest + Node",
    count: 34,
    duration: "1.1s",
    command: "npm run test:api -- --reporter=spec",
    specs: [
      {
        name: "POST /api/tickets",
        assertion: "201 Created — persiste chamado no PostgreSQL com schema válido",
        time: "190ms",
      },
      {
        name: "POST /api/auth/login",
        assertion: "401 Unauthorized — rejeita credenciais inválidas com rate-limit",
        time: "145ms",
      },
      {
        name: "PATCH /api/tickets/:id/status",
        assertion: "200 OK — atualiza SLA e registra log de auditoria",
        time: "210ms",
      },
      {
        name: "GET /api/reports/metrics",
        assertion: "200 OK — retorna agregação consistente para dashboard",
        time: "165ms",
      },
    ],
  },
  unit: {
    label: "Unitários & Domínio",
    runner: "node:test + JUnit",
    count: 28,
    duration: "0.3s",
    command: "node --test src/**/*.spec.ts",
    specs: [
      {
        name: "slaCalculator.spec.ts",
        assertion: "calcula prazo crítico considerando prioridades e horário comercial",
        time: "18ms",
      },
      {
        name: "ticketValidator.spec.ts",
        assertion: "impede transição de status inválida em chamados fechados",
        time: "12ms",
      },
      {
        name: "permissionGuard.spec.ts",
        assertion: "valida matriz de permissões por nível logístico (RBAC)",
        time: "15ms",
      },
      {
        name: "passwordPolicy.spec.ts",
        assertion: "garante entropia mínima e hash seguro na criação de conta",
        time: "22ms",
      },
    ],
  },
};

export function Hero() {
  const [activeLayer, setActiveLayer] = useState<LayerId>("e2e");
  const [rerunning, setRerunning] = useState(false);

  const currentSuite = testSuites[activeLayer];

  function handleRunSuite(layer: LayerId) {
    setActiveLayer(layer);
    setRerunning(true);
    setTimeout(() => setRerunning(false), 260);
  }

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-20 pb-16"
    >
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_35%,transparent_80%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Coluna Esquerda: Identidade e Posicionamento */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <motion.div variants={item} className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 font-mono text-xs font-medium text-emerald-700 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Disponível para novas oportunidades
              </span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100/80 px-3 py-1 font-mono text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400">
                Eng. de Software • Pós em QA
              </span>
            </motion.div>

            <motion.p
              variants={item}
              className="font-mono text-sm font-medium text-sky-600 dark:text-sky-400"
            >
              Arthur Augusto Coelho Frantz
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-2 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl lg:leading-[1.08] dark:text-white"
            >
              Engenharia Full Stack com rigor de{" "}
              <span className="text-sky-500 dark:text-sky-400">Qualidade & QA.</span>
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-4 font-mono text-base font-medium text-zinc-700 sm:text-xl dark:text-zinc-300"
            >
              Atuação em:{" "}
              <Typewriter
                words={[
                  "Desenvolvimento Full Stack",
                  "Automação de Testes (E2E, API, Unit)",
                  "Qualidade de Software & CI/CD",
                  "Análise de Dados & Power BI",
                ]}
              />
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
              Construo aplicações web completas com <strong>React, Node.js e PostgreSQL</strong> e
              garanto entregas confiáveis através de testes automatizados com{" "}
              <strong>Cypress, Supertest e Selenium</strong> integrados ao pipeline de CI.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-sky-600"
              >
                Explorar projetos e QA
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white/80 px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-sky-500/60 hover:text-sky-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:text-sky-400"
              >
                Entrar em contato
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex items-center gap-6 border-t border-zinc-200/80 pt-6 dark:border-zinc-800/80"
            >
              <div className="flex items-center gap-2.5">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:border-sky-500/60 hover:text-sky-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-sky-400"
                >
                  <Linkedin size={17} />
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:border-sky-500/60 hover:text-sky-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-sky-400"
                >
                  <Github size={17} />
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  aria-label="E-mail"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:border-sky-500/60 hover:text-sky-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-sky-400"
                >
                  <Mail size={17} />
                </a>
              </div>

              <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800" />

              <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                <span className="font-semibold text-zinc-900 dark:text-zinc-200">~2 anos</span> exp. Dev •{" "}
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">90+</span> assertions em CI
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna Direita: Peça Assinatura — Interactive QA & Architecture Console */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-xl shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900/90 dark:shadow-black/40">
              {/* Barra de título do Console */}
              <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950/80">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-sky-500" />
                  <span className="font-mono text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    qa-pipeline — helpdesk-pro
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck size={12} />
                  CI PASSING (90/90)
                </span>
              </div>

              {/* Seletor de Camadas da Pirâmide de Testes */}
              <div className="grid grid-cols-3 gap-1 border-b border-zinc-200 bg-zinc-100/70 p-1.5 dark:border-zinc-800 dark:bg-zinc-950/50">
                {(["e2e", "api", "unit"] as LayerId[]).map((layerKey) => {
                  const active = activeLayer === layerKey;
                  const suite = testSuites[layerKey];
                  return (
                    <button
                      key={layerKey}
                      type="button"
                      onClick={() => handleRunSuite(layerKey)}
                      className={`flex flex-col items-start rounded-lg px-3 py-2 text-left transition-all ${
                        active
                          ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white"
                          : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                      }`}
                    >
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-tight">
                        {layerKey.toUpperCase()}
                      </span>
                      <span className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                        {suite.count} testes • {suite.duration}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Corpo do Terminal: Comando e Specs */}
              <div className="p-4">
                <div className="flex items-center justify-between rounded-lg bg-zinc-900 px-3 py-2 font-mono text-xs text-zinc-300 dark:bg-zinc-950">
                  <span className="truncate">
                    <span className="text-emerald-400">$</span> {currentSuite.command}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRunSuite(activeLayer)}
                    title="Reexecutar camada"
                    className="ml-2 inline-flex shrink-0 items-center gap-1 rounded bg-zinc-800 px-2 py-0.5 text-[10px] text-sky-400 transition-colors hover:bg-zinc-700"
                  >
                    <Play size={10} />
                    Run
                  </button>
                </div>

                <div
                  className={`mt-3 space-y-2 transition-opacity duration-200 ${
                    rerunning ? "opacity-40" : "opacity-100"
                  }`}
                >
                  {currentSuite.specs.map((spec) => (
                    <div
                      key={spec.name}
                      className="flex items-start justify-between gap-3 rounded-lg border border-zinc-200/70 bg-zinc-50/60 p-2.5 dark:border-zinc-800/70 dark:bg-zinc-950/40"
                    >
                      <div className="flex items-start gap-2.5 min-w-0">
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 shrink-0 text-emerald-500 dark:text-emerald-400"
                        />
                        <div className="min-w-0">
                          <p className="font-mono text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                            {spec.name}
                          </p>
                          <p className="mt-0.5 text-xs text-zinc-600 dark:text-zinc-400">
                            {spec.assertion}
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
                        {spec.time}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Rodapé do Console com link para o Plano de QA real */}
                <div className="mt-4 flex items-center justify-between border-t border-zinc-200/80 pt-3 text-xs dark:border-zinc-800/80">
                  <span className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                    <Layers size={13} className="text-sky-500" />
                    Runner: {currentSuite.runner}
                  </span>
                  <a
                    href="https://github.com/ArthurSkl/helpdesk-pro/blob/main/docs/QA.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-sky-600 hover:underline dark:text-sky-400"
                  >
                    Ver docs/QA.md
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
