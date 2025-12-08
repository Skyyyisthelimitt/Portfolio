import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Angelo Sosa - Web Developer",
  description: "Web Developer specializing in Discord apps, Web3 tools, and modern web development using React, Next.js, TypeScript, and Tailwind CSS.",
  keywords: ["Web Developer", "React", "Next.js", "TypeScript", "Web3", "Portfolio"],
  authors: [{ name: "Angelo Sosa" }],
  openGraph: {
    title: "Angelo Sosa - Web Developer",
    description: "Web Developer specializing in Discord apps, Web3 tools, and modern web development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
