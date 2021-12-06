import { AppContext } from '../../app'

export interface IEmployeeContoller {
  createEmployee: (ctx: AppContext) => Promise<void>
  getPresence: (ctx: AppContext) => Promise<void>
  verifyEmail: (ctx: AppContext) => Promise<void>
  getGreenPass(ctx: AppContext): Promise<void>
}
