import HealthCheckRepository from './repositories/HealthCheckRepository'

const repositories = {
  HealthCheck: HealthCheckRepository
}

export const RepositoryFactory = {
  get: name => repositories[name]
}
