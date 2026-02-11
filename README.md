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

## Production deploy target: Managed hosting with Docker
1. Provision a host with Docker Engine and Docker Compose plugin.
2. Copy project files to the host and create a production `.env` from `.env.example`.
3. Build and run:
```bash
docker compose up --build -d
```
4. Route your domain/reverse proxy to container port `3000`.
5. Terminate TLS at your reverse proxy/load balancer and enforce HTTPS.
6. Ensure proxy forwards `Host` and `X-Forwarded-For` headers.
7. Verify outbound SMTP access from the host so contact emails can be sent.

## Security
- CSP, frame, and content-type hardening headers in `next.config.ts`
- Honeypot field and IP-based rate limiting on contact server action
- SMTP credentials handled through environment variables only

## Content placeholders
Missing business-specific copy is explicitly marked `TODO:` in the UI copy.
