export class NotFoundError extends Error {
  constructor() {
    super('Employee not found')
  }
}
