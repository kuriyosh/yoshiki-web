import { Box, IconButton, Typography } from "@mui/material"
import { GitHub, Web, Description } from "@mui/icons-material"
import GridContainer from "components/GridContainer"
import GridItem from "components/GridItem"
import Card from "components/Card"
import CardBody from "components/CardBody"
import CardFooter from "components/CardFooter"
import { App } from "types"
import { GetStaticProps, NextPage } from "next"
import { parserDirMarkdown } from "lib/markdownParser"
import { appContentPath } from "lib/folderPaths"
import { isApp } from "lib/typeChecker"
import dayjs from "dayjs"
import Image from "next/image"

type Props = {
  apps: ({ id: string; html: string } & App)[]
}

const AppPage: NextPage<Props> = ({ apps }) => {
  return (
    <GridContainer justifyContent="center">
      <GridItem xs={12} sm={12} md={12}>
        <Typography
          variant="h1"
          my={2}
          color="primary"
          fontWeight="700"
          sx={{
            fontFamily: `"Roboto Slab", "Times New Roman", serif`,
          }}
        >
          App
        </Typography>
      </GridItem>

      {apps.map(app => (
        <GridItem xs={12} sm={6} md={6} key={app.id}>
          <Card>
            {app.image != undefined && (
              <Image
                alt={app.title}
                src={app.image}
                width={600}
                height={300}
                objectFit="cover"
                style={{
                  width: "100%",
                  borderTopLeftRadius: "calc(.25rem - 1px)",
                  borderTopRightRadius: "calc(.25rem - 1px)",
                }}
              />
            )}
            <CardBody>
              <Typography
                variant="h5"
                color="primary"
                sx={{
                  color: "#3C4858",
                  margin: "1.75rem 0 0.875rem",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontFamily: `"Roboto Slab", "Times New Roman", serif`,
                  marginTop: ".625rem",
                }}
              >
                {app.title}
              </Typography>
              <div dangerouslySetInnerHTML={{ __html: app.html ?? "" }} />

              {app.githubUrl != undefined && (
                <IconButton>
                  <a href={app.githubUrl}>
                    <GitHub sx={{ color: "initial" }} />
                  </a>
                </IconButton>
              )}

              {app.appUrl != undefined && (
                <IconButton>
                  <a href={app.appUrl}>
                    <Web sx={{ color: "initial" }} />
                  </a>
                </IconButton>
              )}

              {app.blogUrl != undefined && (
                <IconButton>
                  <a href={app.blogUrl}>
                    <Description />
                  </a>
                </IconButton>
              )}
            </CardBody>
            <CardFooter>{dayjs(app.date).format("YYYY/MM/DD")}</CardFooter>
          </Card>
        </GridItem>
      ))}
    </GridContainer>
  )
}

export default AppPage

export const getStaticProps: GetStaticProps<Props> = async () => {
  const apps = await parserDirMarkdown(appContentPath, isApp)
  return {
    props: {
      apps,
    },
  }
}
