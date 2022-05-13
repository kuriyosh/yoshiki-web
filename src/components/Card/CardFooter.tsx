import React, { FC } from "react"
import { Box, BoxProps } from "@mui/material"

const CardFooter: FC<BoxProps> = props => {
  const { children, ...rest } = props
  return (
    <Box
      sx={{
        alignItems: "center",
        backgroundColor: "transparent",
        padding: "0.9375rem 1.875rem",
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}

export default CardFooter
