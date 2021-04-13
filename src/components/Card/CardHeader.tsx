import React, { FC } from "react"

import { makeStyles, createStyles } from "@material-ui/core/styles"

import CardHeader from "@material-ui/core/CardHeader"
import { CardHeaderProps } from "material-ui"

const tableCellStyles = makeStyles(
  createStyles({
    title: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      color: "#3c4858",
      fontWeight: 400,
    },
  })
)

const CustomCardHeader: FC<CardHeaderProps> = props => {
  const classes = tableCellStyles()
  const { children, ...rest } = props
  return (
    <CardHeader {...rest} className={classes.title}>
      {children}
    </CardHeader>
  )
}

export default CustomCardHeader
