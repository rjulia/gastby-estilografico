import React from 'react'
import { Router } from '@reach/router'
import _ from 'lodash'
import EquipoTemplate from '../screens/team'
import EquipoDetalleTemplate from '../screens/team-detail'

const EquipoPage = (props) => {
  const path = '/equipo/'
  return (
    <Router>
      <EquipoDetalleTemplate {...props} path={`${path}:slug`} />
      <EquipoTemplate {...props} path={path} />
    </Router>
  )
}

export default EquipoPage
