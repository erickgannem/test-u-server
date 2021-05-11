import { Schema, model } from 'mongoose'
import Subject from '../interfaces/Subject'

const { Types } = Schema
const { String } = Types

const subjectSchema = new Schema({
  content: String
})

export default model<Subject>('Subject', subjectSchema)
