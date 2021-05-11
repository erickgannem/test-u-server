import mongoose from 'mongoose'

import Subject from './Subject'
import Question from './Question'

export default interface Exam extends mongoose.Document {
  subject: {
    type: Subject
    ref: string
  },
  questions: {
    type: Question[]
    ref: string
  }
}
