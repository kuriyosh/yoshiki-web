import React, { FC } from "react"

import classNames from "classnames"

import cardFooterStyle from "components/Card/cardFooterStyle"

type Props = {
  className?: string
}

const CardFooter: FC<Props> = props => {
  const classes = cardFooterStyle()
  const { className, children, ...rest } = props
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    ...(className && { [className]: className !== undefined }),
  })
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  )
}

export default CardFooter
