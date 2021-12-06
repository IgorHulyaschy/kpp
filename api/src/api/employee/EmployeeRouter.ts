import Router from 'koa-joi-router'
import { TYPES } from '../../employee/constants'
import employeeContainer from '../../employee/EmployeeModule'
import { IEmployeeContoller } from '../../employee/interfaces'

export const Controller = employeeContainer.get<IEmployeeContoller>(TYPES.EmployeeController)
const router = Router()
router.post('/employee', Controller.createEmployee)
router.get('/employee/presence', Controller.getPresence)
router.put('/employee/email-confirmation', Controller.verifyEmail)
router.get('/employee/:passport', Controller.getGreenPass)

export default router
