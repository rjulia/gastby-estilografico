import _ from 'lodash'
import React from 'react'
import classNames from 'classnames'
import ContentHighlight from '../content-highlight'
import ContentfulRichText from '../contenful-rich-text'
import './section-services.scss'

const SectionServices = ({
  section,
}) => {
  const quotes = _.get(section, 'destacadosCollection.items', [])
  const container = classNames({
    'content-section-services': true,
    'width-symbol': _.get(section, 'conSimbolo'),
  })

  const columnLeft = classNames({
    'colunm-left-section-services': true,
    'colunm-left-section-services-width': !_.isEmpty(quotes),
  })
  return (
    <div
      className="container-section-services"
      style={{ backgroundColor: section.bgc }}>
      <div className={container}>
        <div className={columnLeft}>
          <ContentfulRichText content={(_.get(section, 'contenido'))} />
        </div>
        <div className="colunm-right-section-services">
          {
            quotes && _.map(quotes, (quote, idx) => <ContentHighlight key={idx} textQuotes ={_.get(quote, 'frase.json')}/>)
          }

        </div>

      </div>
    </div>
  )
}

export default SectionServices
