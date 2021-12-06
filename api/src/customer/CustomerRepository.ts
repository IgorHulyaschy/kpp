import { injectable } from 'inversify'

import * as Interfaces from './interfaces'
import db from '../database/DatabaseConnection'
import { CustomerDto } from './interfaces'

@injectable()
export class CustomerRepository implements Interfaces.ICustomerRepository {
  async save({ fname, lname }: CustomerDto): Promise<number> {
    const res = await db.query(`
      INSERT INTO customer (fname, lname)
      VALUES ('${fname}', '${lname}')
      RETURNING *
    `)
    return res.rows[0].id
  }
}
