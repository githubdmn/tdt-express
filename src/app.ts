
import dev from './config'
// eslint-disable-next-line
import { mongo_connect } from './database'
import { express } from 'express'

console.log(dev())

// eslint-disable-next-line
mongo_connect()
  .then(() => console.log('successfully connected to mongodb'))
  .catch(() => console.log('unsuccessfully connected to mongodb'))
