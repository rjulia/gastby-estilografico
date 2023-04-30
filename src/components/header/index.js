import React from 'react'
import { Link } from 'gatsby'
import Logo from '../../assets/icons/logoClean.svg'
import MenuIcon from '../../assets/icons/menu-icon.svg'
import './header.scss'

const Header = ({
  onOpenMenu,
}) => (
  <div className="container-fluid-header-home">
    <div className="container-menu">
      <div className="container-logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="icon-menu" onClick={onOpenMenu}>
        <MenuIcon />
      </div>
      <nav className="box-menu">
        <ul>
          <Link activeClassName="selected" className="list-menu" to="/equipo/">
            <li>
                Equipo
            </li>
          </Link>
          <Link activeClassName="selected" className="list-menu" to="/servicios/">
            <li>
                Servicios
            </li>
          </Link>
          <Link activeClassName="selected" className="list-menu" to="/contacto/">
            <li>
                Contacto
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
