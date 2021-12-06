import { AppContext } from '../../app'

export interface ICustomerController {
  createCustomer: (ctx: AppContext) => Promise<void>
}
