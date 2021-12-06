import { injectable } from 'inversify'
import Mailgun from 'mailgun.js'
import formData from 'form-data'
import config from 'config'
import { IMailgunService } from './interfaces/IMailgunService'

@injectable()
export class MailgunService implements IMailgunService {
  private readonly mailgun: Mailgun

  constructor() {
    this.mailgun = new Mailgun(formData)
  }

  createVerifyCode(): string {
    let codeVerify: string = ''

    for (let i = 0; i < 4; i++) {
      const num = Math.floor(Math.random() * 10)
      codeVerify += String(num)
    }

    return codeVerify
  }

  async send(to: string): Promise<string> {
    const code = this.createVerifyCode()
    try {
      await this.mailgun
        .client({ username: config.get('mailgun.username'), key: config.get('mailgun.apiKey') })
        .messages.create(config.get('mailgun.domain'), {
          from: config.get('mailgun.from'),
          to,
          subject: code,
          text: 'Enter this code to verify your email',
        })
    } catch (e) {
      throw e
    }
    return code
  }
}
