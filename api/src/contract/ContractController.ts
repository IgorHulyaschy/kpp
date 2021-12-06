import { inject, injectable } from 'inversify'
import { AppContext } from '../app'
import { TYPES } from './constants/TYPES'
import { IContractController } from './interfaces'
import { IContractService } from './interfaces/IContractService'

@injectable()
export class ContractContoller implements IContractController {
  constructor(@inject(TYPES.ContractService) private readonly service: IContractService) {}

  createContract = async (ctx: AppContext): Promise<void> => {
    const { fname, lname, passport } = ctx.request.body
    try {
      await this.service.createContract({ fname, lname }, passport)
      ctx.status = 200
      ctx.body = {
        message: 'You are welcome :)',
      }
    } catch (err: any) {
      ctx.status = 400
      ctx.body = {
        message: err.message,
      }
      throw err
    }
  }

  exit = async (ctx: AppContext): Promise<void> => {
    try {
      const { passport } = ctx.request.body
      const { fname, lname } = await this.service.exit(passport)
      ctx.status = 200
      ctx.body = {
        message: 'See you soon',
        fname,
        lname,
      }
    } catch (e: any) {
      ctx.status = 400
      ctx.body = {
        message: e.message,
      }
      throw e
    }
  }
}
