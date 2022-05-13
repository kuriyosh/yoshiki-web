import React, { FC } from "react"
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Hidden,
  Drawer,
  SxProps,
  Container,
  Box,
} from "@mui/material"
import { Menu } from "@mui/icons-material"
import { Link } from "gatsby"

type Props = {
  rightLinks: React.ReactNode
  absolute?: boolean
  changeColorOnScroll: {
    height: number
    color:
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "transparent"
      | "white"
      | "rose"
      | "dark"
  }
}
const Header: FC<Props> = props => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [appBarStyle, setAppBarStyle] = React.useState<SxProps>({
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: "#FFFFFF",
  })

  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      typeof window !== `undefined` &&
        window.addEventListener("scroll", headerColorChange)
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        typeof window !== `undefined` &&
          window.removeEventListener("scroll", headerColorChange)
      }
    }
  })

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const headerColorChange = () => {
    const { changeColorOnScroll } = props
    const windowsScrollTop =
      typeof window !== `undefined` ? window.pageYOffset : 0
    if (windowsScrollTop > changeColorOnScroll.height) {
      setAppBarStyle({
        border: "0",
        padding: "0.625rem 0",
        marginBottom: "20px",
        color: "#555",
        backgroundColor: "#fff !important",
        boxShadow:
          "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
      })
    } else {
      setAppBarStyle({
        backgroundColor: "transparent !important",
        boxShadow: "none",
        paddingTop: "25px",
        color: "#FFFFFF",
      })
    }
  }

  const { rightLinks } = props

  return (
    <AppBar
      sx={{
        display: "flex",
        border: "0",
        borderRadius: "3px",
        padding: "0.625rem 0",
        marginBottom: "20px",
        color: "#555",
        width: "100%",
        backgroundColor: "#fff",
        boxShadow:
          "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
        transition: "all 150ms ease 0s",
        alignItems: "center",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        position: "fixed",
        zIndex: 1100,
        ...appBarStyle,
      }}
    >
      <Toolbar
        component={Container}
        sx={{
          minHeight: "50px",
          flex: "1",
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        <Link to="/">
          <Button
            sx={{
              lineHeight: "30px",
              fontSize: "18px",
              borderRadius: "3px",
              textTransform: "none",
              color: "#FFFFFF",
              padding: "8px 16px",
              letterSpacing: "unset",
              "&:hover,&:focus": {
                color: "inherit",
                background: "transparent",
              },
            }}
          >
            Yoshiki Web
          </Button>
        </Link>
        <Box sx={{ display: { md: "block", xs: "none" } }}>{rightLinks}</Box>
        <Box sx={{ display: { md: "none", xs: "block" } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Box>
      </Toolbar>

      <Box sx={{ display: { md: "block", xs: "none" } }}>
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
            border: "none",
            bottom: "0",
            transitionProperty: "top, bottom, width",
            transitionDuration: ".2s, .2s, .35s",
            transitionTimingFunction: "linear, linear, ease",
            width: "260px",
            position: "fixed",
            display: "block",
            top: "0",
            height: "100vh",
            right: "0",
            left: "auto",
            visibility: "visible",
            overflowY: "visible",
            borderTop: "none",
            textAlign: "left",
            paddingRight: "0px",
            paddingLeft: "0",
            boxShadow:
              "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Box sx={{ margin: "20px 10px" }}>{rightLinks}</Box>
        </Drawer>
      </Box>
    </AppBar>
  )
}

export default Header
