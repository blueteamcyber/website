# Blue Team Cyber Marketing Website

Modern single-page marketing site for Blue Team Cyber built with Next.js App Router + TypeScript + Tailwind.

## Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Server Actions for contact handling
- Nodemailer SMTP delivery
- Vitest for unit tests

## Local development
1. Copy env template:
```bash
cp .env.example .env
```
2. Install deps and run:
```bash
npm install
npm run dev
```
3. Open `http://localhost:3000`.

## Validation commands
```bash
npm run lint
npm run test
npm run typecheck
npm run build
```

## Docker (local production-like)
```bash
docker compose up --build
```

## Production deploy target: Vercel
1. Push repository to Git provider.
2. In Vercel, create a new project and import this repo.
3. Set all environment variables from `.env.example`.
4. Build command: `npm run build`.
5. Output handled automatically by Next.js.
6. Attach custom domain `theblueteam.io` and enforce HTTPS in Vercel settings.

## Security
- CSP, frame, and content-type hardening headers in `next.config.ts`
- Honeypot field and IP-based rate limiting on contact server action
- SMTP credentials handled through environment variables only

## Content placeholders
Missing business-specific copy is explicitly marked `TODO:` in the UI copy.
