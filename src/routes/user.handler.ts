import { Router, Request, Response } from 'express'
import service from '../services'

export default Router()
  .get('/:id', (req: Request, res: Response) => {
    console.log(service.userGet('TODO: change'))
    res.status(200).send(`Get user with id ${req.params.id}`)
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
