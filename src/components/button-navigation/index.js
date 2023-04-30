import React from 'react'
import classNames from 'classnames'
import './button-navigation.scss'

const ButtonNavigation = ({
  onClick,
  title,
  icon,
  turn,
}) => {
  const Icon = icon
  let boxButton = classNames({
    'box-button-navigation': true,
    'turned': turn,
  })
  return (
    <div
      className="container-button-navigation" 
      onClick={onClick}>
      <div className={boxButton}>
        <Icon />
      </div>
      <span>{title}</span>
    </div>
  )
}

export default ButtonNavigation
