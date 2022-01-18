import { Router, Request, Response } from 'express'
import services from '../services'
import middleware from '../middleware'
import utils from '../utils'

export default Router()
  .post('/', middleware.loginValidation, async (req: Request, res: Response) => {
    const login: Promise<any> | any = await services.userLogin({ ...req.body, userAgent: req.get('User-Agent') })
    if (login.error) return res.status(200).json(login.message)
    else {
      const signObject: Object = {
        username: login.email,
        password: login.password,
        login: login.id
      }
      const accessToken = utils.signUser(signObject, { expiresIn: '15m' })
      const refreshToken = utils.signUser(signObject, { expiresIn: '1y' })
      return res.status(200).json({ accessToken: accessToken, refreshToken: refreshToken })
    }
  })
