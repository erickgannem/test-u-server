import { Schema, model } from 'mongoose'

const { Types } = Schema

const { Number, ObjectId } = Types

const appliedExamSchema = new Schema({
  exam: {
    type: ObjectId,
    ref: 'Exam'
  },
  student: {
    type: ObjectId,
    ref: 'Student'
  },
  score: {
    type: Number,
    default: 0
  }
})

export default model('AppliedExam', appliedExamSchema)
