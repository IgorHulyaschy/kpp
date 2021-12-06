import { PresenceService } from '../../presence/PresenceService'

export interface PresenceProvider extends Pick<PresenceService, 'addToPresence' | 'getPresence'> {}
