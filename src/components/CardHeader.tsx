import React, { FC } from "react"
import { CardHeader, CardHeaderProps } from "@mui/material"

const CustomCardHeader: FC<CardHeaderProps> = props => {
  const { children, ...rest } = props
  return (
    <CardHeader
      sx={{
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        color: "#3c4858",
        fontWeight: 400,
      }}
      {...rest}
    >
      {children}
    </CardHeader>
  )
}

export default CustomCardHeader
