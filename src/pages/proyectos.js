import React from 'react'
import { Router } from '@reach/router'
import ProjectsTemplate from '../screens/project-detail'

const ProyectosPage = (props) => {
  const path = '/proyectos/'
  return (
    <Router>
      <ProjectsTemplate {...props} path={`${path}:slug`} />
      <ProjectsTemplate {...props} path={`${path}:id`} />
    </Router>
  )
}

export default ProyectosPage
