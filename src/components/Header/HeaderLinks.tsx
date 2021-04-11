import React, { FC } from "react"

import { Link } from "gatsby"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

import {
  Person,
  EmojiEmotions,
  MenuBook,
  Description,
} from "@material-ui/icons"

import Button from "components/CustomButtons/Button"

import headerLinksStyle from "components/Header/HeaderLinkStyle"

const HeaderLinks: FC<{}> = props => {
  const classes = headerLinksStyle()
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.link}>
          <Button color="transparent" className={classes.navLink}>
            <Person className={classes.icons} /> Profile
          </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/note" className={classes.link}>
          <Button color="transparent" className={classes.navLink}>
            <MenuBook className={classes.icons} /> Learn
          </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/blog" className={classes.link}>
          <Button color="transparent" className={classes.navLink}>
            <Description className={classes.icons} /> Blog
          </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/app" className={classes.link}>
          <Button color="transparent" className={classes.navLink}>
            <EmojiEmotions className={classes.icons} /> App
          </Button>
        </Link>
      </ListItem>
    </List>
  )
}

export default HeaderLinks
