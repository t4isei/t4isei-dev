# nefleia.com Development Guide

## Commands

```bash
# Start the development server
pnpm dev

# Build the app for production
pnpm build

# Start the production server
pnpm start

# Run lint and apply automatic fixes
pnpm lint

# Run lint without applying fixes
pnpm lint-check

# Format source files
pnpm format

# Check formatting without modifying files
pnpm format-check
```

## Directory Structure

```text
src/             # App source root
├── app/         # App Router pages, layouts, global styles, and route handlers
├── components/  # Shared presentational components and blog-specific UI
├── data/        # Static data for profile sections and product-like content
├── hooks/       # Client-side data hooks such as paginated blog fetching
├── libs/        # External service setup and shared fetch utilities
├── types/       # Shared TypeScript types including CMS response shapes
└── utils/       # Small reusable helpers such as date formatting
```
