import mongoose from 'mongoose'

export default interface Student extends mongoose.Document {
  name: {
    type: string;
    required: boolean;
  }
  cpf: {
    type: string;
    required: boolean;
  }
  email: {
    type: string;
    required: boolean;
  }
  phone: {
    type: string;
    required: boolean;
  }
  photoURL: {
    type: string;
    required: boolean;
  }
  premium: {
    type: string;
    default: boolean
  },
  appliedExams: {
    type: any,
    default: Array<any>
  } // Must specify type
}
