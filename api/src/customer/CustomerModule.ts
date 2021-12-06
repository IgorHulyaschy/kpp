import 'reflect-metadata'
import { Container } from 'inversify'

import * as Interfaces from './interfaces'
import { TYPES } from './constants'
import { CustomerController } from './CustomerController'
import { CustomerRepository } from './CustomerRepository'
import { CustomerService } from './CustomerService'

const customerContainer = new Container()

customerContainer
  .bind<Interfaces.ICustomerRepository>(TYPES.CustomerRepository)
  .to(CustomerRepository)
  .inSingletonScope()
customerContainer
  .bind<Interfaces.ICustomerService>(TYPES.CustomerService)
  .to(CustomerService)
  .inSingletonScope()
customerContainer
  .bind<Interfaces.ICustomerController>(TYPES.CustomerController)
  .to(CustomerController)
  .inSingletonScope()

export default customerContainer
