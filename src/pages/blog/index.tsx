import React, { FC } from "react"

import Layout from "components/Layout/Layout"

import pageStyles from "assets/jss/material-kit-react/pageStyles"
import { graphql, PageProps } from "gatsby"

const BlogPage: FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({ data }) => {
  const classes = pageStyles()
  console.log(data)

  return (
    <Layout>
      <div className={classes.pageTitleContainer}>
        <h1 className={classes.pageTitle}>Blog</h1>
      </div>
      <div className={classes.main + " " + classes.mainRaised}>
        <div className={classes.container}>
          <h1>Comming Soon...</h1>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query BlogIndex {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            image
            path
            tags
            title
          }
          excerpt
        }
      }
    }
  }
`
