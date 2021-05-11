import mongoose from 'mongoose'
import Subject from './Subject'

export default interface Question extends mongoose.Document {
  content: {
    type: string;
    required: boolean;
  },
  attachments: {
    type: string;
    required: boolean;
    default: null;
  }
  subject: {
    type: Subject;
    ref: string;
    required: boolean;
  }
}
