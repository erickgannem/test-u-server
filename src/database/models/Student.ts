import { Schema, model } from 'mongoose'
import IStudent from '../interfaces/IStudent'

const { Types } = Schema
const { String, Boolean } = Types

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
  }
})

export default model<IStudent>('student', studentSchema)
