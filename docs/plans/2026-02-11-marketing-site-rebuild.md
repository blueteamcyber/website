# Blue Team Cyber Marketing Site Rebuild Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build and deploy a modern, fast, mobile-first single-page marketing site replacing the existing IA (Home, About, Services, Blog, Contact) using Next.js App Router + TypeScript + Tailwind.

**Architecture:** Use one App Router page (`/`) with semantic section anchors (`#home`, `#about`, `#services`, `#blog`, `#contact`) and shared typed content constants. Handle contact submission through a server action with honeypot + token-bucket rate limiting and SMTP delivery. Generate SEO artifacts with metadata, robots, and sitemap routes.

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind CSS v4, Nodemailer, Zod, Docker (multi-stage), optional Vercel deploy target.

---

### Task 1: Scaffold And Base Tooling

**Files:**
- Modify: `package.json`
- Create: `.env.example`
- Create: `docs/handoff.md`

1. Add missing dependencies for SMTP and validation.
2. Add optional analytics env switch and contact env keys in `.env.example`.
3. Add initial handoff doc shell for future edits.
4. Commit: `chore: scaffold nextjs marketing app baseline`

### Task 2: Design System And Layout Foundation

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`
- Create: `src/lib/site-config.ts`
- Create: `src/components/analytics-provider.tsx`

1. Replace starter styles with brand-focused color tokens and typography.
2. Define global metadata (title template, description, canonical base URL, OG/Twitter).
3. Add optional analytics component behind env flag.
4. Commit: `feat: establish brand styling and global metadata foundation`

### Task 3: Single-Page IA Sections

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/components/sections/*.tsx`
- Create: `src/components/site-header.tsx`
- Create: `src/components/site-footer.tsx`

1. Build semantic sections for Home/About/Services/Blog/Contact CTA anchor.
2. Use typed content arrays for pillars and services.
3. Ensure keyboard-friendly nav and strong contrast.
4. Commit: `feat: implement single-page marketing IA`

### Task 4: Contact Form With Server Action And Security

**Files:**
- Create: `src/app/actions/contact.ts`
- Create: `src/components/contact-form.tsx`
- Create: `src/lib/rate-limit.ts`
- Create: `src/lib/mailer.ts`
- Create: `src/lib/validation.ts`
- Create: `src/lib/env.ts`
- Create: `src/lib/__tests__/rate-limit.test.ts`
- Create: `src/lib/__tests__/validation.test.ts`

1. Write failing tests for validation and rate limiting first.
2. Implement Zod schema, in-memory token bucket limiter, and honeypot checks.
3. Implement SMTP transport and secure error handling.
4. Connect server action to UI with success/error states.
5. Commit: `feat: add secure contact form server action with smtp delivery`

### Task 5: SEO Routes And Crawl Controls

**Files:**
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`
- Modify: `src/app/layout.tsx`

1. Add canonical URL metadata and open graph image defaults.
2. Add sitemap and robots routes.
3. Commit: `feat: add seo metadata sitemap and robots`

### Task 6: Deployment Assets

**Files:**
- Create: `Dockerfile`
- Create: `docker-compose.yml`
- Create: `.dockerignore`
- Modify: `README.md`

1. Create secure multi-stage Dockerfile with standalone output.
2. Add docker-compose for local prod-like run.
3. Document Vercel production deployment path.
4. Commit: `chore: add docker local deployment and production runbook`

### Task 7: Verify Before Completion

**Files:**
- Modify: `docs/handoff.md`

1. Run lint, tests, and build.
2. Fix all TypeScript/build errors.
3. Finalize handoff docs with commands, env keys, and edit guide.
4. Commit: `docs: finalize handoff and verification evidence`
