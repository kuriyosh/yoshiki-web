import React, { FC } from "react"

import TableCell, { TableCellProps } from "@material-ui/core/TableCell"

import { makeStyles, createStyles } from "@material-ui/core/styles"

const tableCellStyles = makeStyles(
  createStyles({
    body: {
      color: "inherit",
    },
    root: {
      fontWeight: 350,
    },
  })
)

type Props = {
  children: React.ReactNode
} & TableCellProps

const CustomTableCell: FC<Props> = props => {
  const classes = tableCellStyles()
  const { children, ...rest } = props
  return (
    <TableCell {...rest} className={classes.body + " " + classes.root}>
      {children}
    </TableCell>
  )
}

export default CustomTableCell
