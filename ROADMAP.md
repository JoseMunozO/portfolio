# Roadmap — Portfolio

Sitio estático (Vite + React + TypeScript) desplegado en Netlify, con el
contenido (proyectos) editable desde un panel `/admin` (Decap CMS) sin tocar
código. Cada proyecto tiene un **estado**: `listo`, `en-progreso`, `futuro`.

## Fase 0 — Setup inicial
- [x] `.gitignore` (node_modules, dist, .idea, .DS_Store, *.local)
- [x] GitHub CLI autenticado (`gh auth status`)
- [ ] `git init` + primer commit
- [ ] Crear repositorio remoto (`gh repo create`) y push
- [ ] Conectar el repo a Netlify (nuevo site desde Git)

## Fase 1 — Arquitectura de contenido (Decap CMS)
- [ ] Definir esquema de "proyecto": título, descripción, stack, estado
      (listo / en-progreso / futuro), imagen, link de repo, link de demo
- [ ] Carpeta `content/projects/*.md` como fuente de verdad (un archivo por
      proyecto, front-matter + descripción)
- [ ] Instalar Decap CMS (`public/admin/index.html` + `config.yml`)
- [ ] Autenticación: Netlify Identity + Git Gateway (login para editar)
- [ ] Probar el flujo completo: crear/editar/borrar proyecto desde `/admin`

## Fase 2 — Desarrollo UI
- [ ] Layout base: Header/Nav, Hero, Sección de proyectos, Footer
- [ ] `ProjectCard` con badge visual de estado
- [ ] Filtro/tabs: Todos / Listos / En progreso / Futuros
- [ ] Sección "Sobre mí" / Skills
- [ ] Sección de contacto (links directos, sin backend)

## Fase 3 — Estilos y responsive
- [ ] Sistema de diseño (colores, tipografía, spacing)
- [ ] Mobile-first + breakpoints
- [ ] Modo claro/oscuro (opcional)

## Fase 4 — Integración de contenido
- [ ] Cargar proyectos desde `content/` en build-time
- [ ] Orden y agrupado por estado

## Fase 5 — Testing
- [ ] Pruebas manuales en distintos viewports
- [ ] Validar ciclo completo de Decap CMS → commit → redeploy
- [ ] Auditoría Lighthouse (performance, accesibilidad, SEO)

## Fase 6 — Debugging y QA
- [ ] Revisar errores de build/consola
- [ ] Validar links rotos e imágenes faltantes
- [ ] Probar en distintos navegadores

## Fase 7 — Deploy a Netlify
- [ ] `netlify.toml` (build command, publish dir, redirects SPA)
- [ ] Activar Netlify Identity + Git Gateway en el site
- [ ] Dominio (subdominio Netlify o dominio propio)

## Fase 8 — CI/CD y mantenimiento
- [ ] Auto-deploy en cada push a `main` (Netlify por defecto)
- [ ] Documentar en README cómo añadir un proyecto nuevo vía `/admin`
- [ ] (Opcional) GitHub Action de lint/build en PRs

## Fase 9 — Post-lanzamiento
- [ ] SEO básico (meta tags, Open Graph, sitemap)
- [ ] Analytics (Netlify Analytics o Plausible)
- [ ] Revisión periódica de dependencias
