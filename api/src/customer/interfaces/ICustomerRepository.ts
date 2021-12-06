import { CustomerDto } from '.'

export interface ICustomerRepository {
  save({ fname, lname }: CustomerDto): Promise<number>
}
