import fs from "fs"
import path from "path"
import matter from "gray-matter"
import dayjs from "dayjs"
import { remark } from "remark"
import html from "remark-html"
import remarkPrism from "remark-prism"

export async function parserDirMarkdown<T>(
  dirPath: string,
  typeChecker: (v: any) => v is T
): Promise<({ id: string; html: string } & T)[]> {
  const fileNames = fs.readdirSync(dirPath)
  return Promise.all(
    fileNames.map(async fileName => {
      const id = fileName.replace(/\.md$/, "")
      const fullPath = path.join(dirPath, fileName)
      const { data, content } = await parseMarkdown(fullPath)
      if (!typeChecker(data)) throw new Error("invalid type")

      // Date object to string for staticProps serialize
      const serialized = Object.fromEntries(
        Object.entries(data).map(([key, value]) => {
          return [
            key,
            value instanceof Date
              ? dayjs(value).format("YYYY/MM/DDTHH:mm:ss")
              : value,
          ]
        })
      )

      return {
        id,
        html: content,
        // TODO: 型は間違いないが修正したい
        ...(serialized as T),
      }
    })
  )
}

export async function parseMarkdown(filePath: string) {
  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter({ content: fileContents })
  const parsedContent = await remark()
    .use(html, { sanitize: false })
    .use(remarkPrism, { plugins: ["line-numbers"] })
    .process(content)
  return {
    data,
    content: parsedContent.toString(),
  }
}
