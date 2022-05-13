import React, { FC } from "react"
import { Box, IconButton, Typography } from "@mui/material"
import { GitHub, Web, Description } from "@mui/icons-material"
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"
import Card from "components/Card/Card"
import CardBody from "components/Card/CardBody"
import CardFooter from "components/Card/CardFooter"
import Layout from "components/Layout/Layout"
import { graphql, PageProps } from "gatsby"

const AppPage: FC<PageProps<GatsbyTypes.AppIndexQuery>> = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout title="App">
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={12}>
          <Typography
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
            App
          </Typography>
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
                    variant="h3"
                    sx={{
                      color: "#3C4858",
                      margin: "1.75rem 0 0.875rem",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontFamily: `"Roboto Slab", "Times New Roman", serif`,
                      marginTop: ".625rem",
                    }}
                  >
                    {post.frontmatter && post.frontmatter.title}
                  </Typography>
                  <div dangerouslySetInnerHTML={{ __html: post.html ?? "" }} />

                  {post.frontmatter?.githubUrl != undefined && (
                    <IconButton>
                      <a href={post.frontmatter.githubUrl}>
                        <GitHub sx={{ color: "initial" }} />
                      </a>
                    </IconButton>
                  )}

                  {post.frontmatter?.appUrl != undefined && (
                    <IconButton>
                      <a href={post.frontmatter.appUrl}>
                        <Web sx={{ color: "initial" }} />
                      </a>
                    </IconButton>
                  )}

                  {post.frontmatter?.blogUrl != undefined && (
                    <IconButton>
                      <a href={post.frontmatter.blogUrl}>
                        <Description />
                      </a>
                    </IconButton>
                  )}
                </CardBody>
                <CardFooter>
                  {post.frontmatter?.date && post.frontmatter.date}
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
            date(formatString: "MMMM DD, YYYY")
            image
            title
            appUrl
            githubUrl
            blogUrl
          }
        }
      }
    }
  }
`
