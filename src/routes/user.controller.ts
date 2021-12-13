import { Router, Request, Response } from 'express'

export default Router()
  .get('/:id', (req: Request, res: Response) => {
    res.status(200).send(`Get user with id ${req.params.id}`)
  })
  .post('/', (req: Request, res: Response) => {
    console.log('user - register')
    res.status(200).send('Register user')
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
