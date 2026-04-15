# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server with Turbopack
pnpm build        # Production build
pnpm lint         # Run ESLint with auto-fix
pnpm lint-check   # ESLint check only (no fix)
pnpm format       # Prettier auto-format
pnpm format-check # Prettier check only
```

There are no tests in this project.

## Environment Variables

Copy `.env` and set:
- `MICRO_CMS_SERVICE_DOMAIN` — microCMS service domain
- `MICRO_CMS_API_KEY` — microCMS API key

Both are required at startup; the app throws if either is missing.

## Architecture

Personal portfolio site built with Next.js 15 (App Router), React 19, Tailwind CSS v4, and microCMS as a headless CMS.

**Routing:**
- `/` — Home page (about, career, plants, fav media)
- `/blogs` — Blog list with infinite scroll (client component)
- `/blogs/[blogId]` — Blog detail (server component, fetches microCMS directly)
- `/toys` — Portfolio of side projects
- `/api/blogs` — Internal API route proxying microCMS (used by the SWR hook)

**Data flow for blogs:**
- `src/libs/client.ts` — microCMS SDK client (server-side only)
- `src/app/api/blogs/route.ts` — API route wrapping the client with pagination (`limit`/`offset`)
- `src/hooks/useBlogs.tsx` — `useSWRInfinite` hook calling `/api/blogs` for client-side infinite scroll
- Blog detail page bypasses the API route and calls `client.get()` directly (server component)

**Static data** (no CMS): `src/data/books.ts`, `src/data/movies.ts`, `src/data/plants.ts`, `src/data/products.ts` — plain TypeScript arrays rendered on the home and toys pages.

**Deployment:** Vercel via GitHub Actions. The build workflow runs on push to `main`; the deploy workflow triggers after a successful build.
