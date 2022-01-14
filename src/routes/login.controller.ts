import { Router, Request, Response, NextFunction } from 'express'
import services from '../services'

export default Router()
  .post('/', async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send(services.userLogin(req.body))
    // middleware.loginValidation(req, res, next)
    // try {
    // const register = await service.userRegister(req.body)
    // res.status(200).json(register)
    // } catch (error) {
    // res.status(200).json(error)
    // }
  })
