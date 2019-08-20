import Repository from '@/api/Repository'

const resource = '/application/healthCheck'
export default {
  get (headers) {
    return Repository(headers).get(`${resource}`)
  }
}
