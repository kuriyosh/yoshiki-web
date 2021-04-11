import React, { FC } from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingRight: "15px",
      paddingLeft: "15px",
      marginRight: "auto",
      marginLeft: "auto",
      width: "100%",
      "@media (min-width: 576px)": {
        maxWidth: "540px",
      },
      "@media (min-width: 768px)": {
        maxWidth: "720px",
      },
      "@media (min-width: 992px)": {
        maxWidth: "960px",
      },
      "@media (min-width: 1200px)": {
        maxWidth: "1140px",
      },
    },
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
  })
)

const MainContainer: FC<{}> = props => {
  const classes = useStyles()
  return (
    <div className={classes.main + " " + classes.mainRaised}>
      <div className={classes.container}>{props.children}</div>
    </div>
  )
}

export default MainContainer
