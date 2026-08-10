import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://portfolio-devfrantz.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Arthur Frantz | Desenvolvedor Full Stack",
  description:
    "Portfólio de Arthur Frantz. Desenvolvedor Full Stack e QA com experiência em React, Node.js, PostgreSQL, Cypress e Power BI.",
  keywords: [
    "Arthur Frantz",
    "desenvolvedor full stack",
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
    title: "Arthur Frantz | Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack e QA com experiência em React, Node.js, PostgreSQL, Cypress e Power BI.",
    url: siteUrl,
    siteName: "Arthur Frantz",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Frantz | Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack e QA com experiência em React, Node.js, PostgreSQL, Cypress e Power BI.",
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
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
