import Repository from '@/api/Repository'

const resource = '/application/healthCheck'
export default {
  get () {
    let headers = {'Authorization': 'Bearer token!'}
    return Repository(headers).get(`${resource}`)
  }
}
