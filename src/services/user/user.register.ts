
import models from '../../models/'
import { nanoid } from 'nanoid'
import { hashPassword } from './hash.password'

const register = async (input: any): Promise<string> => {
  const exists = await models.UserMongoose.findOne({ email: input.email })
  if (exists == null) {
    input.id = nanoid()
    input.password = await hashPassword(input.password)
    input.createdAt = new Date().toString()
    input.updatedAt = new Date().toString()
    await models.UserMongoose.create(input)
    return 'User successfully registered'
  } else {
    return `User exists with email: ${input.email}`
  }
  // TODO: email verification
}

export default register
