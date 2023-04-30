import { createContext } from 'react'

const ServicesContext = createContext({
  services: [],
  service: {},
  nextProject: {},
  totalProjects: 0,
  loading: true,
  currentId: '',
  apiGetService: () => {},
})

export default ServicesContext