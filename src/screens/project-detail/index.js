import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getProject } from '../../connect/projects/request'
import { Spinner, Helmet, Navigation } from '../../components'
import Tilde from '../../assets/icons/tilde.svg'
import './projects-styles.scss'

const Projects = ({ location }) => {
  const [project, setProject] = useState({})
  const slug = _.last(_.compact(_.split(location.pathname, '/')))

  useEffect(() => {
    getProject(slug).then((response) => {
      setProject(_.get(response, 'data.projectoCollection.items[0]'))
    })
  }, [location, slug])

  if (_.isEmpty(project)) {
    return <Spinner />
  }
  const {
    contenido,
    portada,
    listaDeVideos,
    listaDeObjectivos,
    listaDeImagesCollection,
    subtitulo,
    titulo,
    palabrasClave,
    seoDescription,
    trabajosRelacionadosCollection,
  } = project

  const relatedJobs = _.map(trabajosRelacionadosCollection.items, (job) => ({
    title: _.get(job, 'subtituloEnlace'),
    category: _.get(job, 'linkedFrom.servicioCollection.items[0].nombre'),
    slug: _.get(job, 'slug'),
  }))
  console.log('🚀 ~ file: index.js:42 ~ relatedJobs ~ relatedJobs:', relatedJobs)
  return (
    <div className="container-fluid-project-detail">
      <Helmet
        title={titulo}
        description={seoDescription}
        keywords={palabrasClave}
      />
      <div className="header-image-project-detail">
        <div
          className="container-box-image-project-detail"
          style={{
            backgroundImage: `url(${portada.url})`,
          }} />
      </div>
      <div className="header-title-project-detail">
        <div className="title-project-detail">
          <h1>{titulo}</h1>
        </div>
        <div className="list-objectives-project-detail">
          <ul >
            {
              listaDeObjectivos && listaDeObjectivos.length > 0 && _.map(listaDeObjectivos, (objectivo, idx) => (
                <li key={idx}><Tilde />{objectivo}</li>
              ))
            }
          </ul>
        </div>
        <div className="content-project-detail">
          <div>{contenido && documentToReactComponents(contenido.json)}</div>
        </div>
      </div>
      <div className="list-images-project-detail">
        {
          listaDeImagesCollection.items.length > 0 && _.map(listaDeImagesCollection.items, (image, idx) => (
            <div className="box-image-project-detail" key={idx}>
              <div>
                <img src={image.url || ''} alt={_.get(image, 'title', '')} />
              </div>
              <div className="image-descrption-project-detail">
                <span>{image.description}</span>
              </div>
            </div>
          ))
        }
      </div>
      <div className="list-videos-project-detail">
        {
          listaDeVideos && _.map(listaDeVideos, (videoUrl, idx) => (
            <div className="videos-project-detail" key={idx}>
              <ReactPlayer url={videoUrl} width={'100%'} height="600px" />
            </div>
          ))
        }
      </div>

      {
        relatedJobs.length > 0 && (
          <div className="list-related-project-detail">
            <h3 className="title-related-project-detail">
              TRABAJOS RELACIONADOS
            </h3>
            {
              _.map(relatedJobs, (relatedJob, idx) => (
                <Link
                  key={`key-related-relatedJob-${idx}`}
                  style={{ textDecoration: 'none' }}
                  to={ `/proyectos/${relatedJob.slug}`} >
                  <p

                    className="text-related-project-detail">
                    <span>{_.get(relatedJob, 'category')}: </span>
                    <span>{_.get(relatedJob, 'title')}</span>
                  </p>
                </Link>
              ))
            }
          </div>
        )
      }
      <Navigation />

    </div>
  )
}

export default Projects
