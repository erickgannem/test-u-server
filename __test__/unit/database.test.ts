import dotenv from 'dotenv'

import Database from '../../src/database'

describe('Database', () => {
  const { connect, disconnect } = new Database()
  const { DB_NAME, DB_PASSWORD, DB_USER } = process.env

  beforeAll(() => {
    dotenv.config({})
  })

  beforeEach(async () => {
    await connect({
      username: DB_USER,
      password: DB_PASSWORD,
      name: DB_NAME
    })
  })
  afterEach(async () => {
    await disconnect()
  })
})
