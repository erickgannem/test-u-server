import App from '../../src/app'

describe('App file', () => {
  const app = new App()
  test('A instance of App exists', () => {
    expect(app).toBeInstanceOf(App)
  })
  test('A instance of App should have middlewares', () => {
    expect(app).toHaveProperty('middlewares')
  })
  test('A instance of App should have routes', () => {
    expect(app).toHaveProperty('routes')
  })
  test('A instance of App should have error handler', () => {
    expect(app).toHaveProperty('errors')
  })
})
