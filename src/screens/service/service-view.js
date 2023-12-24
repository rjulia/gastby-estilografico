import _ from 'lodash'
import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {
  RelatedProjects,
  Section,
  Navigation,
  Helmet,
} from '../../components'
import './service-styles.scss'

const ServiceView = ({ service }) => {
  const colorsHightLight = service ? _.split(service?.highlightsColors, ',') : []
  const sections = _.get(service, 'seccionesServicosCollection.items', [])

  const {
    orden,
    nombre,
    descripcionEs,
    palabrasClave,
    seoDescription,
  } = service

  return (
    <div className="container-fluid-services">
      <Helmet
        title={nombre}
        description={seoDescription}
        keywords={palabrasClave}
      />
      <div className="box-title-service">
        <h1 className="title-service"><span>#0{orden}</span>{nombre}</h1>
        <p className="description-service">{descripcionEs}</p>
      </div>
      <div className="highlight-services" style={{ backgroundColor: `${colorsHightLight[0]}` }}>
        <div className="highlight-content-services">
          <div style={{ color: `${colorsHightLight[1]}` }}>{documentToReactComponents(_.get(service, 'highlightsEs.json', ''))}</div>

        </div>
      </div>

      {
        _.map(sections, (section) => <Section key={section.titulo} section={section} />)
      }
      <RelatedProjects
        projects={_.get(service, 'proyectosRelacionadoCollection.items')}
        phrase={_.get(service, 'fraseProjectos')}
      />
      <Navigation />

    </div>
  )
}

export default ServiceView
