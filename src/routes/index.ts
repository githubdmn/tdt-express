import { Router, Request, Response } from 'express'
import userHandler from './user.handler'
import loginHandler from './login.handler'
import registerHandler from './register.handler'
import tokenHandler from './token.handler'
import authenticateToken from '../middleware/user/token'

export default Router()
  .get('/health', (req: Request, res: Response) => {
    res.status(200).send('OK')
  })
  .use('/register', registerHandler)
  .use('/login', loginHandler)
  .use('/token', tokenHandler)
  // TODO: auth middleware
  .use('/user', authenticateToken, userHandler)
