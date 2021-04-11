import React, { FC } from "react"

import Layout from "components/Layout/Layout"

import pageStyles from "assets/jss/material-kit-react/pageStyles"

const BlogPage: FC<{}> = props => {
  const classes = pageStyles()
  const { ...rest } = props
  document.title = "Blog - Yoshiki Web"
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
