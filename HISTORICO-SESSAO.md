# Portfólio Next.js — Histórico da Sessão (02/08/2026)

## Projeto
Criado em `C:\projetos\portfolio-next` — portfólio novo em Next.js 15 + TypeScript + Tailwind CSS + Framer Motion, dark default com toggle claro, PT-BR.

## Como rodar
```
cd C:\projetos\portfolio-next
npm install
npm run dev
```
Abre em `http://localhost:3000`. Pra parar: `Ctrl + C`.

## O que foi feito nesta sessão
- Estrutura completa do projeto criada na mão (sem `create-next-app`, porque o terminal do opencode estava com erro `ChildProcess.spawn`)
- Seções: Header (navbar fixa + blur + menu mobile + toggle tema), Hero (com máquina de escrever animada), Sobre, Skills, Projetos (card em destaque + grid), Contato (com formulário via mailto), Footer
- Animações Framer Motion (scroll reveal, hover, glow)
- SEO: metadata, Open Graph, robots.txt, sitemap
- Conteúdo em `src/data/profile.ts` (dados reais do currículo)

## Erros corrigidos na sessão
1. `page.tsx` importava componentes como default, mas eles são export nomeado → corrigido para `import { X }`
2. `Hero.tsx` usava `contact` que não existia no `profile.ts` → adicionado export `contact`

## Pendências / próximos passos
- [ ] **Reiniciar o opencode** para corrigir o terminal (já configurado `"shell": "C:\\Windows\\System32\\cmd.exe"` em `C:\Users\coelh\.config\opencode\opencode.jsonc`)
- [ ] Confirmar link do repo HelpDesk em `src/data/profile.ts` (hoje: `github.com/ArthurSkl/HelpDesk` — não verificado) e adicionar `demo` quando existir deploy
- [ ] Conferir textos e dados em `src/data/profile.ts`
- [ ] Fazer deploy na Vercel e atualizar `siteUrl` em `src/app/layout.tsx`
- [ ] Bônus futuros: foto no hero, seção de blog, formulário com backend

## Observações
- Versões resolvidas sem conflito: next@15.5.22, react@19.2.8, framer-motion@11.18.2, tailwindcss@3.4.19
- Falar sempre em pt-BR. Não inventar métricas/resultados — preencher marcadores com dados que o Arthur forneça.
