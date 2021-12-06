import { Container } from 'inversify'
import { TYPES } from './constants/TYPES'
import { ContractRepository } from './ContractRepository'
import {
  CustomerProvider,
  EmployeeProvider,
  IContractController,
  IContractRepository,
} from './interfaces'
import employeeContainer from '../employee/EmployeeModule'
import customerContainer from '../customer/CustomerModule'
import { TYPES as empTYPES } from '../employee/constants'
import { TYPES as custTYPES } from '../customer/constants'
import { ContracService } from './ContractService'
import { IContractService } from './interfaces/IContractService'
import { CustomerService } from '../customer/CustomerService'
import { ContractContoller } from './ContractController'

const contractContainer = new Container()

contractContainer
  .bind<IContractRepository>(TYPES.ContractRepository)
  .to(ContractRepository)
  .inSingletonScope()
contractContainer
  .bind<EmployeeProvider>(TYPES.EmployeeProvider)
  .toConstantValue(employeeContainer.get(empTYPES.EmployeeService))
contractContainer
  .bind<CustomerProvider>(TYPES.CustomerProvider)
  .toConstantValue(customerContainer.get(custTYPES.CustomerService))
contractContainer
  .bind<IContractService>(TYPES.ContractService)
  .to(ContracService)
  .inSingletonScope()
contractContainer
  .bind<IContractController>(TYPES.ContractController)
  .to(ContractContoller)
  .inSingletonScope()

export default contractContainer
