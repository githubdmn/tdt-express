
import { Schema, model } from 'mongoose'
import LoginModel from './login.model'

const schema = new Schema<LoginModel>({
  id: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  lastLogin: { type: Date },
  lastLogout: { type: Date },
  userAgent: { type: String },
  refreshToken: { type: String }
})

export const LoginMongoose = model<LoginModel>('test-login', schema)
