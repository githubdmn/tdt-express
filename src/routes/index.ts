import { Router, Request, Response } from 'express'
import userController from './user.controller'

export default Router()
  .get('/health', (req: Request, res: Response) => {
    res.status(200).send('OK')
  })
  .use('/user', userController)
