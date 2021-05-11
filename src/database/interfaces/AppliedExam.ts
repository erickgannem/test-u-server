import mongoose from 'mongoose'

import Exam from './Exam'
import Student from './Student'

export default interface AppliedExam extends mongoose.Document {
  exam: {
    type: Exam
    ref: string
  }
  student: {
    type: Student
    ref: string
  }
  score: {
    type: string
    default: number
  }
}
