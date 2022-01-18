import { Router, Request, Response } from 'express'
import service from '../services'
import middleware from '../middleware'

export default Router()
  .post('/', middleware.registerValidation, async (req: Request, res: Response) => {
    const register = await service.userRegister({
      ...req.body,
      userAgent: req.get('User-Agent')
    })
    return res.status(200).json(register)
  })
