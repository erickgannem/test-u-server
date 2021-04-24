import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

import routes from './routes'

export default class App {
  server: express.Application
  constructor () {
    this.server = express()
    this.middlewares()
    this.routes()
    this.errors()
  }

  middlewares () {
    this.server.use(helmet())
    this.server.use(cors())
  }

  routes () {
    this.server.use(routes)
  }

  errors () {}
}
