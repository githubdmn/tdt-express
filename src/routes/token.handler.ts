import { Router, Request, Response } from 'express'
import middleware from '../middleware'
import utils from '../utils'

export default Router()
  .post('/', middleware.authenticateRefreshToken, async (req: Request, res: Response) => {
    res.json({ accessToken: await utils.reissueToken(req.body.refreshToken) })
  })
