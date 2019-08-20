import axios from 'axios'

const baseDomain = 'https://localhost:9530'
const baseURL = `${baseDomain}/api/v1`

export default (headers) => axios.create({
  baseURL,
  headers: headers
  // withCredentials: true
})
