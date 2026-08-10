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
  portfolio: "https://portfolio-devfrantz.vercel.app",
  summary:
    "Desenvolvedor Full Stack e QA com cerca de 2 anos de experiência como Desenvolvedor de Software, formado em Engenharia de Software e Técnico em Desenvolvimento de Sistemas. Atuei em sustentação de sistemas, correção de bugs e desenvolvimento de aplicações full-stack com React, Node.js e PostgreSQL, além de testes automatizados com Cypress e análise de dados com Power BI. Perfil analítico e orientado a resultados, com foco em qualidade, resolução de problemas e melhoria contínua.",
  facts: [
    { label: "Localização", value: "Campo Grande - MS, Brasil" },
    { label: "Experiência", value: "~2 anos como Desenvolvedor de Software" },
    { label: "Formação", value: "Bacharelado em Engenharia de Software" },
    { label: "Certificações", value: "AI-900 Azure, BPM, Trilha Power BI (37h)" },
    { label: "Foco atual", value: "Full Stack, QA e Análise de Dados" },
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
    skills: ["Cypress", "Selenium", "JUnit", "Testes funcionais e de aceitação"],
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
    name: "ETG Senac",
    description:
      "Sistema de gestão escolar para o SENAC Gastronomia, com controle de turmas, professores e relatórios.",
    stack: ["PHP", "MySQL", "JavaScript"],
    highlights: [],
  },
  {
    name: "Sistema de Controle de Equipamentos",
    description:
      "Aplicação full-stack de gestão de equipamentos, salas, professores, níveis logísticos e permissões de acesso. Desenvolvida em projeto interno da Multilab.",
    stack: ["React", "Node.js", "PostgreSQL"],
    highlights: [],
  },
];

export const navigation = [
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];
