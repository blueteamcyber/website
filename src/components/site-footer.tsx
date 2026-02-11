import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-container flex flex-col items-start justify-between gap-4 text-sm text-muted md:flex-row md:items-center">
        <p>
          {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href={siteConfig.blogUrl} target="_blank" rel="noopener noreferrer">
            Blog
          </Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
