import DBOptions from './interfaces/DBOptions'
import connect from './utils/connect'

const { DB_NAME, DB_USER, DB_PASSWORD } = process.env

const db = {};

(async function () {
  if (DB_NAME && DB_USER && DB_PASSWORD) {
    const options: DBOptions = {
      name: DB_NAME,
      username: DB_USER,
      password: DB_PASSWORD
    }
    await connect(options)
  }
})()

export { db }
