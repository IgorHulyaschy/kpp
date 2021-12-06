import { CustomerDto } from '.'

export interface ICustomerService {
  createCustomer: (dto: CustomerDto) => Promise<number>
}
