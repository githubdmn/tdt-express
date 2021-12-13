import { UserMongoose } from './user.mongoose'
import logger from '../utils'

export const createCollections = () => {
  UserMongoose.createCollection()
    .then(() => logger.info('Succesfully to created the user collection'))
    .catch(() => logger.info('Failed to create the user collection'))
}

module.exports.UserMongoose = UserMongoose
