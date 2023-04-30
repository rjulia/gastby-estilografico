import _ from 'lodash'
import React, { useState } from 'react'
import { Link } from 'gatsby'
import './profile.scss'
import Linkeding from '../../../../assets/images/linkedin.png'

const Profile = ({ profile }) => {
  const [hover, setHover] = useState(false)

  const trigger = () => {
    setHover(!hover)
  }
  const imgUrl = () => {
    if (hover) {
      return _.get(profile, 'fotoFerfilHover.url')
    }
    return _.get(profile, 'fotoPerfil.url')
  }
  const linkLinkedin = _.get(profile, 'urlLinkedin')
  return (
    <div className="profile-container">
      <div className="profile-box">
        <Link to={`/equipo/${_.get(profile, 'slug')}/`}>
          <div
            className="profile-image"
            onMouseOver={trigger}
            onMouseOut={trigger}>
            <img src={imgUrl()} alt={_.get(profile, 'fotoPerfil.title')} />
          </div>
        </Link>
        <div className="profile-content">
          <p className="profile-name">{_.get(profile, 'nombre')}</p>
          <p className="profile-title">{_.get(profile, 'titulo')}</p>
          {
            linkLinkedin
            && <a className="profile-linkedin" href={linkLinkedin}>
              <img src={Linkeding} alt="linkedin" />
            </a>
          }
        </div>
      </div>
    </div>

  )
}

export default Profile
