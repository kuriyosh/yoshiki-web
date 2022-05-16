import Link from "next/link"
import GridContainer from "components/GridContainer"
import GridItem from "components/GridItem"
import Card from "components/Card"
import CardBody from "components/CardBody"
import CardFooter from "components/CardFooter"
import { Box, Button, Typography } from "@mui/material"
import { Blog } from "types"
import { GetStaticProps, NextPage } from "next"
import { parserDirMarkdown } from "lib/markdownParser"
import { isBlog } from "lib/typeChecker"
import { blogContentPath } from "lib/folderPaths"
import dayjs from "dayjs"
import { Meta } from "components/Meta"
import { SITE_TITLE, SITE_URL } from "../../constants"

type Props = {
  blogs: ({ id: string } & Blog)[]
}

const BlogPage: NextPage<Props> = ({ blogs }) => {
  return (
    <>
      <Meta title={`Blog - ${SITE_TITLE}`} url={`${SITE_URL}/blog`} />
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={12}>
          <Typography
            fontWeight="medium"
            variant="h1"
            color="primary"
            my={2}
            sx={{
              fontFamily: `"Roboto Slab", "Times New Roman", serif`,
            }}
          >
            Blog
          </Typography>
        </GridItem>

        {blogs.map(blog => (
          <GridItem xs={12} sm={6} md={6} key={blog.id}>
            <Card>
              {blog.image != undefined && (
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    borderTopLeftRadius: "calc(.25rem - 1px)",
                    borderTopRightRadius: "calc(.25rem - 1px)",
                  }}
                  src={blog.image}
                  alt="Card-img-cap"
                />
              )}
              <CardBody>
                <Typography
                  color="primary"
                  my={1}
                  variant="h5"
                  fontWeight="medium"
                  sx={{
                    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
                  }}
                >
                  {blog.title}
                </Typography>
                <Link href={`/blog/${blog.id}`}>
                  <Button color="primary" variant="contained">
                    READ
                  </Button>
                </Link>
              </CardBody>
              <CardFooter>{dayjs(blog.date).format("YYYY/MM/DD")}</CardFooter>
            </Card>
          </GridItem>
        ))}
      </GridContainer>
    </>
  )
}

export default BlogPage

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogs = await parserDirMarkdown(blogContentPath, isBlog)
  return {
    props: {
      blogs: blogs.sort((a, b) => (a.date < b.date ? 1 : -1)),
    },
  }
}
