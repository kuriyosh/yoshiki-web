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

const NotePage: FC<PageProps<GatsbyTypes.NoteIndexQuery>> = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const classes = pageStyles()
  return (
    <Layout>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h1 className={classes.title}>Note</h1>
          <h3>勉強したことをカテゴリ別にまとめています。</h3>
        </GridItem>

        {posts &&
          posts.map(({ node: post }) => (
            <GridItem xs={12} sm={6} md={4}>
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
                  {post.frontmatter && post.frontmatter.update_date}
                </CardFooter>
              </Card>
            </GridItem>
          ))}
      </GridContainer>
    </Layout>
  )
}

export default NotePage

export const query = graphql`
  query NoteIndex {
    allMarkdownRemark(filter: { frontmatter: { template: { eq: "note" } } }) {
      edges {
        node {
          id
          frontmatter {
            date
            image
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
