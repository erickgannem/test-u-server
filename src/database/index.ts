import mongoose from 'mongoose'
import Credentials from './interfaces/Credentials'

export default class Database {
  async connect ({ username, password, name }: Credentials) {
    try {
      const call = mongoose.connect(
        `mongodb+srv://${username}:${password}@cluster0.ssxoo.mongodb.net/${name}?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
      )
      return call
    } catch (err) {
      return err
    }
  }
}
