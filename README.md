# No Fapp

Landing page for No Fapp, a focused Next.js experience.

## Stack

Next.js, React, TypeScript, Tailwind CSS, and pnpm.

## Install and run

```bash
pnpm install
pnpm dev
```

Production checks:

```bash
pnpm lint
pnpm build
pnpm start
```

## Structure

- `src/app` — routes and app-level metadata/assets
- `src/components/avatars` — avatar components and artwork
- `src/data/ranks.ts` — rank definitions
- `src/content/copy.ts` — product copy
- `src/lib` — shared utilities and site configuration

## Environment

Copy `.env.example` to `.env.local`:

- `NEXT_PUBLIC_APP_URL` — base URL of the real application/auth service.
- `NEXT_PUBLIC_SITE_URL` — public site URL for sitemap and robots metadata. Defaults to `http://localhost:3000`.

## Branding

The replaceable app icon is `src/app/icon.svg`; the generated social image is `src/app/opengraph-image.tsx`. Keep branding changes isolated to app assets and the relevant content/styles owned by the project lane.

## Connecting authentication

Replace `src/app/login/page.tsx` and `src/app/register/page.tsx` with the real auth flows. Use `APP_URL` from `src/lib/site.ts` (backed by `NEXT_PUBLIC_APP_URL`) for links or redirects to the application.
