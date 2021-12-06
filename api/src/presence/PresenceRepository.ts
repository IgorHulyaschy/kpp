import { injectable } from 'inversify'

import { IRepository } from './interfaces'
import db from '../database/DatabaseConnection'
import { PresenceDto } from './interfaces/PresenceDto'

@injectable()
export class PresenceRepository implements IRepository {
  async saveEmployee(id_employee: number): Promise<void> {
    db.query(`
      INSERT INTO presence (id_employee, present, date) 
      VALUES (${id_employee}, ${false}, '${new Date().toString()}')
    `)
  }

  async selectAllPresents(): Promise<PresenceDto[]> {
    const resp = await db.query(
      `
      SELECT fname, lname, presence.date
      FROM employee
      JOIN presence
      ON presence.id_employee = employee.id
      WHERE present = true
    `
    )
    return resp.rows
  }

  async passTrough(id: number): Promise<void> {
    const resp = await db.query(`
      SELECT present
      FROM presence 
      WHERE id_employee = ${id}
    `)
    db.query(`
      UPDATE presence
      SET present = ${!resp.rows[0].present},
          date = '${new Date().toString()}'
      WHERE id_employee = ${id}
    `)
  }
}
