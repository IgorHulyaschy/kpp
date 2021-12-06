import { inject, injectable } from 'inversify'

import { TYPES } from './constants/TYPES'
import * as Interfaces from './interfaces'
import { PresenceDto } from './interfaces/PresenceDto'

@injectable()
export class PresenceService implements Interfaces.IPresenceService {
  constructor(
    @inject(TYPES.PresenceRepository) private readonly repository: Interfaces.IRepository
  ) {}

  async getPresence(): Promise<PresenceDto[]> {
    return this.repository.selectAllPresents()
  }

  async addToPresence(id_employee: number): Promise<void> {
    this.repository.saveEmployee(id_employee)
  }

  async passTrough(id: number): Promise<void> {
    this.repository.passTrough(id)
  }
}
