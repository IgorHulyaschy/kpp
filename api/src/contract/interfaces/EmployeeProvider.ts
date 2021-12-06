import { EmployeeService } from '../../employee/EmployeeService'

export interface EmployeeProvider extends Pick<EmployeeService, 'getByPassport'> {}
