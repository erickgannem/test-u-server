import mongoose from 'mongoose'

import Credential from './interfaces/Credential'
import Student from './models/Student'

export default class Database {
  static connect ({ username, password, name }: Credential) {
    return mongoose.connect(
        `mongodb+srv://${username}:${password}@cluster0.ssxoo.mongodb.net/${name}?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
  }

  static disconnect () {
    return mongoose.disconnect()
  }

  static models = {
    Student
  }
}
