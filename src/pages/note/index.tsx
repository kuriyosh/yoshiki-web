import React, { FC } from "react"

import Layout from "components/Layout/Layout"

import pageStyles from "assets/jss/material-kit-react/pageStyles"

const NotePage: FC<{}> = props => {
  const classes = pageStyles()
  const { ...rest } = props
  document.title = "Note - Yoshiki Web"
  return (
    <Layout>
      <div className={classes.pageTitleContainer}>
        <h1 className={classes.pageTitle}>Note</h1>
      </div>
      <div className={classes.main + " " + classes.mainRaised}>
        <div className={classes.container}>
          <h1>Comming Soon...</h1>
        </div>
      </div>
    </Layout>
  )
}

export default NotePage
