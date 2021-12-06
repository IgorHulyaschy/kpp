import { EmployeeDto, EmployeeView } from '.'

export interface IEmployeeRepository {
  save: (body: EmployeeDto, code: string) => Promise<EmployeeView>
  deleteCode(email: string): Promise<void>
  getEmployee(email: string): Promise<EmployeeView>
  verifyEmail(email: string): Promise<void>
  getEmployeeByPassport(passport: string): Promise<EmployeeView | null>
}
