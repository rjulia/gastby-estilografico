import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import ServicesContext from './services-context'
import { getQueryServices, getQueryService } from '../../connect/services/request'

export default function ServicesProvider({ children }) {
  // internal state
  const [services, setServices] = useState({})
  const [service, setService] = useState({})
  const [nextservice] = useState({})

  const [loading, setLoading] = useState(false)
  const [currentId, setCurrentId] = useState(0)
  const [totalservices, setTotalservices] = useState(0)

  const apiGetService = (slug) => {
    setService({})
    setLoading(true)
    getQueryService(slug).then((response) => {
      setCurrentId(_.get(response, 'data.servicioCollection.items[0].sys.id'))
      setService(_.get(response, 'data.servicioCollection.items[0]'))
      setLoading(false)
    })
  }

  // useEffect(() => {
  //   const getNextserviceId = () => {
  //     const idx = _.findIndex(services, {id: currentId - 1})
  //     setLoading(true)
  //     const next = services[idx]
  //     setNextservice(next)
  //   }
  //   getNextserviceId(currentId)
  // }, [currentId, services])

  useEffect(() => {
    setLoading(true)
    getQueryServices().then((response) => {
      const items = _.get(response, 'data.servicioCollection.items')
      setServices(_.orderBy(items, ['orden'], ['asc']))
      setLoading(false)
      setTotalservices(items.length)
    })
  }, [])

  const state = {
    services,
    service,
    loading,
    apiGetService,
    nextservice,
    totalservices,
    currentId,
  }

  return (
    <ServicesContext.Provider value={state}>
      {children}
    </ServicesContext.Provider>
  )
}
