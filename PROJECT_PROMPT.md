# Prompt: Scaffold "DA (All Pages)" — Next.js Module-Structured Project

Create a Next.js 14+ (App Router, TypeScript) project named **DA (All Pages)**. Use a **module-based architecture** with a clear separation between a **frontend module** (UI/pages/components) and a **backend module** (API routes/services/data access), styled with **Tailwind CSS**. No placeholder/lorem-ipsum content — only real, functional scaffolding (empty/typed stubs where a page has no content yet).

## Stack
- Next.js (App Router), TypeScript (strict mode)
- Tailwind CSS + PostCSS
- ESLint (flat config)
- State management: Zustand (or equivalent) under `store/`
- Package manager: npm

## Root structure
```
.
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── contexts/
│   ├── features/
│   ├── lib/
│   ├── store/
│   └── proxy.ts
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── LICENSE
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Frontend module — `src/app/`
- Use **route groups** to separate concerns, e.g. `(auth)`, `(dashboard)`, plus one route group/folder per top-level page area needed for "All Pages" (ask me for the page list if not provided, don't invent business content).
- Each route group has its own `layout.tsx` where the UI differs (e.g. `(auth)/layout.tsx` for a centered auth shell).
- Root-level files: `layout.tsx`, `page.tsx`, `providers.tsx` (wraps context providers), `globals.css`, `favicon.ico`.
- API routes live under `src/app/api/` (this is the backend module's entry point — see below).

## Frontend module — `src/components/`
Group by responsibility, not by page:
- `components/auth/` — components used only in auth flows (e.g. `BackLink.tsx`, `LanguageSelector.tsx`, `LeftSidebar.tsx`, `PortalShell.tsx`)
- `components/layout/` — app chrome shared across authenticated pages (e.g. `Header.tsx`, `Sidebar.tsx`, `UserProfile.tsx`, `LanguageSelector.tsx`)
- `components/ui/` — generic, reusable, presentation-only primitives (e.g. `Button.tsx`, `Spinner.tsx`, `ErrorAlert.tsx`, and other form/UI primitives as needed)

## Frontend module — supporting folders
- `src/contexts/` — React context providers (e.g. `SidebarContext.tsx`)
- `src/features/` — one folder per business feature/domain, each self-contained (its own components, hooks, types, api calls) rather than scattered by file type
- `src/lib/` — shared utilities, constants, validation schemas, helpers
- `src/store/` — global client state (Zustand slices/stores)

## Backend module
- `src/app/api/**/route.ts` — Next.js Route Handlers, organized by resource (one folder per resource/endpoint group)
- `src/proxy.ts` — central server-side API client/gateway (base URL, headers, auth token injection) that route handlers and server components call through, instead of calling external services directly
- Keep request validation, auth checks, and response shaping in the route handlers; keep only HTTP/client concerns in `proxy.ts`

## Conventions
- One component per file, PascalCase filenames matching the default export
- Barrel (`index.ts`) exports only where a folder is consumed as a unit
- Tailwind config driven by design tokens (colors, spacing, radius) defined once, no ad hoc hex values in components
- No unused scaffolding: only create folders/files that are actually referenced or immediately needed
- `AGENTS.md` / `CLAUDE.md` should document the module boundaries above so future AI-assisted edits respect the frontend/backend separation

## Deliverable
Scaffold the folder/file tree above with minimal working code (a functioning root layout, Tailwind wired up, one working example page/route showing the frontend calling a backend route through `proxy.ts`), and all config files (`next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, `package.json`, `.gitignore`, `README.md`, `LICENSE`).
