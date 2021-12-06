import { inject, injectable } from 'inversify'

import { AppContext } from '../app'

import { TYPES } from './constants'
import { ConfirmationError } from './errors/ConfirmationError'
import { NotFoundError } from './errors/NotFoundError'
import * as Interfaces from './interfaces'

@injectable()
export class EmployeeController implements Interfaces.IEmployeeContoller {
  constructor(
    @inject(TYPES.EmployeeService) private readonly service: Interfaces.IEmployeeService
  ) {}

  createEmployee = async (ctx: AppContext): Promise<void> => {
    const body = ctx.request.body
    try {
      await this.service.createEmployee(body)
      ctx.status = 201
      ctx.body = { message: 'verify your email' }
      setTimeout(() => {
        this.service.deleteCodeVerify(body.email)
      }, 1000 * 300)
    } catch (err: any) {
      ctx.status = 400
      ctx.body = {
        message: err.message,
      }
      throw err
    }
  }

  getPresence = async (ctx: AppContext): Promise<void> => {
    try {
      const employees = await this.service.getPresence()
      ctx.status = 200
      ctx.body = {
        employees,
      }
    } catch (e: any) {
      ctx.status = 400
      ctx.body = {
        message: e.message,
      }
      throw e
    }
  }

  verifyEmail = async (ctx: AppContext): Promise<void> => {
    const { email, code } = ctx.request.body
    try {
      await this.service.verifyEmail(email, code)
      ctx.status = 200
    } catch (err) {
      if (err instanceof ConfirmationError) {
        ctx.status = 400
        ctx.body = {
          message: err.message,
        }
      }
      throw err
    }
  }

  getGreenPass = async (ctx: AppContext): Promise<void> => {
    const { passport } = ctx.request.params
    try {
      await this.service.getGreenPass(passport)
      ctx.status = 200
      ctx.body = {
        message: 'You are welcome',
      }
    } catch (err) {
      if (err instanceof NotFoundError) {
        ctx.status = 404
        ctx.body = {
          message: err.message,
        }
      }
    }
  }
}
