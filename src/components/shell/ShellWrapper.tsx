"use client";

import { AppShell } from "./AppShell";

const navItems = [
  { label: "Arsenal", href: "#arsenal" },
  { label: "Philosophy", href: "#philosophy" },
];

export function ShellWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AppShell 
      navigationItems={navItems}
      ctaLabel="Book a Consultation"
      ctaHref="#consultation"
    >
      {children}
    </AppShell>
  );
}
