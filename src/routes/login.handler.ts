import { Router, Request, Response } from 'express'
import services from '../services'
import middleware from '../middleware'
import utils from '../utils'

export default Router()
  .post('/', middleware.loginValidation, async (req: Request, res: Response) => {
    const login: Promise<any> | any = await services.userLogin({ ...req.body, userAgent: req.get('User-Agent') })
    if (login.error) return res.status(200).json(login.message)
    else {
      const accessToken = utils.generateAccessToken({
        username: login._doc.email,
        password: login._doc.password
      }, { expiresIn: '20s' })
      return res.status(200).json({ accessToken: accessToken, refreshToken: login._doc.refreshToken })
    }
  })
