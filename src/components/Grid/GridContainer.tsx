import React, { FC } from "react"

import classNames from "classnames"

import { makeStyles, createStyles } from "@material-ui/core/styles"

import Grid, { GridProps } from "@material-ui/core/Grid"

const gridContainerStyles = makeStyles(
  createStyles({
    grid: {
      marginRight: "-15px",
      marginLeft: "-15px",
      width: "auto",
    },
  })
)

type Props = {
  className?: string
} & GridProps

const GridContainer: FC<Props> = props => {
  const classes = gridContainerStyles()

  const { children, className, ...rest } = props

  const gridContainerClasses = classNames({
    [classes.grid]: true,
    ...(className && { [className]: className }),
  })

  return (
    <Grid container {...rest} className={gridContainerClasses}>
      {children}
    </Grid>
  )
}

export default GridContainer
