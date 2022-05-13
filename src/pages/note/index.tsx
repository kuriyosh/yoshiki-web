import { Box, Button, Typography } from "@mui/material"
import Link from "next/link"
import GridContainer from "components/GridContainer"
import GridItem from "components/GridItem"
import Card from "components/Card"
import CardBody from "components/CardBody"
import CardFooter from "components/CardFooter"
import { Note } from "types"
import { GetStaticProps, NextPage } from "next"
import { parserDirMarkdown } from "lib/markdownParser"
import { isNote } from "lib/typeChecker"
import dayjs from "dayjs"
import { notesContentPath } from "lib/folderPaths"

type Props = {
  notes: ({ id: string } & Note)[]
}

const NotePage: NextPage<Props> = ({ notes }) => {
  return (
    <>
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
            Note
          </Typography>
          <Typography variant="h6">
            勉強したことをカテゴリ別にまとめています。
          </Typography>
        </GridItem>

        {notes.map(note => (
          <GridItem xs={12} sm={6} md={6} key={note.id}>
            <Card>
              {note.image != undefined && (
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    borderTopLeftRadius: "calc(.25rem - 1px)",
                    borderTopRightRadius: "calc(.25rem - 1px)",
                  }}
                  src={note.image}
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
                  {note.title}
                </Typography>
                <Link href={`/note/${note.id}`}>
                  <Button color="primary" variant="contained">
                    READ
                  </Button>
                </Link>
              </CardBody>
              <CardFooter>
                {dayjs(note.updateDate).format("YYYY/MM/DD")}
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </GridContainer>
    </>
  )
}

export default NotePage

export const getStaticProps: GetStaticProps<Props> = async () => {
  const notes = await parserDirMarkdown(notesContentPath, isNote)
  return {
    props: {
      notes,
    },
  }
}
