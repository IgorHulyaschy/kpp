import Koa, { Context } from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-body'
import cors from '@koa/cors'

import employeeRouter from './api/employee/EmployeeRouter'
import contractRouter from './api/contract/ContractRouter'

import errorCatcher from './middlewares/errorCatcher'

export interface AppContext extends Context {}

const app = new Koa()

app.use(cors())
app.use(errorCatcher)
const router = new Router()

app.use(bodyParser())
router.use(employeeRouter.middleware())
router.use(contractRouter.middleware())
app.use(router.middleware())

export default app
