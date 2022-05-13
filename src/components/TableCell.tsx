import React, { FC } from "react"
import { TableCell, TableCellProps } from "@mui/material"

const CustomTableCell: FC<TableCellProps> = props => {
  const { children, ...rest } = props
  return (
    <TableCell {...rest} sx={{ color: "inherit", fontWeight: 350 }}>
      {children}
    </TableCell>
  )
}

export default CustomTableCell
