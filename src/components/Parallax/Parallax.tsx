import React, { FC } from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// @material-ui/core components

// core components
import parallaxStyle from "components/Parallax/parallaxStyle"

type Props = {
  className?: string
  filter?: boolean
  image: string
  small?: boolean
}

const Parallax: FC<Props> = props => {
  let windowScrollTop
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3
  } else {
    windowScrollTop = 0
  }
  const [transform, setTransform] = React.useState(
    "translate3d(0," + windowScrollTop + "px,0)"
  )
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform)
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform)
      }
    }
  })
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3
    setTransform("translate3d(0," + windowScrollTop + "px,0)")
  }
  const { filter, className, children, image, small } = props
  const classes = parallaxStyle()
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    ...(className && { [className]: className !== undefined }),
  })

  return (
    <div
      className={parallaxClasses}
      style={{
        backgroundImage: `url(${image})`,
        transform: transform,
      }}
    >
      {children}
    </div>
  )
}

Parallax.defaultProps = {
  className: "",
}

export default Parallax
