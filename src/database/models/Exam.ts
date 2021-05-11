import { Schema, model } from 'mongoose'

import Exam from '../interfaces/Exam'

const { Types } = Schema
const { ObjectId } = Types

const examSchema = new Schema({
  subject: {
    type: ObjectId,
    ref: 'Subject'
  },
  questions: {
    type: [ObjectId],
    ref: 'Question'
  }
})

export default model<Exam>('Exam', examSchema)
