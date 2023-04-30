import _ from 'lodash'
import React, { useEffect } from 'react'
import { useServices } from '../../hooks'
import { Spinner } from '../../components'
import TemplateTeam from './components/team-template'
import './team.scss'

const Team = () => {
  const { service, apiGetService } = useServices()
  const slug = 'equipo'
  useEffect(() => {
    apiGetService(slug)
  }, [])

  if (_.isEmpty(service)) {
    return <Spinner />
  }
  return (
    <TemplateTeam team={service}/>
  )
}

export default Team
