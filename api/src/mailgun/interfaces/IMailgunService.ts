export interface IMailgunService {
  createVerifyCode(): string
  send(to: string): Promise<string>
}
