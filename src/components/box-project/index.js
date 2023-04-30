import React from 'react'
import { Link } from 'gatsby'
import './box-project.scss'

const BoxProject = ({
  project,
}) => {
  const {
    titulo,
    subtitulo,
    slug,
    portada,
  } = project
  return (
    <Link to={`/proyectos/${slug}/`}>
      <div className="container-box-project">
        <div className="box-box-project">
          <div className="content-box-project">
            <h3>{titulo}</h3>
            <p>{subtitulo}</p>
          </div>
          <div className="button-box-project">
            <p>VER <span>+</span></p>
          </div>
        </div>
        <div
          className="container-box-image-project"
          style={{
            backgroundImage: `url(${portada.url})`,
          }} />

      </div>
    </Link>
  )
}

export default BoxProject
