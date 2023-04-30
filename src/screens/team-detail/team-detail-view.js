import _ from 'lodash'
import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {
  ContentHighlight,
  Helmet,
} from '../../components'
import './team-detail-styles.scss'
import Tilde from '../../assets/icons/tilde.svg'

const Profile = ({ profile }) => {
  const {
    description,
    fotoPerfil,
    frasesDestacadasCollection,
    listaDeHabilidades,
    nombre,
  } = profile

  const frases = _.get(frasesDestacadasCollection, 'items', [])

  return (
    <div className="container-fluid-profile">
      <Helmet
        title={nombre}
      />
      <div className="box-profile">
        <div className="colum-left-profile">
          <div className="name-profile">
            <h1>{nombre}</h1>
          </div>
          <div className="image-profile">
            <img src={_.get(fotoPerfil, 'url')} alt={_.get(fotoPerfil, 'title')} />
          </div>
          <div className="highlights-profile">
            {frases && _.map(frases, (frase, idx) => <ContentHighlight key={idx} textQuotes={_.get(frase, 'frase.json')} />)}
          </div>

        </div>
        <div className="colum-right-profile">
          <div className="habilities-profile">
            <ul>
              {listaDeHabilidades && _.map(listaDeHabilidades, (habilidad, idx) => <li key={idx}><Tilde /><span>{habilidad}</span></li>)}

            </ul>
          </div>
          <div className="descriptio-profile">
            {documentToReactComponents(_.get(description, 'json'))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
