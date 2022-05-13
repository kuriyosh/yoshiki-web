import React, { FC } from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Grid, GridProps } from "@mui/material"

const GridItem: FC<GridProps> = props => {
  const { children, className, ...rest } = props

  return (
    <Grid
      item
      {...rest}
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "1px",
        paddingRight: "15px",
        paddingLeft: "15px",
        flexBasis: "auto",
        marginBottom: "5vh",
        textAlign: "center",
      }}
    >
      {children}
    </Grid>
  )
}

export default GridItem
