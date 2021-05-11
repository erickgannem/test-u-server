import { Schema, model } from 'mongoose'
import Question from '../interfaces/Question'

const { Types } = Schema
const { String, ObjectId } = Types

const questionSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  attachments: {
    type: String,
    required: false,
    default: null
  },
  subject: {
    type: ObjectId,
    ref: 'Subject',
    required: true
  }
})

export default model<Question>('Question', questionSchema)
