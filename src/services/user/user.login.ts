
import models from '../../models/'
import { compare } from 'bcrypt'

const login = async (input: any): Promise<string> => {
  // const exists: Promise<any> | null = await models.UserMongoose.findOne({ email: input.email })
  // console.log(exists)
  // if (exists != null) {
  //   input.id = exists.id
  //   const result: boolean = await compare(input.password, exists.password)
  //   if (result) {
  //     input.createdAt = new Date().toString()
  //     await models.LoginMongoose.create(input)
  //     return 'User successfully registered'
  //   }
  //   else {
  //     return 'Invalid username and password'
  //   }
  // } else {
  //   return `User does not exist with email: ${input.email}`
  // }
  return `User does not exist with email: ${input.email}`
}

export default login
