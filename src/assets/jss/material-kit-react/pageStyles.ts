import { container, title } from "assets/jss/material-kit-react"

import imagesStyle from "assets/jss/material-kit-react/imagesStyles"
import { makeStyles, createStyles } from "@material-ui/core/styles"

import { cardTitle } from "assets/jss/material-kit-react"

const pageStyles = makeStyles(
  createStyles({
    container,
    cardTitle,
    pageTitleContainer: {
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto",
      zIndex: 2,
    },
    description: {
      margin: "1.071rem auto 0",
      maxWidth: "600px",
      color: "#999",
      textAlign: "center",
    },
    name: {
      marginTop: "-80px",
    },
    ...imagesStyle,
    main: {
      background: "#FFFFFF",
      position: "relative",
      zIndex: 3,
      paddingTop: "30px",
      paddingBottom: "60px",
    },
    mainRaised: {
      margin: "-60px 30px 0px",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },
    title: {
      ...title,
      display: "inline-block",
      position: "relative",
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none",
    },
  })
)

export default pageStyles
