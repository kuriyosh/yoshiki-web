import React, { FC } from "react"
import MainContainer from "components/Container/MainContainer"

import profilePageStyle from "pages/profile/profilePage"
type Props = {
  children: React.ReactNode
}

const IndexPage: FC<Props> = () => {
  const classes = profilePageStyle()
  return (
    <div className={classes.main}>
      <MainContainer>test</MainContainer>
    </div>
  )
}

export default IndexPage
