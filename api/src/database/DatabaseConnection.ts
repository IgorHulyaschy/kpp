import { Pool, ClientConfig } from 'pg'

import conf from 'config'

const dbConfig = {
  connectionString: conf.get('database.url') as string,
}

class Database {
  private readonly pool: Pool

  constructor(config: ClientConfig) {
    this.pool = new Pool(config)
  }

  query(sql: string) {
    return this.pool.query(sql)
  }

  close() {
    this.pool.end()
  }
}

export default new Database(dbConfig)
