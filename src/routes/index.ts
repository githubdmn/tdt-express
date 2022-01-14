import { Router, Request, Response } from 'express'
import userController from './user.controller'
import loginController from './login.controller'

export default Router()
  .get('/health', (req: Request, res: Response) => {
    res.status(200).send('OK')
  })
  .use('/login', loginController)
  .use('/user', userController)
