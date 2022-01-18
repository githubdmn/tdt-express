import { Router, Request, Response } from 'express'
import userController from './user.controller'
import loginController from './login.controller'
import registerController from './register.controller'

export default Router()
  .get('/health', (req: Request, res: Response) => {
    res.status(200).send('OK')
  })
  .use('/register', registerController)
  .use('/login', loginController)
  // TODO: auth middleware
  .use('/user', userController)
