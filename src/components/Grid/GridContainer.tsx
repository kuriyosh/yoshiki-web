import React, { FC } from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Grid, GridProps } from "@mui/material"

const GridContainer: FC<GridProps> = props => {
  const { children, ...rest } = props

  return (
    <Grid
      container
      {...rest}
      sx={{ marginRight: "-15px", marginLeft: "-15px", width: "auto" }}
    >
      {children}
    </Grid>
  )
}

export default GridContainer
