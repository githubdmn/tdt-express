
import models from '../../models/'
import { customAlphabet } from 'nanoid'
import { hashPassword } from './hash.password'
import utils from '../../utils'

const register = async (input: any): Promise<string> => {
  const exists = await models.UserMongoose.findOne({ email: input.email })
  if (exists == null) {
    input.id = customAlphabet('1234567890', 6)()
    input.password = await hashPassword(input.password)
    input.createdAt = new Date().toString()
    input.updatedAt = new Date().toString()
    const register: any = await models.UserMongoose.create(input)
    const login: any = await models.LoginMongoose.create({
      id: input.id,
      email: input.email,
      password: input.password,
      lastLogin: new Date().toString(),
      lastLogout: new Date().toString(),
      userAgent: input.userAgent,
      refreshToken: utils.generateRefreshToken({
        email: input.email,
        password: input.password
      })
    })
    if (register.id && login.id) return 'User successfully registered'
    else return 'An error occured while saving to the database'
  } else {
    return `User exists with email: ${exists.email}`
  }
  // TODO: email verification
}

export default register
