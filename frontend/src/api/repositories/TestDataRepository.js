import Repository from '@/api/Repository'

const resource = '/deliverySites/1'
export default {
  get (headers) {
    return Repository(headers).get(`${resource}`)
  }
}
