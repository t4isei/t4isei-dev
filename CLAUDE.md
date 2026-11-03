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

None required.

## Architecture

Personal portfolio site built with Next.js 15 (App Router), React 19, and Tailwind CSS v4.

**Routing:**
- `/` — Home page (about, career, plants, fav media)
- `/toys` — Portfolio of side projects

**Blogs (currently disabled):** The `/blogs` routes, the microCMS client, the API route and the data hook were removed, and the header link was dropped. The presentation layer is kept for future use: `src/components/blogs/` (`BlogList`, `BlogDetail`, `BlogContent`, `BlogItme`, `NoPost`) and `src/types/micro-cms.ts` (`Blog` type). To re-enable, add a data source, recreate `src/app/blogs/page.tsx` and `src/app/blogs/[blogId]/page.tsx` using those components, and restore the header link. The previous microCMS implementation is in git history.

**Static data:** `src/data/books.ts`, `src/data/movies.ts`, `src/data/plants.ts`, `src/data/products.ts` — plain TypeScript arrays rendered on the home and toys pages.

**Deployment:** Vercel via GitHub Actions. The build workflow runs on push to `main`; the deploy workflow triggers after a successful build.
