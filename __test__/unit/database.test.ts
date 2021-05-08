import Database from '../../src/database'
import Credentials from '../../src/database/interfaces/Credentials'

describe('Database', () => {
  const { connect } = new Database()

  test('should fail with invalid credentials', async () => {
    const mockCredentials: Credentials = {
      name: 'database',
      username: 'user',
      password: '123'
    }

    await expect(connect(mockCredentials)).rejects.toMatchObject({ code: 8000 })
  })

  // test('should pass with valid credentials', async () => {
  //   const { DB_NAME, DB_USER, DB_PASSWORD } = process.env

  //   const validCredentials: Credentials = {
  //     name: DB_NAME,
  //     username: DB_USER,
  //     password: DB_PASSWORD
  //   }
  // })
})
