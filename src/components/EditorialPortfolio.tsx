"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Phone,
  Send,
  Sun,
} from "lucide-react";
import { useTheme } from "@/app/providers";
import {
  certifications,
  contact,
  journey,
  profile,
  projects,
  skillCategories,
} from "@/data/profile";

const sections = [
  { id: "case-principal", label: "Case Principal" },
  { id: "trajetoria", label: "Experiência & Formação" },
  { id: "projetos", label: "Demais Projetos" },
  { id: "stack", label: "Stack & Certificações" },
  { id: "contato", label: "Contato" },
] as const;

export function EditorialPortfolio() {
  const { theme, toggle } = useTheme();
  const [activeSection, setActiveSection] = useState<string>("case-principal");
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [featured, ...otherProjects] = projects;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0.05 },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  }

  async function handleContactSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const honey = String(data.get("_honey") ?? "");

    if (honey) return;

    setSubmitState("sending");
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Contato via portfólio — ${name}`,
          _template: "table",
        }),
      });

      const result = (await response.json()) as { success?: string | boolean };
      if (!response.ok || result.success === "false" || result.success === false) {
        setSubmitState("error");
        return;
      }

      form.reset();
      setSubmitState("sent");
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <div className="min-h-screen bg-white text-[#0F172A] transition-colors dark:bg-[#09090B] dark:text-[#FAFAFA]">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-12 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-16">
        {/* Sidebar Fixa Editorial */}
        <aside className="border-b border-[#E2E8F0] pb-8 dark:border-[#27272A] lg:col-span-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
          <div className="lg:sticky lg:top-12">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-2 font-mono text-xs font-medium text-[#0F766E] dark:text-[#2DD4BF]">
                <span className="h-2 w-2 rounded-full bg-[#0F766E] dark:bg-[#2DD4BF]" />
                Disponível para oportunidades
              </span>
              <button
                type="button"
                onClick={toggle}
                aria-label="Alternar tema claro e escuro"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E2E8F0] text-[#475569] transition-colors hover:border-[#0F172A] hover:text-[#0F172A] dark:border-[#27272A] dark:text-[#A1A1AA] dark:hover:border-[#FAFAFA] dark:hover:text-[#FAFAFA]"
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] text-[#0F172A] dark:text-[#FAFAFA]">
              {profile.shortName}
            </h1>
            <p className="mt-1 text-sm font-semibold text-[#334155] dark:text-[#D4D4D8]">
              {profile.role}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#475569] dark:text-[#A1A1AA]">
              +2 anos em produção na Multlab desenvolvendo sistemas web com React, Next.js, Node.js
              e PostgreSQL. Graduado em Engenharia de Software (Estácio) e pós-graduando em Testes
              Ágeis e Automação de QA.
            </p>

            <div className="mt-4 flex items-center gap-1.5 text-xs text-[#64748B] dark:text-[#71717A]">
              <MapPin size={13} className="shrink-0" />
              <span>{profile.location} · Remoto / Híbrido</span>
            </div>

            {/* Navegação com Scroll Spy (Desktop) */}
            <nav
              aria-label="Seções do portfólio"
              className="mt-7 hidden space-y-1 border-y border-[#E2E8F0] py-4 dark:border-[#27272A] lg:block"
            >
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block border-l-2 py-1.5 pl-3 text-sm transition-colors ${
                      isActive
                        ? "border-[#0F766E] font-semibold text-[#0F766E] dark:border-[#2DD4BF] dark:text-[#2DD4BF]"
                        : "border-transparent font-medium text-[#475569] hover:border-[#CBD5E1] hover:text-[#0F172A] dark:text-[#A1A1AA] dark:hover:border-[#3F3F46] dark:hover:text-[#FAFAFA]"
                    }`}
                  >
                    {section.label}
                  </a>
                );
              })}
            </nav>

            {/* Navegação compacta mobile */}
            <nav
              aria-label="Atalhos mobile"
              className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-y border-[#E2E8F0] py-3 text-xs font-semibold text-[#475569] dark:border-[#27272A] dark:text-[#A1A1AA] lg:hidden"
            >
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="hover:text-[#0F766E] dark:hover:text-[#2DD4BF]"
                >
                  {section.label}
                </a>
              ))}
            </nav>

            {/* Botões diretos */}
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-1.5 rounded-md bg-[#0F766E] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#115E59] dark:bg-[#0D9488] dark:hover:bg-[#0F766E]"
              >
                <Mail size={14} />
                E-mail
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-[#CBD5E1] bg-white px-3 py-2 text-xs font-semibold text-[#0F172A] transition-colors hover:border-[#0F172A] dark:border-[#27272A] dark:bg-[#111113] dark:text-[#FAFAFA] dark:hover:border-[#52525B]"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-[#CBD5E1] bg-white px-3 py-2 text-xs font-semibold text-[#0F172A] transition-colors hover:border-[#0F172A] dark:border-[#27272A] dark:bg-[#111113] dark:text-[#FAFAFA] dark:hover:border-[#52525B]"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#64748B] dark:text-[#71717A]">
              <a
                href={`tel:+55${contact.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-1.5 hover:text-[#0F172A] dark:hover:text-[#FAFAFA]"
              >
                <Phone size={12} />
                {contact.phone}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                title="Copiar endereço de e-mail"
                className="inline-flex items-center gap-1.5 hover:text-[#0F172A] dark:hover:text-[#FAFAFA]"
              >
                <span className="truncate">{contact.email}</span>
                {copiedEmail ? (
                  <Check size={12} className="shrink-0 text-[#0F766E] dark:text-[#2DD4BF]" />
                ) : (
                  <Copy size={12} className="shrink-0" />
                )}
              </button>
            </div>
          </div>
        </aside>

        {/* Coluna Editorial Principal */}
        <main className="space-y-16 pt-10 lg:col-span-8 lg:pt-0">
          {/* 1. Case Principal */}
          <section
            id="case-principal"
            className="border-b border-[#E2E8F0] pb-14 dark:border-[#27272A]"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-mono text-xs font-semibold text-[#0F766E] dark:text-[#2DD4BF]">
                Projeto em Destaque
              </span>
              {featured.featuredBadge && (
                <span className="font-mono text-xs text-[#64748B] dark:text-[#A1A1AA]">
                  {featured.featuredBadge}
                </span>
              )}
            </div>

            <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] text-[#0F172A] sm:text-3xl dark:text-[#FAFAFA]">
              {featured.name}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#475569] sm:text-base dark:text-[#A1A1AA]">
              {featured.description}
            </p>

            {/* Preview Real com Moldura Discreta */}
            <a
              href={featured.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 block overflow-hidden rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] transition-colors hover:border-[#0F766E] dark:border-[#27272A] dark:bg-[#111113] dark:hover:border-[#2DD4BF]"
            >
              <div className="flex items-center justify-between border-b border-[#E2E8F0] bg-white px-3.5 py-2 dark:border-[#27272A] dark:bg-[#111113]">
                <span className="truncate font-mono text-[11px] text-[#64748B] dark:text-[#A1A1AA]">
                  ecommerce-controle-estoque.vercel.app/loja/loja-modelo
                </span>
                <span className="inline-flex shrink-0 items-center gap-1 font-mono text-[11px] font-semibold text-[#0F766E] dark:text-[#2DD4BF]">
                  Produção
                  <ArrowUpRight size={12} />
                </span>
              </div>
              <img
                src="/previews/erp-vitrine.png"
                alt="Preview da vitrine pública do ERP Estoque e E-commerce Multi-Tenant"
                className="block w-full object-cover object-top"
              />
            </a>

            {/* Destaques Técnicos */}
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {featured.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs leading-relaxed text-[#334155] sm:text-sm dark:text-[#D4D4D8]"
                >
                  <Check
                    size={15}
                    className="mt-0.5 shrink-0 text-[#0F766E] dark:text-[#2DD4BF]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 font-mono text-xs text-[#64748B] dark:text-[#71717A]">
              {featured.stack.join(" · ")}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {featured.demo && (
                <a
                  href={featured.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-[#0F172A] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#1E293B] dark:bg-[#FAFAFA] dark:text-[#09090B] dark:hover:bg-[#E4E4E7]"
                >
                  Acessar Demo Online
                  <ArrowUpRight size={14} />
                </a>
              )}
              {featured.code && (
                <a
                  href={featured.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-[#CBD5E1] px-4 py-2 text-xs font-semibold text-[#0F172A] transition-colors hover:border-[#0F172A] dark:border-[#27272A] dark:text-[#FAFAFA] dark:hover:border-[#52525B]"
                >
                  <Github size={14} />
                  Ver Código no GitHub
                </a>
              )}
            </div>
          </section>

          {/* 2. Experiência & Formação (Linha do Tempo Completa) */}
          <section
            id="trajetoria"
            className="border-b border-[#E2E8F0] pb-14 dark:border-[#27272A]"
          >
            <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl dark:text-[#FAFAFA]">
              Experiência &amp; Formação
            </h2>
            <p className="mt-2 text-sm text-[#475569] dark:text-[#A1A1AA]">
              Atuação prática em desenvolvimento e sustentação de sistemas web combinada à
              formação em Engenharia de Software e Automação de QA.
            </p>

            <div className="mt-8 space-y-8 border-l-2 border-[#E2E8F0] pl-5 dark:border-[#27272A]">
              {journey.map((entry) => (
                <article key={`${entry.period}-${entry.role}`} className="relative">
                  <span
                    className={`absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-white dark:border-[#09090B] ${
                      entry.type === "work"
                        ? "bg-[#0F766E] dark:bg-[#2DD4BF]"
                        : "bg-[#94A3B8] dark:bg-[#52525B]"
                    }`}
                  />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                    <span
                      className={`font-mono text-xs font-semibold ${
                        entry.type === "work"
                          ? "text-[#0F766E] dark:text-[#2DD4BF]"
                          : "text-[#64748B] dark:text-[#A1A1AA]"
                      }`}
                    >
                      {entry.period}
                    </span>
                    <span className="text-xs text-[#64748B] dark:text-[#71717A]">
                      {entry.institution}
                    </span>
                  </div>
                  <h3 className="mt-1 text-base font-bold text-[#0F172A] dark:text-[#FAFAFA]">
                    {entry.role}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#475569] dark:text-[#A1A1AA]">
                    {entry.description}
                  </p>
                  <p className="mt-2 font-mono text-[11px] text-[#64748B] dark:text-[#71717A]">
                    {entry.tags.join(" · ")}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* 3. Demais Projetos */}
          <section
            id="projetos"
            className="border-b border-[#E2E8F0] pb-14 dark:border-[#27272A]"
          >
            <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl dark:text-[#FAFAFA]">
              Demais Projetos &amp; Suítes de QA
            </h2>

            <div className="mt-6 divide-y divide-[#E2E8F0] border-y border-[#E2E8F0] dark:divide-[#27272A] dark:border-[#27272A]">
              {otherProjects.map((proj) => (
                <article key={proj.name} className="py-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-bold text-[#0F172A] dark:text-[#FAFAFA]">
                      {proj.name}
                    </h3>
                    <div className="flex items-center gap-4 text-xs font-semibold">
                      {proj.demo && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#0F766E] hover:underline dark:text-[#2DD4BF]"
                        >
                          Demo
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                      {proj.code ? (
                        <a
                          href={proj.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#475569] hover:text-[#0F172A] dark:text-[#A1A1AA] dark:hover:text-[#FAFAFA]"
                        >
                          <Github size={13} />
                          Código
                        </a>
                      ) : (
                        !proj.demo && (
                          <span className="font-mono text-[11px] font-normal text-[#64748B] dark:text-[#71717A]">
                            Projeto interno
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#475569] dark:text-[#A1A1AA]">
                    {proj.description}
                  </p>
                  <p className="mt-2.5 font-mono text-xs text-[#64748B] dark:text-[#71717A]">
                    {proj.stack.join(" · ")}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* 4. Stack Técnica & Certificações Verificáveis */}
          <section
            id="stack"
            className="border-b border-[#E2E8F0] pb-14 dark:border-[#27272A]"
          >
            <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl dark:text-[#FAFAFA]">
              Stack Técnica
            </h2>

            <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {skillCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="border-t border-[#E2E8F0] pt-3.5 dark:border-[#27272A]"
                >
                  <h3 className="font-mono text-xs font-semibold text-[#0F766E] dark:text-[#2DD4BF]">
                    {cat.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#475569] dark:text-[#A1A1AA]">
                    {cat.skills.join(", ")}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-base font-bold text-[#0F172A] dark:text-[#FAFAFA]">
                Certificações Verificáveis
              </h3>
              <ul className="mt-4 divide-y divide-[#E2E8F0] border-y border-[#E2E8F0] dark:divide-[#27272A] dark:border-[#27272A]">
                {certifications.map((cert) => (
                  <li
                    key={cert.title}
                    className="flex flex-wrap items-baseline justify-between gap-2 py-3 text-sm"
                  >
                    <div className="min-w-0">
                      <p className="font-semibold text-[#0F172A] dark:text-[#FAFAFA]">
                        {cert.title}
                      </p>
                      <p className="mt-0.5 text-xs text-[#64748B] dark:text-[#71717A]">
                        {cert.issuer}
                        {cert.hours ? ` · ${cert.hours}` : ""}
                        {cert.credential ? ` · Credencial: ${cert.credential}` : ""}
                      </p>
                    </div>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-1 font-mono text-xs font-semibold text-[#0F766E] hover:underline dark:text-[#2DD4BF]"
                      >
                        Verificar
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5. Contato */}
          <section id="contato" className="pb-6">
            <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl dark:text-[#FAFAFA]">
              Contato
            </h2>
            <p className="mt-2 text-sm text-[#475569] dark:text-[#A1A1AA]">
              Aberto a oportunidades como Desenvolvedor Full Stack, Analista de QA e Automação de
              Testes.
            </p>

            <form
              onSubmit={handleContactSubmit}
              className="mt-6 space-y-4 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:p-6 dark:border-[#27272A] dark:bg-[#111113]"
            >
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-[#334155] dark:text-[#D4D4D8]">
                    Nome
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Seu nome"
                    className="w-full rounded-md border border-[#CBD5E1] bg-white px-3 py-2 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0F766E] focus:outline-none dark:border-[#27272A] dark:bg-[#09090B] dark:text-[#FAFAFA] dark:focus:border-[#2DD4BF]"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-[#334155] dark:text-[#D4D4D8]">
                    E-mail
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="voce@empresa.com"
                    className="w-full rounded-md border border-[#CBD5E1] bg-white px-3 py-2 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0F766E] focus:outline-none dark:border-[#27272A] dark:bg-[#09090B] dark:text-[#FAFAFA] dark:focus:border-[#2DD4BF]"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-[#334155] dark:text-[#D4D4D8]">
                  Mensagem
                </span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Conte sobre a vaga ou projeto..."
                  className="w-full resize-none rounded-md border border-[#CBD5E1] bg-white px-3 py-2 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0F766E] focus:outline-none dark:border-[#27272A] dark:bg-[#09090B] dark:text-[#FAFAFA] dark:focus:border-[#2DD4BF]"
                />
              </label>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <button
                  type="submit"
                  disabled={submitState === "sending"}
                  className="inline-flex items-center gap-2 rounded-md bg-[#0F766E] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#115E59] disabled:opacity-60 dark:bg-[#0D9488] dark:hover:bg-[#0F766E]"
                >
                  <Send size={14} />
                  {submitState === "sending" ? "Enviando..." : "Enviar mensagem"}
                </button>
                {submitState === "sent" && (
                  <span className="font-mono text-xs text-[#0F766E] dark:text-[#2DD4BF]">
                    Mensagem enviada para {contact.email}. Obrigado pelo contato!
                  </span>
                )}
                {submitState === "error" && (
                  <span className="text-xs text-red-600 dark:text-red-400">
                    Não foi possível enviar agora. Envie direto para{" "}
                    <a href={`mailto:${contact.email}`} className="font-semibold underline">
                      {contact.email}
                    </a>
                    .
                  </span>
                )}
              </div>
            </form>
          </section>

          {/* Footer Editorial */}
          <footer className="border-t border-[#E2E8F0] pt-6 text-xs text-[#64748B] dark:border-[#27272A] dark:text-[#71717A]">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span>© {new Date().getFullYear()} {profile.name}</span>
              <span>{profile.location}</span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
