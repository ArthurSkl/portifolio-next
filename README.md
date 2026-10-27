# Arthur Frantz — Portfólio (Full Stack & QA)

Portfólio profissional desenvolvido com **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS** e **Framer Motion**, apresentando minha trajetória como Engenheiro de Software, Desenvolvedor Full Stack e pós-graduando **Lato Sensu em Testes Ágeis e Automação de Qualidade de Software (QA)**.

🔗 **Acesse online:** [portifolio-next-flax.vercel.app](https://portifolio-next-flax.vercel.app/)

---

## 🚀 Tecnologias Utilizadas

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Biblioteca UI:** [React 19](https://react.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (Dark/Light Mode com persistência em `localStorage`)
- **Animações:** [Framer Motion](https://www.framer.com/motion/)
- **Ícones:** [Lucide React](https://lucide.dev/)

---

## 📂 Estrutura do Projeto

```text
src/
├── app/
│   ├── globals.css      # Estilos globais e utilitários Tailwind
│   ├── layout.tsx       # Metadados SEO, OpenGraph e configuração de fonte/tema
│   ├── page.tsx         # Página principal compondo as seções
│   ├── providers.tsx    # Contexto de tema (Dark/Light)
│   ├── robots.ts        # Geração automática de robots.txt
│   └── sitemap.ts       # Geração automática de sitemap.xml
├── components/
│   ├── Header.tsx       # Navegação responsiva e alternador de tema
│   ├── Hero.tsx         # Apresentação principal com efeito Typewriter
│   ├── About.tsx        # Resumo profissional e formação acadêmica
│   ├── Skills.tsx       # Categorias de habilidades técnicas (Dev, QA, Dados)
│   ├── Projects.tsx     # Projetos em destaque com links de código e evidências de QA
│   ├── Contact.tsx      # Canais de contato direto e formulário
│   ├── Footer.tsx       # Rodapé e links sociais
│   ├── Reveal.tsx       # Wrapper de animação on-scroll
│   └── Typewriter.tsx   # Efeito de digitação dinâmico
└── data/
    └── profile.ts       # Dados centralizados do perfil, habilidades e projetos
```

---

## 🛠️ Como Executar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/ArthurSkl/portifolio-next.git
   cd portifolio-next
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse `http://localhost:3000` no navegador.

4. **Build de produção:**
   ```bash
   npm run build
   npm start
   ```

---

## 📬 Contato

- **LinkedIn:** [linkedin.com/in/arthurfrantz](https://www.linkedin.com/in/arthurfrantz)
- **GitHub:** [github.com/ArthurSkl](https://github.com/ArthurSkl)
- **E-mail:** [arthursklt@hotmail.com](mailto:arthursklt@hotmail.com)
