# webapp

Vantage Revenue Advisory — a server-rendered site built with [Hono](https://hono.dev) and deployed on [Vercel](https://vercel.com).

## Local development

```text
npm install
npm run dev
```

The dev server runs the Hono app via `@hono/vite-dev-server`. Static assets live in `public/` (served at the site root, e.g. `public/static/style.css` → `/static/style.css`).

## Deploying to Vercel

The app runs as a Vercel Edge Function defined in `api/index.ts`, which serves the Hono app exported from `src/index.tsx`. Routing is configured in `vercel.json`:

- All requests (except `/static/*`) are rewritten to the `/api` function.
- Static files are served directly from `public/`.

Just import the repository into Vercel — no build step is required.
