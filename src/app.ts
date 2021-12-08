
import dev from './config'
import { mongoConnect } from './database'
import { express } from 'express'

console.log(dev())

mongoConnect()
  .then(() => console.log('successfully connected to mongodb'))
  .catch(() => console.log('unsuccessfully connected to mongodb'))
