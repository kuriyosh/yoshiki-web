import React, { FC } from "react"

import { IconButton } from "@material-ui/core"
import { GitHub, Web } from "@material-ui/icons"

import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"
import Card from "components/Card/Card"
import CardBody from "components/Card/CardBody"
import CardFooter from "components/Card/CardFooter"
import Layout from "components/Layout/Layout"

import pageStyles from "assets/jss/material-kit-react/pageStyles"
import { graphql, PageProps } from "gatsby"

const AppPage: FC<PageProps<GatsbyTypes.AppIndexQuery>> = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const classes = pageStyles()
  console.log(data)

  return (
    <Layout title="App">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h1 className={classes.title}>App</h1>
        </GridItem>

        {posts &&
          posts.map(({ node: post }) => (
            <GridItem xs={12} sm={6} md={6}>
              <Card>
                {post.frontmatter?.image != undefined && (
                  <img
                    className={classes.imgCardTop}
                    src={post.frontmatter.image}
                    alt="Card-img-cap"
                  />
                )}
                <CardBody>
                  <h3 className={classes.cardTitle}>
                    {post.frontmatter && post.frontmatter.title}
                  </h3>
                  <div dangerouslySetInnerHTML={{ __html: post.html }} />

                  {post.frontmatter?.githubUrl != undefined && (
                    <IconButton>
                      <a
                        href={post.frontmatter.githubUrl}
                        className={classes.iconLink}
                      >
                        <GitHub />
                      </a>
                    </IconButton>
                  )}

                  {post.frontmatter?.appUrl != undefined && (
                    <IconButton>
                      <a
                        href={post.frontmatter.appUrl}
                        className={classes.iconLink}
                      >
                        <Web />
                      </a>
                    </IconButton>
                  )}
                </CardBody>
                <CardFooter>
                  {post.frontmatter && post.frontmatter.date}
                </CardFooter>
              </Card>
            </GridItem>
          ))}
      </GridContainer>
    </Layout>
  )
}

export default AppPage

export const query = graphql`
  query AppIndex {
    allMarkdownRemark(filter: { frontmatter: { template: { eq: "app" } } }) {
      edges {
        node {
          id
          html
          frontmatter {
            date
            image
            title
            appUrl
            githubUrl
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
