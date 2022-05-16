import { Box, Typography } from "@mui/material"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { parseMarkdown, parserDirMarkdown } from "lib/markdownParser"
import { isBlog } from "lib/typeChecker"
import { blogContentPath } from "lib/folderPaths"
import { join } from "path"
import { SITE_TITLE, SITE_URL } from "../../constants"
import { Meta } from "components/Meta"

type Props = {
  id: string
  image: string
  title: string
  html: string
}

const BlogPost: NextPage<Props> = ({ id, title, html, image }) => {
  return (
    <>
      <Meta
        title={`${title} - ${SITE_TITLE}`}
        image={`${SITE_URL}/${image}`}
        url={`${SITE_URL}/blog/${id}`}
      />
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
    </>
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
  const stringifyId = Array.isArray(id) ? id[0] : id
  const markdown = await parseMarkdown(
    join(blogContentPath, `${stringifyId}.md`)
  )
  return {
    props: {
      id: stringifyId,
      image: markdown.data.image,
      title: markdown.data.title,
      html: markdown.content,
    },
  }
}
