import { inject, injectable } from 'inversify'
import { CustomerDto } from '../customer/interfaces'
import { TYPES } from './constants/TYPES'
import { EmployeeProvider, IContractRepository } from './interfaces'
import { CustomerProvider } from './interfaces/CustomerProvider'
import { IContractService } from './interfaces/IContractService'

@injectable()
export class ContracService implements IContractService {
  constructor(
    @inject(TYPES.ContractRepository) private readonly repository: IContractRepository,
    @inject(TYPES.CustomerProvider) private readonly customerProvider: CustomerProvider,
    @inject(TYPES.EmployeeProvider) private readonly employeeProvider: EmployeeProvider
  ) {}

  async createContract(dto: CustomerDto, passport: string): Promise<void> {
    const id_cutomer = await this.customerProvider.createCustomer(dto)
    const id_employee = await this.employeeProvider.getByPassport(passport)
    return this.repository.save(id_employee, id_cutomer)
  }

  async exit(passport: string): Promise<{ fname: string; lname: string }> {
    return this.repository.updateStatus(passport)
  }
}
