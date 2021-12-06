import 'reflect-metadata'
import { Container } from 'inversify'

import { TYPES } from './constants/TYPES'
import * as Interfaces from './interfaces'
import { PresenceRepository } from './PresenceRepository'
import { PresenceService } from './PresenceService'

const presenceContiner = new Container()

presenceContiner
  .bind<Interfaces.IRepository>(TYPES.PresenceRepository)
  .to(PresenceRepository)
  .inSingletonScope()
presenceContiner
  .bind<Interfaces.IPresenceService>(TYPES.PresenceService)
  .to(PresenceService)
  .inSingletonScope()

export default presenceContiner
