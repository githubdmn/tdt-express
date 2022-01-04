import { Router, Request, Response } from 'express'
import service from '../services'

export default Router()
  .get('/:id', (req: Request, res: Response) => {
    console.log(service.userGet())
    res.status(200).send(`Get user with id ${req.params.id}`)
  })
  .post('/', (req: Request, res: Response) => {
    // check req.body form - middleware
    // register service (with confirmation)
    console.log(service.userRegister)
    res.status(200).send(req.body)
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
