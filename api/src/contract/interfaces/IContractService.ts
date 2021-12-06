import { CustomerDto } from '../../customer/interfaces'

export interface IContractService {
  createContract(dto: CustomerDto, passport: string): Promise<void>
  exit(passport: string): Promise<{ fname: string; lname: string }>
}
