import React, { FC } from "react"

import classNames from "classnames"

import footerStyle from "components/Footer/footerStyle"

type Props = {
  whiteFont?: boolean
}

const Footer: FC<Props> = props => {
  const classes = footerStyle()
  const { whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <a href="/" className={classes.block}>
            Yoshiki Web
          </a>
        </div>
        <div className={classes.right}>
          &copy; {new Date().getFullYear()} , Yoshiki Kurihara
        </div>
      </div>
    </footer>
  )
}

export default Footer
