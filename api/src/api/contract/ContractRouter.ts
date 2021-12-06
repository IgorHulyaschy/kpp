import Router from 'koa-joi-router'
import { TYPES } from '../../contract/constants/TYPES'
import container from '../../contract/ContractModule'
import { IContractController } from '../../contract/interfaces'

const Controller = container.get<IContractController>(TYPES.ContractController)

const router = Router()
router.post('/contract', Controller.createContract)
router.put('/contract', Controller.exit)

export default router
