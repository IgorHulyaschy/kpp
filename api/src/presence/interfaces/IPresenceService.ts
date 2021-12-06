import { PresenceDto } from './PresenceDto'

export interface IPresenceService {
  getPresence: () => Promise<PresenceDto[]>
  addToPresence: (id_employee: number) => Promise<void>
  passTrough(id: number): Promise<void>
}
