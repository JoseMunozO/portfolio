#!/usr/bin/env node
// Calcula la fecha de "última actualización" de cada proyecto a partir del
// último commit de git que tocó su archivo, en vez de depender de un campo
// de fecha editado a mano. Se corre antes de `dev`/`build` (ver package.json)
// y su salida (content/generated/dates.json) no se versiona — se regenera
// en cada build.
import { execSync } from 'node:child_process'
import { mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const projectsDir = 'content/projects'
const outDir = 'content/generated'
const outFile = join(outDir, 'dates.json')

function lastCommitDate(relPath) {
  try {
    const out = execSync(`git log -1 --format=%aI -- "${relPath}"`, {
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
    return out || null
  } catch {
    return null
  }
}

const files = readdirSync(projectsDir).filter((f) => f.endsWith('.md'))
const dates = {}

for (const file of files) {
  const relPath = join(projectsDir, file)
  const key = `/${relPath}`
  dates[key] = lastCommitDate(relPath) ?? statSync(relPath).mtime.toISOString()
}

mkdirSync(outDir, { recursive: true })
writeFileSync(outFile, `${JSON.stringify(dates, null, 2)}\n`)
console.log(`[content-dates] ${Object.keys(dates).length} archivo(s) -> ${outFile}`)
