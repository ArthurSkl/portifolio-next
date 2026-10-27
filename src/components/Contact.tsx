"use client";

import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/data/profile";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const subject = encodeURIComponent(`Contato via portfólio - ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const channels = [
    {
      label: "E-mail",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/arthurfrantz",
      href: profile.linkedin,
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: "github.com/ArthurSkl",
      href: profile.github,
      icon: Github,
    },
    {
      label: "Telefone",
      value: profile.phone,
      href: `tel:+55${profile.phone.replace(/\D/g, "")}`,
      icon: Phone,
    },
  ];

  return (
    <section id="contato" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          badge="04 // Canais de Contato"
          title="Vamos conversar sobre a sua equipe?"
          description="Aberto a oportunidades como Desenvolvedor Full Stack, QA / Analista de Testes e Automação."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-4">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-sky-500/40 hover:shadow-glow dark:border-zinc-800 dark:bg-zinc-900/50"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/20">
                    <channel.icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                      {channel.label}
                    </p>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                      {channel.value}
                    </p>
                  </div>
                </a>
              ))}

              <div className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/20">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    Localização
                  </p>
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <h3 className="mb-6 text-lg font-semibold text-zinc-900 dark:text-white">
                Envie uma mensagem
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Nome
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Seu nome"
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    E-mail
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="voce@exemplo.com"
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Mensagem
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Conte sobre a oportunidade..."
                  className="w-full resize-none rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:shadow-glow"
              >
                {sent ? "Abrindo seu e-mail..." : "Enviar mensagem"}
                <Send size={16} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
