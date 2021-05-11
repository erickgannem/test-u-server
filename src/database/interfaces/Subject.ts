import mongoose from 'mongoose'

export default interface Subject extends mongoose.Document {
  content: string
}
