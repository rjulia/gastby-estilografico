import React from 'react'
import { navigate } from 'gatsby'
import ButtonNavigation from '../button-navigation'
import Squares from '../../assets/icons/squares.svg'
import ArrowUp from '../../assets/icons/arrow-up.svg'
import './navigation.scss'

const NavigationService = () => {
  const goToBack = () => {
    navigate(-1)
  }
  const goToTop = () => {
    window.scrollTo(0, 0)
  }

  const goToServcies = () => {
    window.scrollTo(0, 0)
    navigate('/servicios/')
  }
  return (
    <div className="container-navigation-services">
      <ul className="list-navigation-services">
        <li>
          <ButtonNavigation
            icon={ArrowUp}
            title="VOLVER"
            turn
            onClick={goToBack}/>
        </li>
        <li>
          <ButtonNavigation
            icon={Squares}
            title="MENÚ"
            onClick={goToServcies}/>
        </li>
        <li>
          <ButtonNavigation
            icon={ArrowUp}
            title="SUBIR"
            onClick={goToTop}/>
        </li>
      </ul>
    </div>
  )
}

export default NavigationService
