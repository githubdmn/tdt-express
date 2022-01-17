
import models from '../../models/'
import { compare } from 'bcrypt'

const login = async (input: any): Promise<any> => {
  const exists: any = await models.LoginMongoose.findOne({ email: input.email })
  if (exists != null) {
    // eslint-disable-next-line spaced-comment
    const result: boolean = await compare(input.password, exists.password)
    if (result) {
      const saved = await models.LoginMongoose.findOneAndUpdate(exists.email,
        {
          lastLogin: new Date(),
          userAgent: input.userAgent
        })
      return { ...saved, error: false }
    } else {
      return { message: 'Invalid credentials', error: true }
    }
  } else {
    return {
      message: `User does not exist with email: ${input.email}`,
      error: true
    }
  }
}

export default login
