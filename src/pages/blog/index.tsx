import React, { FC } from "react"

import Layout from "components/Layout/Layout"

import pageStyles from "assets/jss/material-kit-react/pageStyles"
import { Link, graphql, PageProps } from "gatsby"

import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"
import Card from "components/Card/Card"
import CardBody from "components/Card/CardBody"
import CardFooter from "components/Card/CardFooter"
import Button from "components/CustomButtons/Button"

import profile from "assets/img/prof.jpg"

const BlogPage: FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const classes = pageStyles()
  console.log(data)

  return (
    <Layout>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <h1 className={classes.title}>Blog</h1>
        </GridItem>

        {posts &&
          posts.map(({ node: post }) => (
            <GridItem xs={6} sm={6} md={6}>
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
                  <p>{post.excerpt}</p>
                  <Button color="primary">
                    <Link to={post.fields.slug}>READ</Link>
                  </Button>
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
          fields {
            slug
          }
        }
      }
    }
  }
`
