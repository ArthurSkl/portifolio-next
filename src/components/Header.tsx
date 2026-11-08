"use client";

import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/app/providers";
import { navigation } from "@/data/profile";

export function Header() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2.5 sm:gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 text-sm font-bold text-white">
            AF
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold leading-tight text-zinc-900 dark:text-white">
              Arthur Frantz
            </span>
            <span className="font-mono text-[10px] text-zinc-500 sm:hidden dark:text-zinc-400">
              Full Stack & QA
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-sky-500 dark:text-zinc-400 dark:hover:text-sky-400"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggle}
            aria-label="Alternar tema"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:text-sky-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-sky-400"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggle}
            aria-label="Alternar tema"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Abrir menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-zinc-200/60 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md md:hidden dark:border-zinc-800/60 dark:bg-zinc-950/95">
          <div className="flex flex-col gap-1">
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-sky-600 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-sky-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
