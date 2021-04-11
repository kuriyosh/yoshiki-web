import React, { FC } from "react"

import classNames from "classnames"

import { makeStyles, createStyles } from "@material-ui/core/styles"
import Grid, { GridProps } from "@material-ui/core/Grid"

const gridItemStyles = makeStyles(
  createStyles({
    grid: {
      position: "relative",
      width: "100%",
      minHeight: "1px",
      paddingRight: "15px",
      paddingLeft: "15px",
      flexBasis: "auto",
      marginBottom: "5vh",
      textAlign: "center",
    },
  })
)

type Props = {
  className?: string
} & GridProps

const GridItem: FC<Props> = props => {
  const classes = gridItemStyles()
  const { children, className, ...rest } = props

  const gridItemClasses = classNames({
    [classes.grid]: true,
    ...(className && { [className]: className }),
  })

  return (
    <Grid item {...rest} className={gridItemClasses}>
      {children}
    </Grid>
  )
}

export default GridItem
