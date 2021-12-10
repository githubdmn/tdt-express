
import dev from './config'
import { mongoConnect } from './database'
import express, { Request, Response } from 'express'
import { createCollections } from './models'

mongoConnect()
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
  .get('/', (req: Request, res: Response) => { res.status(200).send(indexHeader.concat(indexMessage)) })
  .get('/health', (req: Request, res: Response) => { res.status(200).send('OK') })
  .listen(dev().port, () => { console.log(`${new Date().toString()}\nListening on port ${dev().port} ...`) })
