import { container, primaryColor } from "assets/jss/material-kit-react"

import { makeStyles, createStyles } from "@material-ui/core/styles"

const footerStyle = makeStyles(
  createStyles({
    block: {
      color: "inherit",
      padding: "0.9375rem",
      fontWeight: 500,
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "3px",
      textDecoration: "none",
      position: "relative",
      display: "block",
    },
    left: {
      float: "left", // important
      display: "block",
    },
    right: {
      padding: "15px 0",
      margin: "0",
      float: "right", // important
    },
    footer: {
      padding: "0.9375rem 0",
      textAlign: "center",
      display: "flex",
      zIndex: 2,
      position: "relative",
    },
    a: {
      color: primaryColor,
      textDecoration: "none",
      backgroundColor: "transparent",
    },
    footerWhiteFont: {
      "&,&:hover,&:focus": {
        color: "#FFFFFF",
      },
    },
    container,
  })
)

export default footerStyle
