import React, { FC } from "react"
import { graphql } from "gatsby"
import Layout from "components/Layout/Layout"

import pageStyles from "assets/jss/material-kit-react/pageStyles"

const BlogPost: FC<{}> = ({ data }) => {
  const post = data.markdownRemark
  const classes = pageStyles()

  return (
    <Layout>
      <div>
        <h1 className={classes.title}>{post.frontmatter.title}</h1>
        <article className="markdown-body">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </div>
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
