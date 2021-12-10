import { UserMongoose } from './user.mongoose'

export const createCollections = () => {
  UserMongoose.createCollection()
    .then(() => console.log('Succesfully to created the user collection'))
    .catch(() => console.log('Failed to create the user collection'))
}

module.exports.UserMongoose = UserMongoose
