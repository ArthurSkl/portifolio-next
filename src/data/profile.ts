export const profile = {
  name: "Arthur Augusto Coelho Frantz",
  shortName: "Arthur Frantz",
  role: "Desenvolvedor Full Stack & Analista de QA",
  roles: ["Full Stack", "QA & Testes Automatizados", "Análise de Dados"],
  location: "Campo Grande - MS, Brasil",
  email: "arthursklt@hotmail.com",
  phone: "(67) 99133-3349",
  linkedin: "https://www.linkedin.com/in/arthurfrantz",
  github: "https://github.com/ArthurSkl",
  portfolio: "https://portifolio-next-flax.vercel.app",
  summary:
    "Engenheiro de Software (Estácio), Pós-graduando Lato Sensu em Testes Ágeis e Automação de Qualidade de Software (QA) e Técnico em Desenvolvimento de Sistemas pelo SENAC. Com mais de 2 anos de experiência profissional como Desenvolvedor Full Stack na Multlab e atuação contínua em projetos de engenharia e qualidade, desenvolvo aplicações completas com React, Next.js, Node.js e PostgreSQL e estruturo suítes de testes automatizados em 3 camadas (unitários, API e E2E com Cypress e Selenium) integradas em pipelines de CI/CD.",
  facts: [
    { label: "Localização", value: "Campo Grande - MS, Brasil (Remoto / Híbrido / Presencial)" },
    { label: "Experiência", value: "+2 anos em Desenvolvimento Full Stack, Sustentação & QA" },
    {
      label: "Pós-Graduação",
      value: "Lato Sensu em Testes Ágeis e Automação de Qualidade de Software (QA)",
    },
    {
      label: "Graduação",
      value: "Bacharelado em Engenharia de Software — Estácio (Ago/2025)",
    },
    {
      label: "Formação Técnica",
      value: "Técnico em Desenvolvimento de Sistemas — SENAC (Fev/2024)",
    },
    { label: "Foco atual", value: "Desenvolvimento Full Stack & Automação de Testes (QA)" },
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

export type Certification = {
  title: string;
  issuer: string;
  hours?: string;
  credential?: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    title: "Aplicação da Melhoria Contínua (Modelagem de Dados, Sistemas e Métodos Ágeis)",
    issuer: "Universidade Estácio de Sá",
    hours: "330h",
    url: "https://certificado.estacio.br/7aaae4b7cabe6f7852ae6d1",
  },
  {
    title: "Programação e Modelagem de Sistemas de Informação",
    issuer: "Universidade Estácio de Sá",
    hours: "286h",
    url: "https://certificado.estacio.br/a559f3db87601a5c59f2ad5",
  },
  {
    title: "Gerência de Projetos de T.I. & Medidas de Esforço de Software",
    issuer: "Universidade Estácio de Sá",
    hours: "198h",
    url: "https://certificado.estacio.br/394d0c4558a80fe319f3368",
  },
  {
    title: "AI-900 — Fundamentos de Inteligência Artificial no Microsoft Azure",
    issuer: "Fundação Bradesco & Microsoft",
    hours: "16h",
    credential: "D64A305D-9B4A-44C4-99E2-8FF2F8C3F445",
  },
  {
    title: "Trilha de Conhecimento: Fundamentos do Power BI (ETL, DAX & Dashboards)",
    issuer: "Fundação Bradesco",
    hours: "37h",
  },
  {
    title: "Especialista em Mapeamento de Processos de Negócios (BPM) & Administração de BD",
    issuer: "Udemy / Fundação Bradesco",
    hours: "19h",
    url: "https://ude.my/UC-136dffac-dade-4fb9-b7b6-2020a4d58c8f",
  },
];

export type SkillCategory = {
  icon: string;
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    icon: "code",
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "React Native"],
  },
  {
    icon: "server",
    title: "Backend & APIs",
    skills: ["Node.js", "Express", "PHP", "APIs RESTful", "Autenticação JWT"],
  },
  {
    icon: "database",
    title: "Banco de Dados",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Modelagem SQL"],
  },
  {
    icon: "bug",
    title: "Qualidade & Automação (QA)",
    skills: [
      "Cypress (E2E)",
      "Selenium WebDriver",
      "Supertest (API)",
      "JUnit & node:test",
      "Pirâmide de Testes (3 Camadas)",
      "Planos de Teste & BDD",
    ],
  },
  {
    icon: "chart",
    title: "Análise de Dados & BI",
    skills: ["Power BI", "Modelagem DAX", "Power Query (ETL)", "Dashboards Executivos"],
  },
  {
    icon: "tool",
    title: "DevOps, CI/CD & Métodos",
    skills: ["Git & GitHub", "GitHub Actions (CI/CD)", "Scrum & Kanban", "BPM", "Troubleshooting"],
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
      "Aplicação full-stack de gestão de equipamentos, salas, professores, níveis logísticos e permissões de acesso.",
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
    period: "Jun 2024 — Atual",
    role: "Desenvolvedor Full Stack & Analista de QA (Automação de Testes)",
    institution: "Projetos de Engenharia de Software & QA Automation",
    type: "work",
    description:
      "Desenvolvimento de aplicações web full-stack (React, Next.js, Node.js, PostgreSQL) e implementação de arquiteturas de testes automatizados em 3 camadas (Unitários, API com Supertest e E2E com Cypress e Selenium) integradas em pipelines de CI/CD no GitHub Actions.",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL", "Cypress", "Selenium", "GitHub Actions"],
  },
  {
    period: "2026 — Em andamento",
    role: "Pós-Graduação Lato Sensu em Testes Ágeis e Automação de Qualidade de Software (QA)",
    institution: "Especialização Acadêmica",
    type: "education",
    description:
      "Especialização focada em Engenharia de Qualidade em times ágeis, pirâmide de testes (Unit, API e E2E), automação contínua em CI/CD, gestão de defeitos e métricas de qualidade.",
    tags: ["Testes Ágeis", "Automação de QA", "CI/CD", "Qualidade de Software"],
  },
  {
    period: "Mar 2022 — Mai 2024 (2 anos e 2 meses)",
    role: "Desenvolvedor Full Stack (Desenvolvimento, Sustentação & Qualidade)",
    institution: "Multlab Produtos p/ Laboratórios Ltda. • Aracaju/SE (Remoto)",
    type: "work",
    description:
      "Atuação no desenvolvimento de soluções Full Stack, investigação e correção de bugs, otimizações de desempenho, integração com sistemas externos e sustentação técnica contínua dos sistemas web da empresa.",
    tags: ["Node.js", "JavaScript", "SQL", "HTML5 & CSS3", "jQuery", "Git", "Troubleshooting"],
  },
  {
    period: "Mar 2021 — Ago 2025 (Concluído)",
    role: "Bacharelado em Engenharia de Software",
    institution: "Universidade Estácio de Sá",
    type: "education",
    description:
      "Formação superior com certificações intermediárias em Aplicação da Melhoria Contínua (330h), Programação e Modelagem de Sistemas (286h) e Gerência de Projetos de T.I. (198h).",
    tags: ["Engenharia de Software", "Modelagem de Dados", "Métodos Ágeis", "Gestão de Projetos"],
  },
  {
    period: "Out 2022 — Fev 2024 (Concluído)",
    role: "Técnico em Desenvolvimento de Sistemas",
    institution: "SENAC Brasil",
    type: "education",
    description:
      "Formação técnica prática em desenvolvimento web full-stack, banco de dados relacionais, engenharia de requisitos e desenvolvimento do sistema interno para o SENAC Gastronomia.",
    tags: ["SENAC", "Full Stack", "PHP", "JavaScript", "MySQL"],
  },
];

export const navigation = [
  { href: "#sobre", label: "Trajetória" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];
