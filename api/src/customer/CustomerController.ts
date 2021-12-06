import { inject, injectable } from 'inversify'
import { AppContext } from '../app'
import { TYPES } from './constants'
import * as Interfaces from './interfaces'

@injectable()
export class CustomerController {
  constructor(
    @inject(TYPES.CustomerService) private readonly service: Interfaces.ICustomerService
  ) {}

  createCustomer = async (ctx: AppContext): Promise<void> => {
    const body = ctx.request.body
    await this.service.createCustomer(body)
    ctx.status = 201
    ctx.body = {
      message: 'created',
    }
  }
}
