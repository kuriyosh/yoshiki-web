import React, { FC } from "react"
import { Box, Button, Typography } from "@mui/material"
import Layout from "components/Layout/Layout"
import { Link, graphql, PageProps } from "gatsby"
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"
import Card from "components/Card/Card"
import CardBody from "components/Card/CardBody"
import CardFooter from "components/Card/CardFooter"

const NotePage: FC<PageProps<GatsbyTypes.NoteIndexQuery>> = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout title="Note">
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={12}>
          <Typography
            sx={{
              marginTop: ".625rem",
              color: "#3C4858",
              margin: "1.75rem 0 0.875rem",
              textDecoration: "none",
              fontWeight: 700,
              fontFamily: `"Roboto Slab", "Times New Roman", serif`,
            }}
          >
            Note
          </Typography>
          <h3>勉強したことをカテゴリ別にまとめています。</h3>
        </GridItem>

        {posts &&
          posts.map(({ node: post }) => (
            <GridItem xs={12} sm={6} md={6}>
              <Card>
                {post.frontmatter?.image != undefined && (
                  <Box
                    component="img"
                    sx={{
                      width: "100%",
                      borderTopLeftRadius: "calc(.25rem - 1px)",
                      borderTopRightRadius: "calc(.25rem - 1px)",
                    }}
                    src={post.frontmatter.image}
                    alt="Card-img-cap"
                  />
                )}
                <CardBody>
                  <Typography
                    sx={{
                      marginTop: ".625rem",
                      color: "#3C4858",
                      margin: "1.75rem 0 0.875rem",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontFamily: `"Roboto Slab", "Times New Roman", serif`,
                    }}
                  >
                    {post.frontmatter && post.frontmatter.title}
                  </Typography>
                  <Link to={post.fields?.slug ?? "/"}>
                    <Button color="primary">READ</Button>
                  </Link>
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
