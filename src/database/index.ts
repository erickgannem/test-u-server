import mongoose from 'mongoose'
import Credential from './interfaces/Credential'

export default class Database {
  connect ({ username, password, name }: Credential) {
    return mongoose.connect(
        `mongodb+srv://${username}:${password}@cluster0.ssxoo.mongodb.net/${name}?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
  }

  disconnect () {
    return mongoose.disconnect()
  }
}
