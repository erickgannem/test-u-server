import mongoose from 'mongoose'

const { DB_NAME, DB_USER, DB_PASSWORD } = process.env

async function connectToDatabase () {
  const c = await mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ssxoo.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  return c
}

connectToDatabase()

const db = {}

export { db, connectToDatabase }
