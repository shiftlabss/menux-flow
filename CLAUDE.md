# CLAUDE.md — Flow CRM

## Stack
- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, TypeScript 5.9
- **State:** Zustand 5 (no providers needed)
- **Styling:** Tailwind CSS v4, shadcn/ui components
- **Animation:** Framer Motion 12
- **Testing:** Vitest 4, jsdom environment

## Architecture

### Directory layout
```
src/
  app/(auth)/          # Authenticated pages (pipes, dashboard, activities, ...)
  components/          # Shared + feature components
    ui/                # shadcn/ui primitives
    shared/            # Error boundaries, global drawers, search
    dashboard/         # Dashboard widgets (funnel-x-ray, etc.)
    intelligence/      # AI chat panel
    pipeline/          # Pipeline management components
  stores/              # Zustand stores (auth, opportunity, activity, client, goal, pipeline, ui, ...)
  lib/                 # Business logic, mock data, engines
    mock-data/         # Split mock data modules
    proactive-engine/  # Proactive intelligence engine
    intelligence-engine/ # AI response engine
    business-rules.ts  # Core business calculations
  hooks/               # Custom React hooks
  types/               # TypeScript type definitions
```

### Path alias
`@/` maps to `src/` (configured in tsconfig.json and vitest.config.ts).

### State management
All stores use Zustand 5 with `create()`. Access state outside React with `useStore.getState()`. Stores are in `src/stores/`.

### Mock data
Currently using mock data (no backend). All mock data is in `src/lib/mock-data/` as a barrel-exported module.

### Barrel export pattern
Large files are split into folders with an `index.ts` that re-exports the public API. Consumers import from the folder path (e.g., `@/lib/mock-data`), which resolves to `index.ts`.

## Conventions

### File naming
- Components: `kebab-case.tsx`
- Hooks: `use-kebab-case.ts`
- Stores: `kebab-case-store.ts`
- Tests: `__tests__/kebab-case.test.ts`
- Config/utils: `kebab-case.ts`

### Component patterns
- `"use client"` directive required for any file using React hooks, browser APIs, or event handlers
- Server components are the default in Next.js App Router
- Error boundaries use class components (`src/components/shared/error-boundary.tsx`)

### Styling
- Tailwind v4 utility classes, NO custom CSS files
- Design tokens via CSS variables: `--radius-bento-card`, `--radius-bento-inner`
- Font classes: `font-heading` (display), `font-body` (text)
- Color tokens: `text-brand`, `bg-brand`, `text-status-success`, `text-status-warning`, `text-status-danger`, `text-status-info`

### Language
- UI text is in Brazilian Portuguese (pt-BR)
- Code (variables, functions, comments) is in English
- Currency: BRL, formatted with `formatCurrencyBRL()` from `@/lib/business-rules`

## Commands

```bash
# Development
npm run dev              # Start dev server

# Type checking
npx tsc --noEmit         # Check types without emitting

# Testing
npx vitest run           # Run all tests once
npx vitest run <path>    # Run specific test file
npx vitest               # Watch mode

# Build
npm run build            # Production build
```

## Design system reference

### Bento card pattern
Use `<BentoCard>` from `@/components/ui/bento-card` for dashboard widgets. Skeleton loading uses `<Skeleton>` from `@/components/ui/skeleton`.

### Motion
Import animation variants from `@/lib/motion`: `screenContainer`, `sectionEnter`, `listItemReveal`.

### Icons
Use `lucide-react` for all icons. Import individual icons, not the full library.
