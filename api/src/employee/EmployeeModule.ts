import 'reflect-metadata'
import { Container } from 'inversify'

import { TYPES } from './constants'
import { TYPES as presTYPES } from '../presence/constants/TYPES'
import { TYPES as mailTYPES } from '../mailgun/constants/TYPES'

import { EmployeeRepository } from './EmployeeRepository'
import { EmployeeService } from './EmployeeService'
import * as Interfaces from './interfaces'
import { EmployeeController } from './EmployeeController'
import { PresenceProvider } from './interfaces/PresenceProvider'

import presenceContiner from '../presence/PresenceModule'
import { MailgunProvider } from './interfaces/MailgunProvider'
import mailgunContainer from '../mailgun/MailgunModule'

const employeeContainer = new Container()

employeeContainer
  .bind<Interfaces.IEmployeeRepository>(TYPES.EmployeeRepository)
  .to(EmployeeRepository)
  .inSingletonScope()
employeeContainer
  .bind<Interfaces.IEmployeeService>(TYPES.EmployeeService)
  .to(EmployeeService)
  .inSingletonScope()
employeeContainer
  .bind<PresenceProvider>(TYPES.PresenceProvider)
  .toConstantValue(presenceContiner.get(presTYPES.PresenceService))
employeeContainer
  .bind<MailgunProvider>(TYPES.MailgunProvider)
  .toConstantValue(mailgunContainer.get(mailTYPES.MailgunService))
employeeContainer
  .bind<Interfaces.IEmployeeContoller>(TYPES.EmployeeController)
  .to(EmployeeController)
  .inSingletonScope()
export default employeeContainer
