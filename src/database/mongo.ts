
import { connect, disconnect } from 'mongoose'
import dev from '../config'

const dblink = `mongodb+srv://${dev().mongo_username}:${dev().mongo_password}@${dev().mongo_server}/${dev().mongo_name}`

const mongoConnect = async () => await connect(dblink, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const mongoDisconnect = async () => await disconnect()

module.exports.dblink = dblink
module.exports.mongoConnect = mongoConnect
module.exports.mongoDisconnect = mongoDisconnect
