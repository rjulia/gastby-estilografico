import React from 'react'
import {
  Link,
} from 'gatsby'

import './send.scss'

const Send = () => (
  <div>
    <div className="container-send">
      <h1>Enviado</h1>
      <p>Su email se ha enviado correctamente, en breve nos pondremos en contacto con usted</p>
      <div className="box-button-send">
        <Link to="/">
          <span className="button-send">Volver al inicio</span>
        </Link>
      </div>
    </div>
  </div>
)

export default Send
