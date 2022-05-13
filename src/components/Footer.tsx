import { FC } from "react"
import { Box, Container, Link } from "@mui/material"

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        padding: "0.9375rem 0",
        textAlign: "center",
        display: "flex",
        zIndex: 2,
        position: "relative",
      }}
    >
      <Container>
        <Box sx={{ float: "left", display: "block" }}>
          <Link
            href="/"
            sx={{
              color: "inherit",
              padding: "0.9375rem",
              fontWeight: 500,
              fontSize: "12px",
              textTransform: "uppercase",
              borderRadius: "3px",
              textDecoration: "none",
              position: "relative",
              display: "block",
            }}
          >
            Yoshiki Web
          </Link>
        </Box>
        <Box sx={{ padding: "15px 0", margin: "0", float: "right" }}>
          &copy; {new Date().getFullYear()} , Yoshiki Kurihara
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
