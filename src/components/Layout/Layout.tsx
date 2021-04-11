import React, { FC } from "react"

// core components
import Header from "components/Header/Header"
import HeaderLinks from "components/Header/HeaderLinks"
import Parallax from "components/Parallax/Parallax"
import Footer from "components/Footer/Footer"

import MainContainer from "components/Container/MainContainer"

import profileBackGround from "assets/img/profile-bg.jpg"

const Layout: FC<{}> = props => {
  const { children, ...rest } = props
  document.title = "Yoshiki Web"
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        changeColorOnScroll={{ height: 200, color: "white" }}
        {...rest}
      />

      <Parallax small filter image={profileBackGround} />

      <MainContainer>{children}</MainContainer>

      <Footer />
    </div>
  )
}

export default Layout
