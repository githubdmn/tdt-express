import { Router, Request, Response } from 'express'
import userController from './user.handler'
import loginController from './login.handler'
import registerController from './register.handler'

export default Router()
  .get('/health', (req: Request, res: Response) => {
    res.status(200).send('OK')
  })
  .use('/register', registerController)
  .use('/login', loginController)
  // TODO: auth middleware
  .use('/user', userController)
