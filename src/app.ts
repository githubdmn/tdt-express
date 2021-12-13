
import environment from './config'
import { mongodb } from './database'
import express, { Request, Response } from 'express'
import { createCollections } from './models'
import router from './routes'
import EnvVar from './config/envVarType'

const env:EnvVar = environment(process.argv)

mongodb(env)
  .then(() => {
    console.log('Successfully connected to DB')
    createCollections()
  })
  .catch(() => console.log('Failed to connect the DB'))

const indexHeader = '<h3>21-12<h3></break>'
const indexMessage = `<p>Date posted 08/12/2021<br>Home index - ${new Date().toString()}</p>`

express()
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .get('/', (req: Request, res: Response) => res.status(200).send(indexHeader.concat(indexMessage)) )
  .use(router)
  .listen(env.port, () => { console.log(`${new Date().toString()}\nListening on port ${env.port} ...`) })
