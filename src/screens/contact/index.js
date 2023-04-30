import React from 'react'
import './contact.scss'
import Map from './googleMap'
import Form from './form'
import { Helmet } from '../../components'

const Contact = () => (
  <div className="container-fluid-contact">
    <Helmet
      title="Contacto"
      description=""
      keywords=""
    />
    <div className="container-contact container-header-contact">
      <h1>Contacto</h1>
      <p>Hola. ¿Cómo podemos ayudarte?
Estaremos encantados de conocerte. Estás muy cerca de contactar con nosotros. ¡Envíanos tus datos y nos pondremos en contacto contigo!</p>
    </div>
    <div className="container-highlighted-contact">
      <div className="container-contact">
        <p>Una relación empieza con unas pocas palabras</p>
      </div>
    </div>
    <div className="container-contact container-form-contact">
      <div className="box-info-contact">
        <h2>ESTILOGRÁFICO</h2>
        <p>Estudio de Comunicación, Diseño gráfico y Publicidad a medida.</p>
        <br />
        <p className="phone">Tel. 943 82 13 00</p>
        <br />
        <p>info@estilografico.com</p>
        <br />
        <p>Bidebarrieta, 27 B - Oficina 7<br />
          20600 Eibar. Gipuzkoa.</p>
      </div>
      <div className="box-form-contact">
        <Form/>
      </div>

    </div>
    <Map />
  </div>
)

export default Contact
