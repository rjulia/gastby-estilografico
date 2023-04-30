import axios from 'axios'
import { queryAddress } from './queries'
import { url } from '../../constants'

export const getAddress = async () => {
  try {
    const response = await axios({
      method: 'post',
      url,
      data: {
        query: queryAddress,
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
