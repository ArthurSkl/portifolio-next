export const profile = {
  name: "Arthur Augusto Coelho Frantz",
  shortName: "Arthur Frantz",
  role: "Desenvolvedor Full Stack & QA",
  roles: ["Full Stack", "QA & Testes Automatizados", "Análise de Dados"],
  location: "Campo Grande - MS, Brasil",
  email: "arthursklt@hotmail.com",
  phone: "(67) 99133-3349",
  linkedin: "https://www.linkedin.com/in/arthurfrantz",
  github: "https://github.com/ArthurSkl",
  portfolio: "https://portifolio-next-flax.vercel.app",
  summary:
    "Desenvolvedor Full Stack e QA com cerca de 2 anos de experiência como Desenvolvedor de Software. Bacharel em Engenharia de Software, Técnico em Desenvolvimento de Sistemas pelo SENAC e pós-graduando Lato Sensu em Testes Ágeis e Automação de Qualidade de Software (QA). Atuei em sustentação de sistemas, correção de bugs e desenvolvimento de aplicações full-stack com React, Node.js e PostgreSQL, além de automação de testes em múltiplas camadas (unitários, API e E2E com Cypress) e análise de dados com Power BI. Perfil analítico e orientado a resultados, com foco em qualidade de software, prevenção de defeitos e melhoria contínua.",
  facts: [
    { label: "Localização", value: "Campo Grande - MS, Brasil" },
    { label: "Experiência", value: "~2 anos como Desenvolvedor de Software" },
    {
      label: "Graduação",
      value: "Bacharelado em Engenharia de Software",
    },
    {
      label: "Pós-Graduação",
      value: "Lato Sensu em Testes Ágeis e Automação de Qualidade de Software (QA)",
    },
    {
      label: "Formação Técnica",
      value: "Técnico em Desenvolvimento de Sistemas — SENAC",
    },
    { label: "Certificações", value: "AI-900 Azure, BPM, Trilha Power BI (37h)" },
    { label: "Foco atual", value: "Full Stack, QA & Automação de Testes" },
  ],
};

export const contact = {
  email: profile.email,
  phone: profile.phone,
  location: profile.location,
  linkedin: profile.linkedin,
  github: profile.github,
  portfolio: profile.portfolio,
};

export type SkillCategory = {
  icon: string;
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    icon: "code",
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "React Native"],
  },
  {
    icon: "server",
    title: "Backend",
    skills: ["Node.js", "Express", "PHP", "APIs REST"],
  },
  {
    icon: "database",
    title: "Banco de Dados",
    skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    icon: "bug",
    title: "Qualidade & Testes",
    skills: [
      "Cypress",
      "Supertest",
      "Selenium",
      "JUnit",
      "Testes Unitários, API e E2E",
      "Testes Funcionais e de Aceitação",
    ],
  },
  {
    icon: "chart",
    title: "Análise de Dados",
    skills: ["Power BI", "Excel", "Modelagem de Dados", "Visualização de Dados"],
  },
  {
    icon: "tool",
    title: "Ferramentas & Métodos",
    skills: ["Git", "GitHub Actions", "Vite", "Scrum", "Kanban"],
  },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  highlights: string[];
  code?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "HelpDesk Pro",
    description:
      "Sistema de gestão e controle de chamados de suporte, com autenticação de usuários, CRUD completo e fluxo de atendimento. 90 testes automatizados em 3 camadas (unitários, API e E2E), executados em CI com GitHub Actions e evidências de execução.",
    stack: ["React", "Node.js", "PostgreSQL", "Cypress", "Supertest"],
    highlights: [
      "Autenticação de usuários",
      "CRUD completo",
      "Testes unitários, de API e E2E",
      "CI com evidências",
    ],
    featured: true,
    code: "https://github.com/ArthurSkl/helpdesk-pro",
    demo: "https://helpdesk-pro-chi.vercel.app",
  },
  {
    name: "Plano de Qualidade - HelpDesk Pro",
    description:
      "Documentação de QA do projeto HelpDesk Pro: estratégia de testes em 3 camadas (unitários, API e E2E), stack utilizada, critérios de aceite, execução em CI e evidências de testes documentadas.",
    stack: ["node:test", "Supertest", "Cypress"],
    highlights: [
      "Estratégia de testes em 3 camadas",
      "Critérios de aceite",
      "Evidências documentadas",
    ],
    code: "https://github.com/ArthurSkl/helpdesk-pro/blob/main/docs/QA.md",
  },
  {
    name: "Suíte de Testes E2E — Cypress",
    description:
      "Automação de testes End-to-End cobrindo fluxos críticos de e-commerce (autenticação, carrinho de compras e checkout), utilizando comandos customizados, fixtures, documentação de casos de teste e execução contínua em CI.",
    stack: ["Cypress", "JavaScript", "GitHub Actions"],
    highlights: [
      "Fluxos de login, carrinho e checkout",
      "Custom Commands e Fixtures",
      "Casos de teste documentados (QA)",
      "Pipeline CI no GitHub Actions",
    ],
    code: "https://github.com/ArthurSkl/testes-e2e-cypress",
  },
  {
    name: "Automação Web — Selenium & JUnit",
    description:
      "Projeto de automação de testes funcionais e de interface web com Java, Selenium WebDriver e JUnit, aplicando boas práticas de validação de cenários e execução automatizada em pipeline de integração contínua.",
    stack: ["Java", "Selenium WebDriver", "JUnit", "GitHub Actions"],
    highlights: [
      "Testes automatizados de UI",
      "Asserções e relatórios com JUnit",
      "Execução integrada ao GitHub Actions",
    ],
    code: "https://github.com/ArthurSkl/testes-automatizados-selenium-junit",
  },
  {
    name: "ETG Senac",
    description:
      "Sistema de gestão escolar para o SENAC Gastronomia, com controle de turmas, professores, perfis de acesso e relatórios.",
    stack: ["PHP", "MySQL", "JavaScript"],
    highlights: [
      "Gestão de turmas e docentes",
      "Geração de relatórios gerenciais",
      "Modelagem relacional em MySQL",
    ],
    code: "https://github.com/ArthurSkl/ETG-Senac",
  },
  {
    name: "Sistema de Controle de Equipamentos",
    description:
      "Aplicação full-stack de gestão de equipamentos, salas, professores, níveis logísticos e permissões de acesso. Desenvolvida em projeto interno da Multilab.",
    stack: ["React", "Node.js", "PostgreSQL"],
    highlights: [
      "Controle de acesso por níveis (RBAC)",
      "Rastreabilidade de equipamentos e salas",
      "API RESTful integrada ao PostgreSQL",
    ],
  },
];

export type JourneyItem = {
  period: string;
  role: string;
  institution: string;
  type: "work" | "education";
  description: string;
  tags: string[];
};

export const journey: JourneyItem[] = [
  {
    period: "Em andamento",
    role: "Pós-Graduação Lato Sensu em Testes Ágeis e Automação de Qualidade de Software (QA)",
    institution: "Especialização Acadêmica",
    type: "education",
    description:
      "Aprofundamento em estratégia de qualidade em times ágeis, pirâmide de testes, automação E2E/API/Unit, integração contínua (CI/CD) e prevenção de defeitos.",
    tags: ["Testes Ágeis", "Automação de QA", "CI/CD", "Qualidade de Software"],
  },
  {
    period: "~2 anos de atuação",
    role: "Desenvolvedor de Software Full Stack & QA",
    institution: "Experiência Profissional & Projetos Internos (Multilab / SENAC)",
    type: "work",
    description:
      "Desenvolvimento de aplicações full-stack, sustentação de sistemas em produção, investigação e correção de bugs, modelagem de banco de dados e implementação de testes automatizados e relatórios analíticos.",
    tags: ["React", "Node.js", "PostgreSQL", "PHP", "Cypress", "Power BI"],
  },
  {
    period: "Concluído",
    role: "Bacharelado em Engenharia de Software",
    institution: "Ensino Superior",
    type: "education",
    description:
      "Formação em engenharia de requisitos, arquitetura de software, estruturas de dados, bancos de dados relacionais/não-relacionais, qualidade e ciclo de vida de desenvolvimento.",
    tags: ["Engenharia de Software", "Arquitetura", "SQL", "Boas Práticas"],
  },
  {
    period: "Concluído",
    role: "Técnico em Desenvolvimento de Sistemas",
    institution: "SENAC",
    type: "education",
    description:
      "Formação prática intensiva em lógica de programação, desenvolvimento web full-stack, modelagem de banco de dados e construção de projetos aplicados (como o sistema ETG Senac).",
    tags: ["SENAC", "Desenvolvimento Web", "PHP", "JavaScript", "MySQL"],
  },
];

export const navigation = [
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];
