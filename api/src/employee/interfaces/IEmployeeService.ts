import { EmployeeView } from '.'
import { PresenceDto } from '../../presence/interfaces/PresenceDto'
import { EmployeeDto } from './EmployeeDto'

export interface IEmployeeService {
  createEmployee: (body: EmployeeDto) => Promise<void>
  getPresence: () => Promise<PresenceDto[]>
  deleteCodeVerify(email: string): Promise<void>
  verifyEmail(email: string, code: string): Promise<void>
  getGreenPass(passport: string): Promise<void>
}
