import HealthCheckRepository from './repositories/HealthCheckRepository'
import TestDataRepository from '@/api/repositories/TestDataRepository'

const repositories = {
  HealthCheck: HealthCheckRepository,
  TestData: TestDataRepository
}

export const RepositoryFactory = {
  get: name => repositories[name]
}
