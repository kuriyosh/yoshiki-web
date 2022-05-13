import React, { FC } from "react"
import { List, Button, ListItem, Link } from "@mui/material"
import {
  Person,
  EmojiEmotions,
  MenuBook,
  Description,
} from "@mui/icons-material"

const HeaderLinks: FC = () => {
  const links = [
    {
      to: "/",
      icon: Person,
      title: "Profile",
    },
    {
      to: "/note",
      icon: MenuBook,
      title: "Note",
    },
    {
      to: "/blog",
      icon: Description,
      title: "Blog",
    },
    {
      to: "/app",
      icon: EmojiEmotions,
      title: "App",
    },
  ]

  return (
    <List
      sx={{
        fontSize: "14px",
        margin: 0,
        paddingLeft: "0",
        listStyle: "none",
        paddingTop: "0",
        paddingBottom: "0",
        color: "inherit",
      }}
    >
      {links.map(link => (
        <ListItem
          key={link.title}
          sx={{
            float: "left",
            color: "inherit",
            position: "relative",
            display: "block",
            width: { sm: "100%", md: "auto" },
            margin: "0",
            padding: "0",
            "&:after": {
              width: { sm: "calc(100% - 30px)" },
              content: { sm: '""', md: "none" },
              display: { sm: "block" },
              height: { sm: "1px" },
              marginLeft: { sm: "15px" },
              backgroundColor: { sm: "#e5e5e5" },
            },
          }}
        >
          <Link href={link.to} color="inherit" underline="none">
            <Button
              sx={{
                color: "inherit",
                padding: "0.9375rem",
                fontWeight: 400,
                fontSize: "12px",
                textTransform: "uppercase",
              }}
            >
              <link.icon
                sx={{ width: "20px", height: "20px", marginRight: "3px" }}
              />
              {link.title}
            </Button>
          </Link>
        </ListItem>
      ))}
    </List>
  )
}

export default HeaderLinks
