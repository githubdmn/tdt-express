
import { Schema, model } from 'mongoose'
import UserModel from './user.model'

const schema = new Schema<UserModel>({
  id: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  fullname: { type: String, required: true }
})

const UserMongoose = model<UserModel>('User', schema)

export default UserMongoose
