import models from '../../models'

const get = async (email: string): Promise<any> => {
  return await models.UserMongoose.findOne({ email: email })
}

export default get
