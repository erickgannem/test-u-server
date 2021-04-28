import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import dotenv from 'dotenv'

import routes from './routes'
import errorMiddleware from './middlewares/errorMiddleware'

export default class App {
  server: express.Application
  constructor () {
    dotenv.config({})

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

  errors () {
    this.server.use(errorMiddleware)
  }
}
