import { App, Blog, Note } from "types"
// TODO: 各 typeChecker の実装が雑

export function isNote(v: any): v is Note {
  return "title" in v && "updateDate" in v && "template" in v && "image" in v
}

export function isBlog(v: any): v is Blog {
  return (
    "title" in v &&
    "date" in v &&
    "template" in v &&
    "image" in v &&
    "tags" in v
  )
}

export function isApp(v: any): v is App {
  return "title" in v && "date" in v && "template" in v && "image" in v
}
