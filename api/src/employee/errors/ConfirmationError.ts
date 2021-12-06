export class ConfirmationError extends Error {
  constructor() {
    super('Verify code is not valid')
  }
}
