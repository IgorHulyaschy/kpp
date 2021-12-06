import { inject, injectable } from 'inversify'
import { TYPES } from './constants'

import * as Interfaces from './interfaces'

import { IPresenceService } from '../presence/interfaces'
import { PresenceDto } from '../presence/interfaces/PresenceDto'
import { MailgunProvider } from './interfaces/MailgunProvider'
import { ConfirmationError } from './errors/ConfirmationError'
import { EmployeeView } from './interfaces'
import { NotFoundError } from './errors/NotFoundError'

@injectable()
export class EmployeeService implements Interfaces.IEmployeeService {
  constructor(
    @inject(TYPES.EmployeeRepository)
    private readonly repository: Interfaces.IEmployeeRepository,
    @inject(TYPES.PresenceProvider)
    private readonly presenceProvider: IPresenceService,
    @inject(TYPES.MailgunProvider) private readonly mailgunProvider: MailgunProvider
  ) {}

  async createEmployee(dto: Interfaces.EmployeeDto): Promise<void> {
    const code = await this.mailgunProvider.send(dto.email)
    const resp = await this.repository.save(dto, code)
    await this.presenceProvider.addToPresence(resp.id)
  }

  async getPresence(): Promise<PresenceDto[]> {
    return this.presenceProvider.getPresence()
  }

  async deleteCodeVerify(email: string): Promise<void> {
    return this.repository.deleteCode(email)
  }

  async verifyEmail(email: string, code: string): Promise<void> {
    const employee = await this.repository.getEmployee(email)
    if (employee.code_verify !== code) throw new ConfirmationError()
    return this.repository.verifyEmail(email)
  }

  async getGreenPass(passport: string): Promise<void> {
    const employee = await this.repository.getEmployeeByPassport(passport)
    if (!employee) throw new NotFoundError()
    return this.presenceProvider.passTrough(employee.id)
  }

  async getByPassport(passport: string): Promise<number> {
    const res = await this.repository.getEmployeeByPassport(passport)
    if (!res) throw new NotFoundError()
    return res.id
  }
}
