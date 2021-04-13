import React, { FC } from "react"

import classNames from "classnames"

import cardBodyStyle from "components/Card/cardBodyStyle"

type Props = {
  className?: string
}

const CardBody: FC<Props> = props => {
  const classes = cardBodyStyle()
  const { className, children, ...rest } = props
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    ...(className && { [className]: className !== undefined }),
  })
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  )
}

export default CardBody
