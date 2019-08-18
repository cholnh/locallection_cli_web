import axios from 'axios'

const baseDomain = 'https://www.pomangam.com:9530'
const baseURL = `${baseDomain}/api/v1`

export default (headers) => axios.create({
  baseURL,
  headers: headers
})
