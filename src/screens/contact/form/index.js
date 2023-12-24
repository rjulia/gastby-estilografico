import React from 'react'
import { Formik, FieldArray } from 'formik'
import { Link, navigate } from 'gatsby'
import axios from 'axios'
import '../contact.scss'
import qs from 'qs'

const Form = () => {
  // const router = useRouter()
  const servicesCollection = [
    { value: 'web', label: 'Página web' },
    { value: 'branding', label: 'Branding / Creación de marca' },
    { value: 'catalogo', label: 'Catálogo' },
    { value: 'rotulo', label: 'Rótulo / Rotulación' },
    { value: 'senaletica', label: 'Señalética' },
    { value: 'video', label: 'Video' },
    { value: 'packaging', label: 'Packaging' },
    { value: 'fotografia', label: 'Fotografía' },
    { value: 'expositores', label: 'Expositores y Carteles' },
  ]

  return (
    <Formik
      initialValues={{
        name: '',
        telephone: '',
        comments: '',
        services: [],
        accept: false,
      }}
      validateOnChange={true}
      validate={(values) => {
        const errors = {}
        if (!values.name) {
          errors.name = 'El nombre es requerido'
        }
        if (!values.telephone) {
          errors.telephone = 'El teléfono es requerido'
        }
        if (values.services.length <= 0) {
          errors.services = 'Tiene al menos que selccionar un campo'
        }
        if (!values.accept) {
          errors.accept = 'Tiene que aceptar las condiciones de aviso legal'
        }
        console.error(errors)
        return errors
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true)
        qs.stringify(values)
        console.log('🚀 ~ file: index.js:52 ~ onSubmit={ ~ qs.stringify(values):', qs.stringify(values))
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          data: qs.stringify(values),
          url: '/',
        }
        try {
          await axios(options)
          navigate('/enviado/')
        } catch (e) {
          console.log('🚀 ~ file: index.js:80 ~ onSubmit={ ~ e:', e)
        } finally {
          setSubmitting(false)
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form name="contact-estilografico" data-netlify="true" onSubmit={handleSubmit} data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact-estilografico"/>
          <div>
            <div className='left-form'>
              <div className='box-input'>
                <label>Nombre completo*</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <span className="error">{errors.name && touched.name && errors.name}</span>
              </div>
              <div className='box-input'>
                <label>¿Qué servicios buscas?*</label>
                <FieldArray
                  name="services"
                  render={(arrayHelpers) => (
                    <div>
                      {servicesCollection.map((service) => (
                        <label key={service.value} className="checkbox-contact">
                          <p>{service.label}</p>
                          <input
                            name="services"
                            type="checkbox"
                            value={service.value}
                            checked={values.services.includes(service.value)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                arrayHelpers.push(service.value)
                              } else {
                                const idx = values.services.indexOf(service.value)
                                arrayHelpers.remove(idx)
                              }
                            }}
                          />
                          <span className="checkmark"></span>

                        </label>
                      ))}
                    </div>
                  )}
                />
                <span className="error">{errors.services && touched.services && errors.services}</span>
              </div>
            </div>
            <div className='right-form'>
              <div className='box-input'>
                <label>Teléfono*</label>
                <input
                  type="text"
                  name="telephone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.telephone}
                />
                <span className="error">{errors.telephone && touched.telephone && errors.telephone}</span>
              </div>
              <div className='box-input'>
                <label>Comentario (Breve descripción)</label>
                <input
                  type="text"
                  name="comments"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.comments}
                />
              </div>

            </div>
          </div>
          <div className='box-input'>
            <label className="checkbox-contact">
              <p>Acepto las condiciones del <Link to="pagina/aviso-legal">Aviso legal</Link></p>
              <input
                name="accept"
                type="checkbox"
                value={values.accept}
                checked={values.accept}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </label>
            <span className="error">{errors.accept && touched.accept && errors.accept}</span>
          </div>
          <button
            className='button-send-form'
            type="submit"
            disabled={isSubmitting}>
            Enviar
          </button>
        </form>
      )}
    </Formik>
  )
}

export default Form
