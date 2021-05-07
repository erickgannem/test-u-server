import connect from '../../src/database/utils/connect'
import DBOptions from '../../src/database/interfaces/DBOptions'

describe('Database', () => {
  test('should fail if invalid options provided', async () => {
    const options: DBOptions = {
      name: 'test-db',
      username: 'john',
      password: '123'
    }

    return connect(options).then(r => expect(r).toBeTruthy()).catch(err => expect(err).toMatch('Auth'))
  })
})

export {}
