import "../styles/globals.css"
import { Box, Container, CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import type { AppProps } from "next/app"
import { ReactElement } from "react"
import { theme } from "styles/theme"
import Header from "components/Header"
import HeaderLinks from "components/HeaderLinks"
import Parallax from "components/Parallax"
import Footer from "components/Footer"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          rightLinks={<HeaderLinks />}
          changeColorOnScroll={{ height: 200, color: "white" }}
        />
        <Parallax />
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
          <Container>
            <Component {...pageProps} />
          </Container>
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  )
}
export default App
