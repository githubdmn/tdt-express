import { UserMongoose } from './user.mongoose'
import { logger } from '../utils'

export default {
  createCollections: () => {
    UserMongoose.createCollection()
      .then(() => logger.info('Succesfully to created the user collection'))
      .catch(() => logger.error('Failed to create the user collection'))
  },
  UserMongoose
}
