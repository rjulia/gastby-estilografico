import axios from 'axios'
import { queryCarouselHome } from './queries'
import { url } from '../../constants'

export const getCarouselHome = async () => {
  try {
    const response = await axios({
      method: 'post',
      url,
      data: {
        query: queryCarouselHome,
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
