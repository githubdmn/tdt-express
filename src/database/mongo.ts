
import { connect, disconnect } from 'mongoose'
import dev from '../config'

const dblink = `mongodb+srv://${dev().mongo_username}:${dev().mongo_password}@${dev().mongo_server}/${dev().mongo_name}`

export const mongoConnect = async () => await connect(dblink, {
  // useCreateIndex: true,
  // useNewUrlParser: true,
  // useUnifiedTopology: true
})

export const mongoDisconnect = async () => await disconnect()
