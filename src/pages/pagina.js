import React from 'react'
import { Router } from '@reach/router'
import PageTemplate from '../screens/page'

const PagePage = (props) => {
  const path = '/pagina/'
  return (
    <Router>
      <PageTemplate {...props} path={`${path}:slug`} />
    </Router>
  )
}

export default PagePage
