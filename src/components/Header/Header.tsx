import React, { FC } from "react"

import classNames from "classnames"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"

import Menu from "@material-ui/icons/Menu"

import headerStyle from "components/Header/headerStyle"

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
  const classes = headerStyle()
  const [mobileOpen, setMobileOpen] = React.useState(false)

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
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes["transparent"])
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color])
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes["transparent"])
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color])
    }
  }

  const { rightLinks } = props
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes["transparent"]]: "transparent",
    [classes.fixed]: true,
  })
  const brandComponent = <Button className={classes.title}>Yoshiki Web</Button>
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>{brandComponent}</div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>

      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>{rightLinks}</div>
        </Drawer>
      </Hidden>
    </AppBar>
  )
}

export default Header
