<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Module boundaries

- **Frontend module**: `src/app` (pages/layouts, grouped by route group — `(auth)`, `(dashboard)`), `src/components` (`auth/`, `layout/`, `ui/` — grouped by responsibility, not by page), `src/contexts` (React context), `src/features` (one folder per business feature), `src/lib` (shared utilities), `src/store` (Zustand global state).
- **Backend module**: `src/app/api/**/route.ts` (Route Handlers, one folder per resource) and `src/proxy.ts` (central server-side API gateway). Not yet scaffolded — see `PROJECT_PROMPT.md`.

Keep new code inside the module it belongs to; don't reach from `components/ui` into `features/*`, and don't put HTTP/data-fetching logic in `components/`.
