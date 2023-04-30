import axios from 'axios'
import { querySocialMedia } from './queries'
import { url } from '../../constants'

export const getSocialMedia = async () => {
  try {
    const response = await axios({
      method: 'post',
      url,
      data: {
        query: querySocialMedia,
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
