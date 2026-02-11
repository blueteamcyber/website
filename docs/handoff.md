# Blue Team Cyber Website Handoff

## 1) Exact commands

### Local development
```bash
cp .env.example .env
npm install
npm run dev
```

### Quality checks
```bash
npm run lint
npm run test
npm run typecheck
npm run build
```

### Local production-like run with Docker
```bash
docker compose up --build
```

## 2) Required environment keys

Set all of these in `.env` locally and in Vercel production:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_ANALYTICS_ENABLED`
- `NEXT_PUBLIC_ANALYTICS_PROVIDER`
- `NEXT_PUBLIC_ANALYTICS_ID`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `CONTACT_TO`
- `CONTACT_RATE_LIMIT_MAX`
- `CONTACT_RATE_LIMIT_WINDOW_MS`

Reference values are in `.env.example`.

## 3) Deployment path (Vercel)

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Vercel, import the repository as a new project.
3. Add all env vars listed above.
4. Keep build command as `npm run build`.
5. Deploy and attach domain `theblueteam.io`.
6. In Vercel domain settings, enforce HTTPS and confirm DNS records.

## 4) Route and component map

### Routes
- `/` (single-page marketing IA with anchored sections)
- `/sitemap.xml`
- `/robots.txt`
- `/opengraph-image`

### Core components
- `src/components/site-header.tsx`
- `src/components/site-footer.tsx`
- `src/components/sections/home-section.tsx`
- `src/components/sections/about-section.tsx`
- `src/components/sections/services-section.tsx`
- `src/components/sections/blog-section.tsx`
- `src/components/sections/contact-section.tsx`
- `src/components/contact-form.tsx`

### Contact backend
- `src/app/actions/contact.ts`
- `src/lib/validation.ts`
- `src/lib/rate-limit.ts`
- `src/lib/mailer.ts`
- `src/lib/env.ts`

## 5) Edit guide

- Marketing copy and IA data lives in `src/lib/site-config.ts`.
- Global metadata and OG/Twitter tags live in `src/app/layout.tsx`.
- Security headers (CSP, frame, referrer, HSTS) live in `next.config.ts`.
- Contact form UX is in `src/components/contact-form.tsx`; server handling is in `src/app/actions/contact.ts`.
- If SMTP credentials rotate, only env vars need updates.
- Missing company-specific content remains flagged as `TODO:` in About copy and analytics provider extension.
