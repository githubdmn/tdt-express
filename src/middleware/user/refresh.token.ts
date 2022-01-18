import { Request, Response, NextFunction } from 'express'

const authenticateRefreshToken = (req: Request, res: Response, next: NextFunction) => {
  const refreshToken: any = req.body.refreshToken
  if (typeof refreshToken === 'undefined') return res.sendStatus(401)
  next()
}

export default authenticateRefreshToken
