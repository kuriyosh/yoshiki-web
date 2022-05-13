import React, { FC } from "react"
import { Box, Container } from "@mui/material"

const MainContainer: FC = ({ children }) => {
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        position: "relative",
        zIndex: 3,
        paddingTop: "30px",
        paddingBottom: "60px",
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
          "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container>{children}</Container>
    </Box>
  )
}

export default MainContainer
