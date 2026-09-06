# Portfolio — contexto para Claude Code

Sitio estático (Vite + React + TypeScript + Tailwind CSS v4) desplegado en
Netlify. El contenido (proyectos, bio, contacto) se edita desde `/admin`
(Decap CMS) sin tocar código. Trilingüe: `es` (default) / `en` / `sv`.

## Flujo de trabajo (Git) — importante

- **`main`: nunca mergear aquí hasta que el proyecto esté listo para lanzar.**
- `staging`: rama de integración, todo el trabajo converge aquí primero.
- `feature/<nombre>` o `chore/<nombre>`: una rama por cambio, creada desde
  `staging`. Flujo: crear rama → commit → `git push -u origin <rama>` →
  `gh pr create --base staging --head <rama>` → `gh pr merge <n> --merge --delete-branch`.
- Este archivo (`CLAUDE.md`) vive solo en la rama `chore/claude-config`
  (gitignored en el resto) — nunca debe llegar a `staging` ni `main`.

## Comandos

- `npm run dev` — servidor de desarrollo (Vite)
- `npm run cms` — proxy local de Decap CMS (`decap-server`), correr junto a `dev`
  para editar `/admin` en `localhost` sin necesitar login de GitHub
- `npm run build` — `tsc -b && vite build`
- `npm run lint` — ESLint

## Arquitectura de contenido

- `content/projects/<slug>.<locale>.md`: un proyecto por slug, un archivo por
  idioma (`es`/`en`/`sv`). Frontmatter: `title`, `status`
  (`listo`/`en-progreso`/`futuro`), `description`, `stack`, `image`,
  `repoUrl`, `demoUrl`, `featured`, `date`. Body = descripción larga (markdown).
- `content/settings/general.<locale>.yml`: datos del sitio (`name`, `role`,
  `tagline`, `bio`, `skills`, `contactLinks`).
- `public/admin/config.yml`: config de Decap CMS. Usa i18n nativo
  (`structure: multiple_files`) — por eso los archivos llevan sufijo de locale.
  `backend.branch` apunta a `staging` mientras no haya deploy a producción.
- `src/lib/content.ts`: carga el contenido en build-time vía
  `import.meta.glob` + parseo de frontmatter/YAML (`src/lib/frontmatter.ts`,
  `js-yaml`). No hay backend/BD — todo es git + build-time.
- `src/i18n/`: contexto de idioma (`LocaleContext.tsx`, `useLocale.ts`) y
  diccionario de textos de interfaz (`translations.ts`) — separado del
  contenido editable (que vive en `content/`).

## Estilos

Tailwind CSS v4 (`@tailwindcss/vite`, sin `tailwind.config.js` clásico).
Paleta: violeta (`violet-*`) como acento, `neutral-*` para texto/bordes,
`dark:` para modo oscuro (automático vía `prefers-color-scheme`).

## Ver progreso / roadmap

El roadmap completo con fases y checklist vive en `docs/ROADMAP.md`
(gitignored, solo local — no se sincroniza vía git salvo copia manual).
