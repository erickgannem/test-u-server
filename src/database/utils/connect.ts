import mongoose from 'mongoose'

import DBOptions from '../interfaces/DBOptions'

export default async function connect ({ username, password, name }: DBOptions) {
  const env = process.env.NODE_ENV

  if (env === 'test') {
    return await mongoose.connect(
      `mongodb://localhost:27017/${name}`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
  }
  return await mongoose.connect(
    `mongodb+srv://${username}:${password}@cluster0.ssxoo.mongodb.net/${name}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
}
