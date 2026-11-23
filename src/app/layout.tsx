import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./providers";

const siteUrl = "https://portifolio-next-flax.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Arthur Frantz | Desenvolvedor Full Stack & QA",
  description:
    "Portfólio de Arthur Frantz. Engenheiro de Software, Desenvolvedor Full Stack e Pós-graduando em QA & Testes Automatizados (React, Node.js, PostgreSQL, Cypress e Power BI).",
  keywords: [
    "Arthur Frantz",
    "desenvolvedor full stack",
    "QA",
    "testes automatizados",
    "qualidade de software",
    "engenheiro de software",
    "React",
    "Node.js",
    "PostgreSQL",
    "Cypress",
    "Power BI",
    "portfólio",
  ],
  authors: [{ name: "Arthur Frantz" }],
  creator: "Arthur Frantz",
  openGraph: {
    title: "Arthur Frantz | Desenvolvedor Full Stack & QA",
    description:
      "Engenheiro de Software, Desenvolvedor Full Stack e Especialista em QA & Testes Automatizados com experiência em React, Node.js, PostgreSQL, Cypress e Power BI.",
    url: siteUrl,
    siteName: "Arthur Frantz",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Frantz | Desenvolvedor Full Stack & QA",
    description:
      "Engenheiro de Software, Desenvolvedor Full Stack e Especialista em QA & Testes Automatizados com experiência em React, Node.js, PostgreSQL, Cypress e Power BI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":true;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
