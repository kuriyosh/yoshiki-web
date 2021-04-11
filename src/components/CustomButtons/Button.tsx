import React, { FC } from "react"
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from "classnames"

// @material-ui/core components
import Button from "@material-ui/core/Button"

// core components
import buttonStyle from "components/CustomButtons/buttonStyle"

type Props = {
  color:
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "rose"
    | "white"
    | "facebook"
    | "twitter"
    | "google"
    | "github"
    | "transparent"
  size?: "sm" | "lg"
  simple?: boolean
  round?: boolean
  fullWidth?: boolean
  disabled?: boolean
  block?: boolean
  link?: boolean
  justIcon?: boolean
  className: string
}

/* TODO: Ref props 消したけどどんな影響があるんだろうか */
const RegularButton: FC<Props> = props => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props

  const classes = buttonStyle()

  const btnClasses = classNames({
    [classes.button]: true,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes[color]]: color,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className,
    ...(size && { [classes[size]]: size }),
  })

  return (
    <Button {...rest} className={btnClasses}>
      {children}
    </Button>
  )
}

export default RegularButton
