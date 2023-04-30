import React from 'react'
import { ServicesProvider } from '../hooks/use-services'

const wrapRootElement = (props) => (

  <ServicesProvider>
    {props.element}
  </ServicesProvider>
)

export default wrapRootElement
