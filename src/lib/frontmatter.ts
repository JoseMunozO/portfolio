import { load } from 'js-yaml'

const FRONTMATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/

export function parseFrontmatter<T>(raw: string): { data: Partial<T>; content: string } {
  const match = raw.match(FRONTMATTER_PATTERN)
  if (!match) {
    return { data: {}, content: raw.trim() }
  }
  const [, frontmatter, content] = match
  const data = (load(frontmatter) ?? {}) as Partial<T>
  return { data, content: content.trim() }
}
