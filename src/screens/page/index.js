import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Spinner, Helmet } from '../../components'
import { getPage } from '../../connect/pages/request'
import './page.scss'

const ServicesDetail = ({ location }) => {
  const [page, setPage] = useState({})
  const slug = _.last(_.compact(_.split(location.pathname, '/')))
  useEffect(() => {
    getPage(slug).then((response) => {
      setPage(_.get(response, 'data.pageCollection.items[0]'))
    })
  }, [slug])

  if (_.isEmpty(page)) {
    return <Spinner />
  }
  const {
    titulo,
    contenido,
  } = page
  return (
    <div className="page-container">
      <Helmet
        title={titulo}
      />
      <div className="page-box">
        <h1 className="page-title">{titulo}</h1>
        <section className="page-section">
          <div>{contenido && documentToReactComponents(contenido.json)}</div>
        </section>
      </div>
    </div>
  )
}

export default ServicesDetail
