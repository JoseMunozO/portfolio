# Roadmap — Portfolio

Sitio estático (Vite + React + TypeScript) desplegado en Netlify, con el
contenido (proyectos) editable desde un panel `/admin` (Decap CMS) sin tocar
código. Cada proyecto tiene un **estado**: `listo`, `en-progreso`, `futuro`.
El sitio es trilingüe: **es** (default) / **en** / **sv**.

## Flujo de trabajo (Git)
- `main`: rama de producción. **No se mergea nada aquí hasta que el proyecto
  esté listo para lanzar.**
- `staging`: rama de integración. Todo el trabajo converge aquí primero
  (y, más adelante, es lo que Netlify despliega como preview/staging site).
- `feature/<nombre>`: una rama por cambio o funcionalidad nueva, creada desde
  `staging`, mergeada de vuelta a `staging` cuando está lista.
- El backend de Decap CMS (`public/admin/config.yml`) apunta a `branch: staging`
  mientras el proyecto no esté en producción.

## Fase 0 — Setup inicial
- [x] `.gitignore` (node_modules, dist, .idea, .DS_Store, *.local)
- [x] GitHub CLI autenticado (`gh auth status`)
- [x] `git init` + primer commit
- [x] Crear repositorio remoto (`gh repo create`) y push
- [x] Ramas `staging` y `feature/*` (ver "Flujo de trabajo" arriba)
- [x] Conectar el repo a Netlify (site `joseporfolio`, apunta a `main`)

## Fase 1 — Arquitectura de contenido (Decap CMS)
- [x] Definir esquema de "proyecto": título, descripción, stack, estado
      (listo / en-progreso / futuro), imagen, link de repo, link de demo
- [x] Carpeta `content/projects/*.md` como fuente de verdad (un archivo por
      proyecto, front-matter + descripción) — con un proyecto de ejemplo
- [x] Instalar Decap CMS (`public/admin/index.html` + `config.yml`)
- [x] Backend local para desarrollo: `npm run cms` (decap-server) + `npm run dev`,
      visitar `/admin` — edita sin login mientras no hay deploy
- [x] Autenticación en producción: GitHub OAuth App + OAuth provider de
      Netlify (el backend `github` de Decap no soporta PKCE — ver Fase 7)
- [x] Verificar visualmente en navegador que `/admin` carga bien
- [x] Probar el flujo completo: crear/borrar proyecto desde `/admin` en
      producción (commits reales en `main`: crear b0ef6f3, borrar 5dfede9)

## Fase 2 — Desarrollo UI
- [x] Layout base: Header/Nav, Hero, Sección de proyectos, Footer
- [x] `ProjectCard` con badge visual de estado
- [x] Filtro/tabs: Todos / Listos / En progreso / Futuros
- [x] Sección "Sobre mí" / Skills
- [x] Sección de contacto (links directos, sin backend)
- [x] Internacionalización (es/en/sv): `LocaleProvider` + diccionario de UI
      (`src/i18n/`) + selector de idioma en el header
- [x] Confirmación visual en navegador real (sitio + selector de idioma)

## Fase 3 — Estilos y responsive
- [x] Migrado a Tailwind CSS v4 (`@tailwindcss/vite`, sin config classic) —
      reemplaza el CSS a mano; paleta violeta/neutral, `dark:` para modo oscuro
- [x] Mobile-first + breakpoints (header, grid de proyectos, hero)
- [x] Modo claro/oscuro (`dark:` vía `prefers-color-scheme`, comportamiento
      por defecto de Tailwind)

## Fase 4 — Integración de contenido
- [x] Cargar proyectos y configuración del sitio desde `content/` en
      build-time, por idioma (`src/lib/content.ts`, `import.meta.glob`)
- [x] Orden (por fecha) y filtrado por estado
- [x] Modelo de contenido con i18n nativo de Decap (`multiple_files`:
      `slug.<locale>.md`, `general.<locale>.yml`)

## Fase 5 — Testing
- [x] Pruebas en distintos viewports — desktop en Fase 6 (Chrome + Safari);
      mobile vía emulación de Lighthouse (412×823): layout de una columna,
      tags con wrap, sin overflow horizontal. Falta probar en un dispositivo
      físico real
- [x] Validar ciclo completo de Decap CMS → commit → redeploy — hecho en
      Fase 1 (crear/borrar proyecto en producción, commits b0ef6f3/5dfede9)
- [x] Auditoría Lighthouse (performance, accesibilidad, SEO) — 100/100/100/100
      tras corregir contraste de badges, meta description/title y robots.txt

## Fase 6 — Debugging y QA
- [x] Revisar errores de build/consola — build y `npm run lint` limpios;
      sin errores/warnings en consola (ES/EN/SV) en producción
- [x] Validar links rotos e imágenes faltantes — 2 repos privados
      (candlepaw-api, cv-jose) daban 404 a visitantes; se hicieron públicos
      tras revisar que no tuvieran secretos. Resto de links (7 repos, 4
      demos, LinkedIn/GitHub/CV) y robots.txt en 200. Sin imágenes
      configuradas todavía (campo opcional, ningún proyecto lo usa aún)
- [x] Probar en distintos navegadores — verificado en Chrome (automatizado)
      y Safari macOS (manual, por el usuario): layout, modo claro/oscuro,
      selector de idioma y links, todo bien. Sin probar aún en Firefox ni
      en un navegador móvil real

## Fase 7 — Deploy a Netlify
- [x] `netlify.toml` (build command, publish dir; no hace falta redirect SPA,
      el sitio no usa client-side routing)
- [x] Crear GitHub OAuth App (callback URL = `https://api.netlify.com/auth/done`)
      e instalar el provider en Netlify (Project configuration → Security →
      OAuth) con su Client ID y secret — no hace falta `app_id` en config.yml
- [ ] Dominio (subdominio Netlify o dominio propio)

## Fase 8 — CI/CD y mantenimiento
- [x] Auto-deploy en cada push a `main` (Netlify por defecto) — confirmado
      repetidas veces durante la sesión (PRs #9-#15, commits del CMS)
- [x] Documentar en README cómo añadir un proyecto nuevo vía `/admin`
- [ ] (Opcional) GitHub Action de lint/build en PRs

## Fase 9 — Post-lanzamiento
- [ ] SEO básico (meta tags, Open Graph, sitemap)
- [ ] Analytics (Netlify Analytics o Plausible)
- [ ] Revisión periódica de dependencias
