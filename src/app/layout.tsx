import type { Metadata } from "next";
import { Inter, Inter_Tight, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ShellWrapper } from "@/components/shell/ShellWrapper";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-heading",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "POISY — Digital Design House",
  description: "Living systems, breathing interfaces.",
};

import { ThemeProvider } from "@/providers/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${interTight.variable} ${geistMono.variable} antialiased font-body bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ShellWrapper>
            {children}
          </ShellWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
