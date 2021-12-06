import { injectable } from 'inversify'
import db from '../database/DatabaseConnection'
import { IContractRepository } from './interfaces'

@injectable()
export class ContractRepository implements IContractRepository {
  async save(id_employee: number, id_customer: number): Promise<void> {
    await db.query(`
      INSERT INTO contract (id_customer, id_employee, date, present)
      VALUES (${id_customer}, ${id_employee}, '${new Date().toString()}', ${true})
    `)
    db.query(`
    UPDATE presence
SET present = true
WHERE id_employee = (SELECT id FROM employee WHERE id = '${id_employee}')
    `)
  }

  async updateStatus(passport: string): Promise<{ fname: string; lname: string }> {
    const resp = await db.query(`
      SELECT contract.id
      FROM contract
      JOIN employee
      ON employee.id = id_employee
      WhERE employee.passport = '${passport}'
    `)
    const cusomerResponce = await db.query(`
      UPDATE contract
      SET present = false,
          date = '${new Date().toString()}'
      WHERE id = ${resp.rows[0].id}
      RETURNING *
    `)
    const customer = await db.query(`
      SELECT fname, lname
      FROM customer
      WHERE id = ${cusomerResponce.rows[0].id_customer}
    `)
    db.query(`
    UPDATE presence
    SET present = true
    WHERE id_employee = (SELECT id FROM employee WHERE passport = '${passport}')
    `)
    return customer.rows[0]
  }
}
