import React, { FC } from "react"
import { Box } from "@mui/material"

type Props = {
  className?: string
  filter?: boolean
  image: string
  small?: boolean
}

const Parallax: FC<Props> = props => {
  let windowScrollTop
  if (typeof window !== `undefined` && window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3
  } else {
    windowScrollTop = 0
  }
  const [transform, setTransform] = React.useState(
    "translate3d(0," + windowScrollTop + "px,0)"
  )
  React.useEffect(() => {
    if (typeof window !== `undefined` && window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform)
    }
    return function cleanup() {
      if (typeof window !== `undefined` && window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform)
      }
    }
  })
  const resetTransform = () => {
    var windowScrollTop =
      typeof window !== `undefined` ? window.pageYOffset / 3 : 0
    setTransform("translate3d(0," + windowScrollTop + "px,0)")
  }
  const { children, image } = props
  return (
    <Box
      sx={{
        height: "380px",
        maxHeight: "1000px",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${image})`,
        transform: transform,
        "&:before": {
          background: "rgba(0, 0, 0, 0.5)",
        },
        "&:after,&:before": {
          position: "absolute",
          zIndex: "1",
          width: "100%",
          height: "100%",
          display: "block",
          left: "0",
          top: "0",
          content: "''",
        },
      }}
    >
      {children}
    </Box>
  )
}

export default Parallax
