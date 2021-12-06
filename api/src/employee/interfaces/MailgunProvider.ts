import { MailgunService } from '../../mailgun/MailgunService'

export interface MailgunProvider extends Pick<MailgunService, 'send'> {}
