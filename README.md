# Portfolio — Jose Carlos Muñoz

Live site: [joseporfolio.netlify.app](https://joseporfolio.netlify.app)

A static portfolio (Vite + React + TypeScript) with its content — projects,
bio, skills, contact links — editable from an `/admin` panel ([Decap
CMS](https://decapcms.org)) without touching code. The site is trilingual
(**es** / **en** / **sv**) and every project has a status: `listo` (ready),
`en-progreso` (in progress), or `futuro` (planned).

## Tech stack

- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/vite`, no classic config)
- [Decap CMS](https://decapcms.org) for content editing, backed by the GitHub API
- Deployed on [Netlify](https://netlify.com)

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`. To also edit content locally at
`http://localhost:5173/admin`, run the local CMS backend in a second
terminal:

```bash
npm run cms
```

Decap detects `localhost` and uses that local backend automatically — no
GitHub login needed while developing.

Other scripts:

```bash
npm run build    # type-check + production build (dist/)
npm run preview  # serve the production build locally
npm run lint     # ESLint
```

## Adding a new project via `/admin`

The easiest way — no code required:

1. Go to `/admin` on the live site (or `localhost:5173/admin` when running
   locally) and log in with GitHub.
2. Open the **Proyectos** collection → **+ Proyecto**.
3. Fill in the fields for at least the default locale (**es**) — title,
   status, short description, stack, and optionally an image, repo link,
   demo link, and extended body. Switch the locale tabs (ES/EN/SV) to fill
   in translations too; a field left empty in a locale falls back visually
   but it's best to fill title/description in all three.
4. Hit **Publish**. This commits straight to `main` and Netlify redeploys
   automatically — the change goes live in a minute or two.

### Adding a project by hand

Content lives under `content/projects/`, one Markdown file per
project **per locale**: `<slug>.es.md`, `<slug>.en.md`, `<slug>.sv.md`. Copy
an existing trio (e.g. `webshop-najs.*.md`) as a template — the front-matter
fields are documented in `public/admin/config.yml` under the `projects`
collection. There's no need to set a `date` field: it's computed at build
time from each file's git history (see `scripts/generate-content-dates.mjs`).

## Content model

- `content/projects/*.md` — one project per file per locale (front-matter +
  Markdown body for the extended description)
- `content/settings/general.<locale>.yml` — name, role, tagline, bio,
  skills, contact links
- Both are loaded at build time via `src/lib/content.ts`
  (`import.meta.glob`), so a content change needs a rebuild — which Netlify
  triggers automatically on every push/CMS commit to `main`

## Git workflow

- `main` — production; Netlify deploys from here
- `staging` — integration branch; work lands here first
- `feature/<name>` — one branch per change, created from `staging`, merged
  back into `staging` when ready, then `staging` → `main` via PR

## `/admin` authentication

Decap's plain `github` backend doesn't support PKCE, so login goes through
Netlify's own OAuth provider (Project configuration → Security → OAuth)
rather than a client-side-only flow. See `public/admin/config.yml` for the
backend config.

## More

Project roadmap and phase-by-phase notes: `docs/ROADMAP.md`.
