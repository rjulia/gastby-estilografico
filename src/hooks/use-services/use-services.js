import { useContext } from 'react'
import ServicesContexts from './services-context'

/**
 * useLink
 * The custom hook which provided to external use via context
 */
const useServices = () => {
  const context = useContext(ServicesContexts)
  return context
}

export default useServices
