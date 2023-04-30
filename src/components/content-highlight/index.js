import React from 'react'
import './content-highlight.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Quotes from '../../assets/icons/quotes.svg'

const ContentHighlight = ({ textQuotes }) => (
  <div className="container-content-highlight">
    <div className="top-quotes">
      <Quotes width="50" height="40"/>
    </div>
    <div className="content-quotes">
      {documentToReactComponents(textQuotes)}
    </div>
    <div className="bottom-quotes">
      <Quotes width="50" height="40"/>
    </div>

  </div>
)

export default ContentHighlight
