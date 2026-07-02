# webapp

Vantage Revenue Advisory — a server-rendered site built with [Hono](https://hono.dev) and deployed on [Vercel](https://vercel.com).

## Local development

```text
npm install
npm run dev
```

## Deploying to Vercel

```text
npm run build
```

The build uses `@hono/vite-build/vercel` to bundle the Hono app (including JSX) into `.vercel/output`. Vercel detects `src/index.tsx` automatically and serves static files from `public/`.

Import the repository into Vercel with:

- **Build Command:** `npm run build`
- **Output Directory:** leave default (Build Output API uses `.vercel/output`)
