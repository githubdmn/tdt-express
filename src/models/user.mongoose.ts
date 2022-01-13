
import { Schema, model } from 'mongoose'
import UserModel from './user.model'

const schema = new Schema<UserModel>({
  id: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  fullname: { type: String, required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date }
})

export const UserMongoose = model<UserModel>('test-users', schema)
