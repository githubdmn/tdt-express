/* eslint-disable no-unused-vars */

import { connect, disconnect } from 'mongoose'

export const mongodb = async (env: any) => {
  const dblink = `mongodb+srv://${env.mongo_username}:${env.mongo_password}@${env.mongo_server}/${env.mongo_name}`

  await connect(dblink, {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true
  })
  // TODO: mongodb disconnect
}
