import { PresenceDto } from './PresenceDto'

export interface IRepository {
  saveEmployee: (id_employee: number) => Promise<void>
  selectAllPresents: () => Promise<PresenceDto[]>
  passTrough(id: number): Promise<void>
}
