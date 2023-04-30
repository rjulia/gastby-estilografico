import axios from 'axios'
import { serviceBySlug, queryServicies } from './queries'
import { url } from '../../constants'

export const getQueryServices = async () => {
  try {
    const response = await axios({
      method: 'post',
      url,
      data: {
        query: queryServicies,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GATSBY_CONTENFUL_TOKEN}`,
      },
    })
    return response.data
  } catch (error) {
    console.error('error', error)
  }
}

export const getQueryService = async (slug) => {
  try {
    const response = await axios({
      method: 'post',
      url,
      data: {
        query: serviceBySlug(`"${slug}"`),
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GATSBY_CONTENFUL_TOKEN}`,
      },
    })

    return response.data
  } catch (error) {
    console.error('error', error)
  }
}
