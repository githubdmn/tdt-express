import { UserMongoose } from './user.mongoose'
import utils from '../utils'

export default {
  createCollections: () => {
    UserMongoose.createCollection()
      .then(() => utils.logger.info('Succesfully to created the user collection'))
      .catch(() => utils.logger.error('Failed to create the user collection'))
  },
  UserMongoose
}
