import { join } from "node:path"
export const notesContentPath = join(
  process.cwd(),
  "src",
  "pages",
  "note",
  "contents"
)

export const blogContentPath = join(
  process.cwd(),
  "src",
  "pages",
  "blog",
  "contents"
)

export const appContentPath = join(
  process.cwd(),
  "src",
  "pages",
  "app",
  "contents"
)
