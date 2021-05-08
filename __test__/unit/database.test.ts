import Database from '../../src/database'
import DBOptions from '../../src/database/interfaces/DBOptions'

describe('Database', () => {
  const { connect } = new Database()

  test('should fail if invalid credentials are provided', async () => {
    const mockOptions: DBOptions = {
      name: 'database',
      username: 'user',
      password: '123'
    }

    await expect(connect(mockOptions)).rejects.toMatchObject({ code: 8000 })
  })
})

export {}
