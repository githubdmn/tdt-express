
import dev from './config'
import { mongoConnect } from './database'
import express, {Request, Response} from 'express'

mongoConnect()
  .then(() => console.log('successfully connected to mongodb'))
  .catch(() => console.log('unsuccessfully connected to mongodb'))

const indexHeader = `<h3>21-12<h3></break>`;
const indexMessage = `<p>Date posted 08/12/2021\nHome index - ${new Date()}</p>`;

express()
	.use(express.json())
	.use(express.urlencoded({ extended: true }))
	.get('/', (req: Request, res:Response) => { res.status(200).send(indexHeader.concat(indexMessage)) })
	.get('/health', (req: Request, res:Response) => { res.status(200).send('OK') })
	.listen(() => console.log(`Listening on port ${dev().port}...`));

