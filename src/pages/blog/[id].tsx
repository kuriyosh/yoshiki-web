import { Box, Typography } from "@mui/material"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { parseMarkdown, parserDirMarkdown } from "lib/markdownParser"
import { isBlog } from "lib/typeChecker"
import { blogContentPath } from "lib/folderPaths"
import { join } from "path"

type Props = {
  title: string
  html: string
}

const BlogPost: NextPage<Props> = ({ title, html }) => {
  return (
    <Box>
      <Typography
        variant="h1"
        color="primary"
        fontWeight="medium"
        my={2}
        sx={{
          fontFamily: `"Roboto Slab", "Times New Roman", serif`,
        }}
      >
        {title}
      </Typography>
      <article className="markdown-body">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Box>
  )
}

export default BlogPost

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await parserDirMarkdown(blogContentPath, isBlog)
  return {
    paths: blogs.map(v => ({ params: { id: v.id } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params?.id ?? ""
  const markdown = await parseMarkdown(join(blogContentPath, `${id}.md`))
  return {
    props: {
      title: markdown.data.title,
      html: markdown.content,
    },
  }
}
