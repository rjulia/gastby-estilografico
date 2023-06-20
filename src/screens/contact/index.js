/* eslint-disable max-len */
import React, {
  useMemo,
  useState,
  useEffect,
} from 'react'
import _ from 'lodash'
import './contact.scss'
import Map from './googleMap'
import Form from './form'
import { Helmet } from '../../components'
import { getAddress } from '../../connect/address/request'

const Contact = () => {
  const [address, setAddress] = useState([])

  const getAllAddress = useMemo(() => () => {
    getAddress().then((response) => {
      setAddress(_.get(response, 'data.addressCollection.items'))
    })
  }, [])

  useEffect(() => {
    getAllAddress()
  }, [])

  return (
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
          {
            _.map(address, (item, idx) => (
              <div className="col" key={idx}>
                <p>Estudio de Comunicación, Diseño gráfico y Publicidad a medida.</p>
                <br />
                <p className="phone">{_.get(item, 'phone')}</p>
                <br />
                <p>info@estilografico.com</p>
                <br />
                <p>{_.get(item, 'address')}</p>
                <p style={{
                  marginTop: '0px',
                }}>{_.get(item, 'postalCode')}</p>
              </div>
            ))
          }
        </div>
        <div className="box-form-contact">
          <Form />
        </div>

      </div>
      <Map />
    </div>
  )
}

export default Contact
