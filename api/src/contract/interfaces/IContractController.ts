import { AppContext } from '../../app'

export interface IContractController {
  createContract(ctx: AppContext): Promise<void>
  exit(ctx: AppContext): Promise<void>
}
