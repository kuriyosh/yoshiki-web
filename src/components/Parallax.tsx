import { FC, ReactNode, useEffect, useState } from "react"
import { Box } from "@mui/material"
import ProfileBg from "../../public/images/profile-bg.jpg"

const Parallax: FC<{ children?: ReactNode }> = ({ children }) => {
  let windowScrollTop
  if (typeof window !== `undefined` && window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3
  } else {
    windowScrollTop = 0
  }
  const [transform, setTransform] = useState(
    "translate3d(0," + windowScrollTop + "px,0)"
  )
  useEffect(() => {
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
        backgroundImage: `url(${ProfileBg.src})`,
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
