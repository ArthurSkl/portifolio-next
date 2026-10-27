import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

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
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${jakarta.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
