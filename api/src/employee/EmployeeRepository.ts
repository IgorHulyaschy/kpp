import { injectable } from 'inversify'

import * as Interfaces from './interfaces'
import { EmployeeDto, EmployeeView } from './interfaces'

import db from '../database/DatabaseConnection'

@injectable()
export class EmployeeRepository implements Interfaces.IEmployeeRepository {
  async save(
    { fname, lname, age, position, passport, email }: EmployeeDto,
    code: string
  ): Promise<EmployeeView> {
    const rep = await db
      .query(
        `
      INSERT INTO employee (fname, lname, age, position, passport, email, code_verify) 
      VALUES ('${fname}', '${lname}', ${age}, '${position}', '${passport}', '${email}', '${code}')
      RETURNING *
    `
      )
      .catch((err) => {
        if (err.constraint === 'employee_email_key')
          throw new Error('Employee with the same email already exist')
        else if (err.constraint === 'employee_passport_key')
          throw new Error('Employee with the same poassport already exist')
        throw err
      })
    return { ...rep.rows[0] }
  }

  async deleteCode(email: string): Promise<void> {
    db.query(`
      UPDATE employee
      SET code_verify = ''
      WHERE email = '${email}'
    `)
  }

  async getEmployee(email: string): Promise<EmployeeView> {
    const resp = await db.query(`
      SELECT *
      FROM employee
      WHERE email = '${email}'
    `)
    return { ...resp.rows[0] }
  }

  async getEmployeeByPassport(passport: string): Promise<EmployeeView | null> {
    const resp = await db.query(`
      SELECT *
      FROM employee
      WHERE passport = '${passport}'
    `)
    if (!resp.rowCount) return null
    return { ...resp.rows[0] }
  }

  async verifyEmail(email: string): Promise<void> {
    db.query(`
      UPDATE employee
      SET email_confirmed = true
      WHERE email = '${email}'
    `)
  }
}
