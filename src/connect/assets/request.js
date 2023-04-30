import axios from 'axios'
import { queryAsset } from './queries'
import { url } from '../../constants'

export const getQueryAsset = async (id) => {
  try {
    const response = await axios({
      method: 'post',
      url,
      data: {
        query: queryAsset(`"${id}"`),
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GATSBY_CONTENFUL_TOKEN}`,
      },
    })

    return response.data.data
  } catch (error) {
    console.error('error', error)
  }
}
