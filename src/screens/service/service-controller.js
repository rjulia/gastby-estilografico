import _ from 'lodash'
import React, { useEffect } from 'react'
import { useServices } from '../../hooks'
import { Spinner } from '../../components'
import ServiceView from './service-view'

const ServicesController = ({ location }) => {
  const { service, apiGetService, loading } = useServices()
  const slug = _.last(_.compact(_.split(location.pathname, '/')))

  useEffect(() => {
    apiGetService(slug)
  }, [slug])

  if (loading) {
    return <Spinner />
  }
  return (
    <ServiceView service={service} />
  )
}

export default ServicesController
