import React, { FC } from "react"
import Card, { CardProps } from "@material-ui/core/Card"

import { makeStyles, createStyles } from "@material-ui/core/styles"

const cardStyles = makeStyles(
  createStyles({
    root: {
      fontWeight: 300,
    },
  })
)

const CustomCard: FC<CardProps> = props => {
  const classes = cardStyles()
  const { children, ...rest } = props
  return (
    <Card {...rest} className={classes.root}>
      {children}
    </Card>
  )
}

export default CustomCard
