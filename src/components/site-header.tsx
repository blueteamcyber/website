import Link from "next/link";

import type { NavItem } from "@/lib/site-config";

type SiteHeaderProps = {
  navItems: NavItem[];
};

export function SiteHeader({ navItems }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between">
        <Link
          href="#home"
          className="font-mono text-sm font-semibold tracking-[0.2em] text-brand"
          aria-label="Blue Team Cyber home"
        >
          BLUE TEAM CYBER
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-muted">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-sm transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="#contact"
          className="rounded-full border border-brand/70 bg-brand/20 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-brand/30"
        >
          Start a Conversation
        </Link>
      </div>
    </header>
  );
}
