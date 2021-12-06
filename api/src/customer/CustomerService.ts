import { inject, injectable } from 'inversify'
import { TYPES } from './constants'
import * as Interfaces from './interfaces'

@injectable()
export class CustomerService implements Interfaces.ICustomerService {
  constructor(
    @inject(TYPES.CustomerRepository) private readonly repository: Interfaces.ICustomerRepository
  ) {}

  async createCustomer(dto: Interfaces.CustomerDto): Promise<number> {
    return this.repository.save(dto)
  }
}
