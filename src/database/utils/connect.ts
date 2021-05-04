import mongoose from 'mongoose'

import DBOptions from '../interfaces/DBOptions'

export default function connect ({ username, password, name }: DBOptions) {
  return mongoose.connect(
    `mongodb+srv://${username}:${password}@cluster0.ssxoo.mongodb.net/${name}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
}
