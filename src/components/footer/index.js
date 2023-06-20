import _ from 'lodash'
import React, { useMemo, useState, useEffect } from 'react'
import { Link } from 'gatsby'
import logo from '../../assets/images/logo-nuevo-con-tilde-roja.png'
import './footer.scss'
import { getPages } from '../../connect/pages/request'
import { getSocialMedia } from '../../connect/social-media/request'
import { getAddress } from '../../connect/address/request'

const Footer = ({ location }) => {
  const [pages, setPages] = useState([])
  const [socialMediaItems, setSocialMediaItems] = useState([])
  const [address, setAddress] = useState([])

  const getAllSocialMedia = useMemo(() => () => {
    getSocialMedia().then((response) => {
      setSocialMediaItems(_.get(response, 'data.redesSocialesCollection.items'))
    })
  }, [])

  const getAllPages = useMemo(() => () => {
    getPages().then((response) => {
      setPages(_.get(response, 'data.pageCollection.items'))
    })
  }, [])

  const getAllAddress = useMemo(() => () => {
    getAddress().then((response) => {
      setAddress(_.get(response, 'data.addressCollection.items'))
    })
  }, [])

  useEffect(() => {
    getAllAddress()
    getAllSocialMedia()
    getAllPages()
  }, [])

  return (
    <div className="container-fluid-home">
      <div className="container-footer">
        {
          !_.includes(location.pathname, 'contacto') && (
            <div className="container-contact-footer">
              <div className="message-contact-footer">
                <p>¿Tienes un proyecto en mente?</p>
              </div>
              <Link to="/contacto" className="button-contanct-footer">
                <div><p>CONTACTA CON NOSOTROS</p></div>
              </Link>
            </div>
          )
        }

        <div className="box-footer">
          <div className="box-logo-footer">
            <div>
              <Link
                to={'/'}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <p className="box-logo-footer-copyright">Copyright<span>©</span>ESTILOGRÁFICO</p>
          </div>
          <div className="box-info-footer">
            <div>
              <h3>CONTACTO:</h3>
              <div className="row">
                {
                  _.map(address, (item, idx) => (
                    <div className="col" key={idx}>
                      <p>{_.get(item, 'address')}</p>
                      <p>{_.get(item, 'postalCode')}</p>
                      <span>{_.get(item, 'phone')}</span>
                    </div>
                  ))
                }
              </div>
            </div>
            <div>
              <h3>SÍGUENOS:</h3>
              {
                _.map(socialMediaItems, (socialMediaItem) => (
                  <p key={socialMediaItem.titulo}><a target="_blank" rel="noreferrer" href={socialMediaItem.link}> {socialMediaItem.titulo}</a></p>
                ))
              }
            </div>
            <div>
              <h3>INFORMACION:</h3>
              {
                pages && _.map(pages, (page) => (
                  <Link
                    key={_.get(page, 'slug')}
                    to={`/pagina/${page.slug}/`}>
                    <p>{_.get(page, 'titulo')}</p>
                  </Link>

                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
