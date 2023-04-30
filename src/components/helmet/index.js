import React from 'react'
import { Helmet } from 'react-helmet'

const HelmetComponent = ({
  title,
  description,
  keywords,
}) => {
  if (typeof document !== 'undefined') {
    const descriptionDefault = document.querySelector('meta[name="description"]')
    if (descriptionDefault) {
      descriptionDefault.remove()
    }
  }

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} data-react-helmet="true" />
      <meta name="keywords" content={keywords} data-react-helmet="true" />
    </Helmet>
  )
}

export default HelmetComponent
