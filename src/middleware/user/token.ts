// TODO Token validation

import { Request, Response, NextFunction } from 'express'
import utils from '../../utils'

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token: string | undefined = req.headers.authorization
  const refreshToken: any = req.headers.refreshtoken
  if (typeof token === 'undefined' || typeof refreshToken === 'undefined') return res.sendStatus(401)
  const accessToken: string = token.split(' ')[1]
  try {
    utils.verifyAccessToken(accessToken)
    utils.verifyRefreshToken(refreshToken)
    res.json({ message: 'Token is valid' })
  } catch (error) {
    res.send(error)
  }
}

export default authenticateToken
