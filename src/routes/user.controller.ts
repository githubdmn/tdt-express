import { Router, Request, Response, NextFunction } from 'express'
import service from '../services'
import middleware from '../middleware'

export default Router()
  .get('/:id', (req: Request, res: Response) => {
    console.log(service.userGet())
    res.status(200).send(`Get user with id ${req.params.id}`)
  })
  .post('/', async (req: Request, res: Response, next: NextFunction) => {
    middleware.registerValidation(req, res, next)
    try {
      const register = await service.userRegister(req.body)
      res.status(200).json(register)
    } catch (error) {
      res.status(200).json(error)
    }
  })
  .put('/:id', (req: Request, res: Response) => {
    console.log('user - update put')
    res.status(200).send(`Put user with id ${req.params.id}`)
  })
  .patch('/:id', (req: Request, res: Response) => {
    console.log('user - update patch')
    res.status(200).send(`Patch user with id ${req.params.id}`)
  })
  .delete('/:id', (req: Request, res: Response) => {
    console.log('user - delete')
    res.status(200).send(`Delete user with id ${req.params.id}`)
  })
