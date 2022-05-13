import React, { FC } from "react"
import { graphql } from "gatsby"
import Layout from "components/Layout/Layout"
import { Box, Typography } from "@mui/material"

// TODO: remove any type
const BlogPost: FC<{ data: any }> = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout title={post.frontmatter.title}>
      <Box>
        <Typography
          variant="h1"
          sx={{
            color: "#3C4858",
            margin: "1.75rem 0 0.875rem",
            textDecoration: "none",
            fontWeight: 700,
            fontFamily: `"Roboto Slab", "Times New Roman", serif`,
            display: "inline-block",
            position: "relative",
            marginTop: "30px",
            minHeight: "32px",
          }}
        >
          {post.frontmatter.title}
        </Typography>
        <article className="markdown-body">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
      }
    }
  }
`

export default BlogPost
