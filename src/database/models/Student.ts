import { Schema, model } from 'mongoose'
import Student from '../interfaces/Student'

const { Types } = Schema
const { String, Boolean, ObjectId } = Types

const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  photoURL: {
    type: String,
    required: true
  },
  premium: {
    type: Boolean,
    default: false
  },
  appliedExams: {
    type: [ObjectId],
    ref: 'AppliedExam'
  }

})

export default model<Student>('Student', studentSchema)
