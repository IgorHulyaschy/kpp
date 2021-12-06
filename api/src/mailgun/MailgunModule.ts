import { Container } from 'inversify'
import { TYPES } from './constants/TYPES'
import { IMailgunService } from './interfaces/IMailgunService'
import { MailgunService } from './MailgunService'

const mailgunContainer = new Container()

mailgunContainer.bind<IMailgunService>(TYPES.MailgunService).to(MailgunService).inSingletonScope()

export default mailgunContainer
