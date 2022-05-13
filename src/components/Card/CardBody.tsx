import React, { FC } from "react"
import { Box, BoxProps } from "@mui/material"

const CardBody: FC<BoxProps> = props => {
  const { children, ...rest } = props
  return (
    <Box sx={{ padding: "0.9375rem 1.875rem", flex: "1 1 auto" }} {...rest}>
      {children}
    </Box>
  )
}

export default CardBody
