
import environment from './config'
import { mongodb } from './database'
import express, { Request, Response } from 'express'
import models from './models'
import router from './routes'
import EnvVar from './config/envVarType'
import utils from './utils'

const env:EnvVar = environment(process.argv)

mongodb(env)
  .then(() => {
    utils.logger.info('Successfully connected to DB')
    models.createCollections()
  })
  .catch(() => utils.logger.error('Failed to connect the DB'))

const indexHeader = '<h3>21-12<h3></break>'
const indexMessage = `<p>Date posted 08/12/2021<br>Home index - ${new Date().toString()}</p>`

express()
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .get('/', (req: Request, res: Response) => res.status(200).send(indexHeader.concat(indexMessage)))
  .use(router)
  .listen(env.port, () => utils.logger.info(`Listening on port ${env.port}...`))
