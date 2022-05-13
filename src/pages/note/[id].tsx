import React, { FC } from "react"
import { Box, Typography } from "@mui/material"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { parserDirMarkdown, parseMarkdown } from "lib/markdownParser"
import { join } from "node:path"
import { isNote } from "lib/typeChecker"
import { notesContentPath } from "lib/folderPaths"

type Props = {
  title: string
  html: string
}

const NotePost: NextPage<Props> = ({ title, html }) => {
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

export default NotePost

export const getStaticPaths: GetStaticPaths = async () => {
  const notes = await parserDirMarkdown(notesContentPath, isNote)
  return {
    paths: notes.map(v => ({ params: { id: v.id } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params?.id ?? ""
  const markdown = await parseMarkdown(join(notesContentPath, `${id}.md`))
  return {
    props: {
      title: markdown.data.title,
      html: markdown.content,
    },
  }
}
