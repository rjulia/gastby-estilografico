import * as React from 'react'
import { Link } from 'gatsby'
import './not-found.scss'

// markup
const NotFoundPage = () => (

  <div className="notfoundContainer">
    <h1 className="notFoundTitle">404 - Not Found!</h1>
    <p className="notFoundSubTitle">Ooops! algo fue mal, página no encontrada</p>
    <Link to="/" className="buttonGoHome">
      <p>Ir a la página principal</p>
    </Link>
  </div>

)

export default NotFoundPage
