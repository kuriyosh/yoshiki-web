import React, { FC } from "react"

import Header from "components/Header/Header"
import HeaderLinks from "components/Header/HeaderLinks"
import Parallax from "components/Parallax/Parallax"
import Footer from "components/Footer/Footer"
import MainContainer from "components/Container/MainContainer"

import { useStaticQuery, graphql } from "gatsby"

import { Helmet } from "react-helmet"

import profileBackGround from "assets/img/profile-bg.jpg"

type Props = {
  title?: string
  ogType?: "website" | "article"
}

const Layout: FC<Props> = props => {
  const { children, ...rest } = props
  const title = rest.title ? `${rest.title} | Yoshiki Web` : "Yoshiki Web"
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  return (
    <>
      <Helmet>
        <html lang="ja" />
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:image"
          content={`${data.site.siteMetadata.siteUrl}/assets/card.png`}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={data.site.siteMetadata.author} />
        <meta
          name="twitter:description"
          content={data.site.siteMetadata.description}
        />
        <meta name="og:title" content={title} />
        <meta
          name="og:image"
          content={`${data.site.siteMetadata.siteUrl}/assets/card.jpg`}
        />
        <meta name="og:type" content={rest.ogType} />

        <title>{title}</title>
      </Helmet>
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
    </>
  )
}

Layout.defaultProps = {
  ogType: "article",
}

export default Layout
