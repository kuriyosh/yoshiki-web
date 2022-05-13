import React, { FC } from "react"
import { Card, CardProps } from "@mui/material"

const CustomCard: FC<CardProps> = props => {
  const { children, ...rest } = props
  return (
    <Card {...rest} sx={{ fontWeight: 300 }}>
      {children}
    </Card>
  )
}

export default CustomCard
