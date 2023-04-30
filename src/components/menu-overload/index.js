import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import Close from '../../assets/icons/close.svg'
import './menu-overload.scss'

const ManuOverload = ({ onOpenMenu, isMenuOpen }) => {
  const container = classNames({
    'container-menu-overload': true,
    isOpen: isMenuOpen,
  })
  return (
    <div className={container} onClick={onOpenMenu}>
      <div className="box-close-menu-overload">
        <Close />
      </div>
      <div className="box-menu-overload">
        <ul>
          <Link
            activeClassName="selected"
            className="list-menu-overload"
            to="/"
          >
            <li >
                Home
            </li>
          </Link>
          <Link
            activeClassName="selected"
            className="list-menu-overload"
            to="/equipo/"
          >
            <li >
                Equipo
            </li>
          </Link>
          <Link
            activeClassName="selected"
            className="list-menu-overload"
            to="/servicios/">
            <li onClick={onOpenMenu}>
                Servicios
            </li >
          </Link>
          <Link
            activeClassName="selected"
            className="list-menu-overload"
            to="/contacto/">
            <li onClick={onOpenMenu}>
                Contacto
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default ManuOverload
